const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Testa att detta funkar, ersätt sedan med egen kod
console.log("Projekt 1");
app.get('/', (req, res) => res.json("Projekt 1"));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
