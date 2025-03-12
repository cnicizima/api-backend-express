// importação do express antiga:
//const express = require('express')

//importação do express atualizada: importa o express do pacote express
import express from 'express'; 
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';

// cria o objeto app que tem todas as funçoes do express
const app = express();

//middlaware para o express entender json. Middlaware nativo do express.
app.use(express.json()) //gravar objeto no req.body



//cria uma rota get no endereço http://localhots:3000/
app.get('/', (req, res) => {
  return res.json({ 
    message: 'Bem-vindo à API'});
}); 


// app.use é um middleware que recebe um caminho e um router
// quero que todo caminho /user, use o roteador userRouter
// ou seja, se o caminho for /user, vai chamar o userRouter
app.use('/user', userRouter);
app.use('/product', productRouter);

//listen tem 2 parametros: porta e uma função callback - sobe o servidor e ouve as rotas
app.listen(3000, () => {    
  console.log('Server is running on http://localhost:3000')
});  
