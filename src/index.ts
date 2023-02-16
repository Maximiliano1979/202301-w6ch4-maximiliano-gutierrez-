import "./loadEnvironment.js";
import express from "express";
import createDebug from "debug";
import things from "./data/data.js";

const debug = createDebug("things:root");

const app = express();
const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  debug(`Working in port ${port}`);
});

app.get("/things", (req, res) => {
  res.status(200).json({ things });
});
