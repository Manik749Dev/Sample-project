const express = require("express");
const app = express();

// Create a basic route
app.get("/", (req, res) => {
  // res.send("Hello! Your local server is running successfully 🚀");
  res.send("server is running successfully 🚀");
            
});

// Run the server
app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
