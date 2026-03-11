// TURN server credentials generator for WebRTC
const crypto = require("crypto");

function generateTurnCredentials() {
  const secret = "my-super-secret-key-for-turn-server-2025";
  const timestamp = Math.floor(Date.now() / 1000) + 24 * 3600; // 24h TTL
  const username = timestamp.toString();
  const hmac = crypto.createHmac("sha1", secret);
  hmac.update(username);
  const credential = hmac.digest("base64");

  return { username, credential };
}

module.exports = { generateTurnCredentials };
