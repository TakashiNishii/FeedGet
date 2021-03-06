import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();//express function 

app.use(cors()); //cors function para permitir acesso de outros domínios

app.use(express.json()); //use json na nossa API

app.use(routes) //use as rotas que estão no routes.ts


app.set('port', process.env.PORT || 3333); //seta a porta que será usada

app.listen( app.get('port'), () => {
    console.log("HTTP server running!");
}); //listen é uma função do express que faz o servidor ouvir a porta 3333