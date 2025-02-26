const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Chat Assistant töötab!");
});

app.listen(PORT, () => console.log(`Server töötab pordil ${PORT}`));
