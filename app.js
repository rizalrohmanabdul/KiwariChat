require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const chatRoutes = require("./src/routes/chatRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// routes
app.use("/api/chat", chatRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});