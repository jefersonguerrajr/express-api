import express from 'express'
import {userRouters } from './src/controller/user';

const app = express();
const port = 3000;

// ... (outros middlewares e configurações da aplicação)

app.use(express.json());
//base url
app.use("/api/user", userRouters)

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});