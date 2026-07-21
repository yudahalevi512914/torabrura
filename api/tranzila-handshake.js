module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = typeof request.body === "string" ? JSON.parse(request.body || "{}") : (request.body || {});
    const amount = body.amount;
    const terminalName = process.env.TRANZILA_TERMINAL_NAME;
    const appKey = process.env.TRANZILA_APP_KEY;
    const secret = process.env.TRANZILA_SECRET;

    if (!terminalName || !appKey || !secret) {
      return response.status(501).json({
        error: "Tranzila handshake is not configured yet",
        missing: [
          !terminalName && "TRANZILA_TERMINAL_NAME",
          !appKey && "TRANZILA_APP_KEY",
          !secret && "TRANZILA_SECRET"
        ].filter(Boolean)
      });
    }

    const numericAmount = Number(amount);
    if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
      return response.status(400).json({ error: "Invalid donation amount" });
    }

    const crypto = require("crypto");
    const requestTime = Math.floor(Date.now() / 1000).toString();
    const nonce = crypto.randomBytes(40).toString("hex");
    const accessToken = crypto
      .createHmac("sha256", secret + requestTime + nonce)
      .update(appKey)
      .digest("hex");

    const sum = numericAmount.toFixed(2);
    const tranzilaResponse = await fetch("https://api.tranzila.com/v2/handshake/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-tranzila-api-app-key": appKey,
        "X-tranzila-api-request-time": requestTime,
        "X-tranzila-api-nonce": nonce,
        "X-tranzila-api-access-token": accessToken
      },
      body: JSON.stringify({
        terminal_name: terminalName,
        sum: sum,
        amount: sum,
        currency_code: "ILS"
      })
    });

    const data = await tranzilaResponse.json().catch(function () { return {}; });
    if (!tranzilaResponse.ok || data.error_code) {
      return response.status(502).json({
        error: "Failed to create Tranzila handshake",
        details: data
      });
    }

    const thtk = data.thtk || data.token || data.handshake_token;
    if (!thtk) {
      return response.status(502).json({
        error: "Tranzila did not return a handshake token",
        details: data
      });
    }

    return response.status(200).json({
      thtk: thtk,
      terminal_name: terminalName,
      amount: sum,
      currency_code: "ILS"
    });
  } catch (error) {
    return response.status(500).json({ error: "Unexpected Tranzila handshake error" });
  }
};
