const path = require("path");
const express = require("express");
const bcrypt = require("bcrypt");
const { Router } = require("express");

const app = express();
app.use(express.json({ type: "application/json" }));

const router = express.Router({
  caseSensitive: true,
});

app.use(router);
const staticFiles = path.join(__dirname);
app.use(
  express.static(staticFiles, {
    redirect: false,
  })
);

router.get("/users", (req, res) => {
  res.send(users);
});

router.post("/user", (req, res) => {
  console.log(req.body.name);
  res.end();
});

app.listen(3000, () => {
  console.log("SERVER STARTED...");
});
