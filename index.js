const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.listen(5000);
<<<<<<< HEAD
//http://localhost:5000
=======
>>>>>>> ca02b98f1db7ac3dfcac047f044c97416c709901
