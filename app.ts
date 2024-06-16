import express from 'express'
import { userRouters } from './src/controller/UserController';
import {sequelizeInstance} from "./src/db"

const app = express();
const port = 3000;

sequelizeInstance.sync({force: true});

app.use(express.json());

app.use("/api/user", userRouters)

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});