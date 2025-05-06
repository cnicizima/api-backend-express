// importação do express antiga:
//const express = require('express')

//importação do express atualizada: importa o express do pacote express
import express from 'express'; 
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import authRouter from './routers/authRouter.js';
import cors from 'cors';
import { logger } from './middlewares/logger.js';
import { loggerBody } from './middlewares/loggerBody.js';
import { errorsHandler } from './middlewares/errorsHandler.js';
import welcomeController from './controller/welcomeController.js';
import notFoundController from './controller/notFoundController.js';

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
//manda no terminal o body do envio como um log - nao é necessario. 

//ele tenta entrar no '/' e se não encontrar, ele vai para o próximo middleware
//cria uma rota get no endereço http://localhots:3000/

app.get('/', welcomeController)// //middleware que vai tratar a rota /, ou seja, quando o usuário acessar a rota / ele vai chamar o welcomeController. O welcomeController é uma função que recebe o req e o res e retorna um json com a mensagem de boas vindas. O welcomeController é importado do controller/welcomeController.js. O welcomeController é uma função que recebe o req e o res e retorna um json com a mensagem de boas vindas. O welcomeController é importado do controller/welcomeController.js. O welcomeController é uma função que recebe o req e o res e retorna um json com a mensagem de boas vindas. O welcomeController é importado do controller/welcomeController.js. O welcomeController é uma função que recebe o req e o res e retorna um json com a mensagem de boas vindas. O welcomeController é importado do controller/welcomeController.js. O welcomeController é uma função que recebe o req e o res e retorna um json com a mensagem de boas vindas. O welcomeController é importado do controller/welcomeController.js. O welcomeController é uma função que recebe o req e o res e retorna um json com a mensagem de boas vindas. O welcomeController é importado do controller/welcomeController.js. O welcomeController é uma função que recebe o req e o res e retorna um json com a mensagem de boas vindas. O welcomeController é importado do controller/welcomeController.js. O welcomeController é uma função que recebe o req e o res e retorna um json com a mensagem de boas vindas. O welcomeController é importado do controller/welcomeController.js. O welcomeController é uma função que recebe o req e o res e retorna um json com a mensagem de boas vindas. O welcomeController é importado do controller/welcomeController.js. O welcomeController é uma função que recebe o req e o res e retorna um json com a mensagem de boas vindas. O welcomeController é importado do controller/welcomeController.js. O welcomeController é uma função que recebe o req e o res e retorna um json com a mensagem de boas vindas. O welcomeController é importado do controller/welcomeController.js. O welcomeController é uma função que recebe o req e o res e retorna um json com a mensagem de boas vindas. O welcomeController é importado do controller/welcomeController.js. O welcomeController é uma função que recebe o req e o res e retorna um json com

//se nao entrar no '/' ele vai tentar o '/user' que é o próximo. Por isso a ordem dos middlewares é importante

// app.use é um middleware que recebe um caminho e um router
// quero que todo caminho /user, use o roteador userRouter
// ou seja, se o caminho for /user, vai chamar o userRouter
app.use('/auth', authRouter);
app.use('/user', userRouter);
// app.use('/user', logger, userRouter);  posso usar o middleware aqui também, ou seja, ele roda o logger antes de entrar no controller

app.use('/product', productRouter);

app.use('*', notFoundController)// //middleware para tratar rotas não encontradas. O '*' significa que ele vai pegar todas as rotas que não foram tratadas antes. Ele tem que ser o último middleware, porque ele vai pegar todos os erros que não foram tratados antes.

app.use(errorsHandler) //middleware para tratamento de erro. Ele tem que ser o último middleware, porque ele vai pegar todos os erros que não foram tratados antes.

//listen tem 2 parametros: porta e uma função callback - sobe o servidor e ouve as rotas
app.listen(3000, () => {    
  console.log('Server is running on http://localhost:3000')
});  


//O MAIS IMPORTANTE DISTO TUDO É ENTENDER QUE ELE FUNCIONA EM SEQUENCIA QUANDO RECEBE UMA REQUEST
// PASSANDO PELOS MIDDLEWARES, ENTRANDO ONDE É PRA ENTRAR E SEGUINDO
// POR ISSO É IMPORTANTE USAR O NEXT E A ORDEM DOS MIDDLEWARES