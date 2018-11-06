const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "Hello" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//Deployed: https://email-survey123.herokuapp.com/
