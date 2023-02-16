import things from "../data/data.js";
import { type Request, type Response } from "express";

export const oneThingiLike = (req: Request, res: Response) => {
  const { id } = req.params;
  const oneThing = things.find((thing) => thing.id === Number(id));
  if (!oneThing) {
    res.status(404).json({ error: "Nothing to show you" });
  }

  res.status(200).json({ oneThing });
};

export const thingsiLike = (req: Request, res: Response) => {
  res.status(200).json({ things });
};
