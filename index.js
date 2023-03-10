// Add Express
const express = require("express");

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
    console.log("Log para get");
  res.send("Express get on Vercel");
});

app.post("/", (req, res) => {
    console.log(req.body);
    console.log(req.headers);
    res.send("Express post on Vercel");
  });

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});
module.exports = app;