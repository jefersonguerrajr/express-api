import express, { Request, Response } from 'express';
import { UserService } from '../service/UserService';
import {sequelizeInstance} from "../db"

const userRouters = express.Router();

const userRepository = new UserService(sequelizeInstance);

userRouters.get("/", async (req:Request, res:Response) => {
  try {
      const user:any = await userRepository.getAllUsers()
      res.status(200).json(user);
  } catch (error) {
      res.status(500).json(error);
  }
})

userRouters.post("/save", async (req:Request, res:Response) => {
  try {
    const user:any = await userRepository.createUser(req.body)
      res.status(200).json(user);
  } catch (error) {
      res.status(500).json(error);
  }
})

export {userRouters}

