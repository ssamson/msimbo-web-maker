// import express library
const express = require("express");
const path = require("path");

// init express
const app = express();

app.use(express.json());

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3100;

// create a server listening at localhost:3100
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
