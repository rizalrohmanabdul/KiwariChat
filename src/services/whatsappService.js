const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on("qr", qr => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("✅ WhatsApp Client is ready!");
});

client.initialize();

const sendMessage = async (number, message) => {
  try {
    const chatId = number.includes("@c.us") ? number : `${number}@c.us`;
    await client.sendMessage(chatId, message);
    return { status: true, message: "Message sent" };
  } catch (err) {
    return { status: false, error: err.message };
  }
};

module.exports = { sendMessage };