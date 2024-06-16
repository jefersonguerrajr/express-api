import express, { Request, Response } from 'express';
import { User } from '../model/user';

const userRouters = express.Router();

userRouters.get("/", async (req:Request, res:Response) => {
  try {
      const user:User = {id:1, name:"jeferson"}
      res.status(200).json(user);
  } catch (error) {
      res.status(500).json(error);
  }
})

userRouters.post("/save", async (req:Request, res:Response) => {
  try {
      console.log(req.body)
      res.status(200).json("req.body");
  } catch (error) {
      res.status(500).json(error);
  }
})

export {userRouters}

