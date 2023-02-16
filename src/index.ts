import "./loadEnvironment.js";
import express from "express";
import createDebug from "debug";
import thingToLoveRouter from "./routes/router.js";

const debug = createDebug("things:root");

const app = express();
const port = process.env.PORT ?? 3000;

app.use("/things", thingToLoveRouter);

app.listen(port, () => {
  debug(`Working in port ${port}`);
});
