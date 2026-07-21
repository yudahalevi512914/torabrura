const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 5174;
const root = __dirname;
const tranzilaHandshake = require("./api/tranzila-handshake");

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
};

const server = http.createServer((req, res) => {
  const requestPath = decodeURIComponent(req.url.split("?")[0]);

  if (requestPath === "/api/tranzila-handshake") {
    let rawBody = "";
    req.on("data", (chunk) => {
      rawBody += chunk;
      if (rawBody.length > 16 * 1024) req.destroy();
    });
    req.on("end", async () => {
      try {
        req.body = rawBody ? JSON.parse(rawBody) : {};
      } catch (error) {
        res.writeHead(400, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
        res.end(JSON.stringify({ error: "Invalid JSON body" }));
        return;
      }
      res.status = (statusCode) => { res.statusCode = statusCode; return res; };
      res.json = (payload) => {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.end(JSON.stringify(payload));
      };
      await tranzilaHandshake(req, res);
    });
    return;
  }
  const filePath = path.join(root, requestPath === "/" ? "index.html" : requestPath);

  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    res.writeHead(200, {
      "Content-Type": contentTypes[path.extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    res.end(content);
  });
});

server.listen(port, () => {
  console.log(`Torah Berura site: http://localhost:${port}`);
});
