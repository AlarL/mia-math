const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Teenindab `index.html` lehte
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/", (req, res) => {
    const userMessage = req.body.message;
    res.json({ response: `Said: ${userMessage}` });
});

app.listen(PORT, () => console.log(`Server töötab pordil ${PORT}`));
