import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();//express function 

app.use(cors()); //cors function para permitir acesso de outros domínios

app.use(express.json()); //use json na nossa API

app.use(routes) //use as rotas que estão no routes.ts



app.listen(3333, () => {
    console.log("HTTP server running!");
}); //listen é uma função do express que faz o servidor ouvir a porta 3333