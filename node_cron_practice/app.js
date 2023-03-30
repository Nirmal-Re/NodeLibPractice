const express = require("express");
const cron = require("node-cron");

const app = express();

app.use("/", (req, res) => {
  res.send("hahahah");
});

const task = cron.schedule(
  "00 0-50 22 * * *",
  () => {
    const date = new Date();
    console.log(`${date}`);
  },
  {
    scheduled: true,
  }
);
