const express = require("express");
const app = express();
require("dotenv").config();

app.use(
  cors({
    origin: true,
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

const port = process.env.PORT || 4000;

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
