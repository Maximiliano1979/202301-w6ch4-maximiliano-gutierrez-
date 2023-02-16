import { Router } from "express";
import {
  oneThingiLike,
  thingsiLike,
} from "../controllers/thingsILikeControllers.js";

// eslint-disable-next-line new-cap
const thingToLoveRouter = Router();

thingToLoveRouter.get("/", thingsiLike);
thingToLoveRouter.get("/:id", oneThingiLike);

export default thingToLoveRouter;
