const test = require("node:test");
const assert = require("node:assert/strict");
const handler = require("../api/tranzila-handshake");

function responseRecorder() {
  return {
    headers: {}, statusCode: 200, payload: null,
    setHeader(name, value) { this.headers[name] = value; },
    status(code) { this.statusCode = code; return this; },
    json(payload) { this.payload = payload; return this; }
  };
}

test("rejects non-POST requests", async () => {
  const response = responseRecorder();
  await handler({ method: "GET" }, response);
  assert.equal(response.statusCode, 405);
  assert.equal(response.headers["Cache-Control"], "no-store");
});

test("reports missing server-side credentials", async () => {
  const response = responseRecorder();
  await handler({ method: "POST", body: { amount: "10.00" } }, response);
  assert.equal(response.statusCode, 501);
  assert.deepEqual(response.payload.missing, ["TRANZILA_TERMINAL_NAME", "TRANZILA_APP_KEY", "TRANZILA_SECRET"]);
});

test("rejects malformed, excessive, and over-precision amounts", async () => {
  const saved = { ...process.env };
  Object.assign(process.env, { TRANZILA_TERMINAL_NAME: "terminal", TRANZILA_APP_KEY: "key", TRANZILA_SECRET: "secret" });
  for (const amount of ["0", "1.001", "100000.01", "not-a-number"]) {
    const response = responseRecorder();
    await handler({ method: "POST", body: { amount } }, response);
    assert.equal(response.statusCode, 400, amount);
  }
  process.env = saved;
});

test("creates a handshake with the locked numeric sum", async () => {
  const saved = { ...process.env };
  const savedFetch = global.fetch;
  Object.assign(process.env, { TRANZILA_TERMINAL_NAME: "terminal", TRANZILA_APP_KEY: "key", TRANZILA_SECRET: "secret" });
  let outbound;
  global.fetch = async (url, options) => {
    outbound = { url, options };
    return { ok: true, json: async () => ({ error_code: 0, thtk: "token-123" }) };
  };
  const response = responseRecorder();
  await handler({ method: "POST", body: { amount: "18.50" } }, response);
  assert.equal(response.statusCode, 200);
  assert.equal(response.payload.thtk, "token-123");
  assert.deepEqual(JSON.parse(outbound.options.body), { terminal_name: "terminal", sum: 18.5 });
  global.fetch = savedFetch;
  process.env = saved;
});

test("does not expose provider error details", async () => {
  const saved = { ...process.env };
  const savedFetch = global.fetch;
  Object.assign(process.env, { TRANZILA_TERMINAL_NAME: "terminal", TRANZILA_APP_KEY: "key", TRANZILA_SECRET: "secret" });
  global.fetch = async () => ({ ok: true, json: async () => ({ error_code: 401, secret_context: "hidden" }) });
  const response = responseRecorder();
  await handler({ method: "POST", body: { amount: "10" } }, response);
  assert.equal(response.statusCode, 502);
  assert.equal(response.payload.details, undefined);
  global.fetch = savedFetch;
  process.env = saved;
});
