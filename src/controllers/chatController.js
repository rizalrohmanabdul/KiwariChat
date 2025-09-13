const whatsappService = require("../services/whatsappService");

exports.sendMessage = async (req, res) => {
  const { number, message } = req.body;

  if (!number || !message) {
    return res.status(400).json({ error: "Number and message are required" });
  }

  const result = await whatsappService.sendMessage(number, message);
  res.json(result);
};

// exports.sendMessage = async (req, res) => {
//   const { number, message, lopp = 1 } = req.body;

//   if (!number || !message) {
//     return res.status(400).json({ error: "Number and message are required" });
//   }

//   try {
//     const results = [];
//     for (let i = 0; i < lopp; i++) {
//       const result = await whatsappService.sendMessage(number, message);
//       results.push(result);
//     }

//     res.json({ 
//       success: true, 
//       repeat: lopp, 
//       results 
//     });
//   } catch (err) {
//     res.status(500).json({ error: "Gagal mengirim pesan", details: err.message });
//   }
// };
