const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This is the NEW updated text 🚀");
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
