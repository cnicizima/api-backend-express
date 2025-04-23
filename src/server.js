// importação do express antiga:
//const express = require('express')

//importação do express atualizada: importa o express do pacote express
import express from 'express'; 
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import cors from 'cors';
import { logger } from './middlewares/logger.js';
import { loggerBody } from './middlewares/loggerBody.js';

// o express roda este server na ordem dos middlewares que aparecem. 

// cria o objeto app que tem todas as funçoes do express
const app = express();

// o server.js é executado na sequencia em que aparecem as funçoes (middlewares), por isso a ordem é importante

app.use(logger) 
//middleware para liberar o cors policy. dessa forma pode rodar no browser cros origin
app.use(cors ())
//middlaware para o express entender json. Middlaware nativo do express.
app.use(express.json()) //gravar objeto no req.body
app.use(loggerBody) 

//ele tenta entrar no '/' e se não encontrar, ele vai para o próximo middleware
//cria uma rota get no endereço http://localhots:3000/
app.get('/', (req, res) => {
  return res.json({ 
    message: 'Bem-vindo à API'});
}); 

//se nao entrar no '/' ele vai tentar o '/user' que é o próximo. Por isso a ordem dos middlewares é importante

// app.use é um middleware que recebe um caminho e um router
// quero que todo caminho /user, use o roteador userRouter
// ou seja, se o caminho for /user, vai chamar o userRouter
app.use('/user', userRouter);
// app.use('/user', logger, userRouter);  posso usar o middleware aqui também, ou seja, ele roda o logger antes de entrar no controller
app.use('/product', productRouter);

//listen tem 2 parametros: porta e uma função callback - sobe o servidor e ouve as rotas
app.listen(3000, () => {    
  console.log('Server is running on http://localhost:3000')
});  
