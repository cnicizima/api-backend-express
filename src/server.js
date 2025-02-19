// importação do express antiga:
//const express = require('express')

//importação do express atualizada: importa o express do pacote express
import express from 'express'; 

// cria o objeto app que tem todas as funçoes do express
const app = express();

//cria uma rota get no endereço http://localhots:3000/
app.get('/', (req, res) => {
  return res.json({ 
    message: 'Chamado método GET'});
}); 

app.post('/', (req, res) => {
  return res.json({ 
    message: 'Chamado método POST'});
}); 

app.patch('/', (req, res) => {
  return res.json({ 
    message: 'Chamado método PATCH'});
});

app.put('/', (req, res) => {
  return res.json({ 
    message: 'Chamado método PUT'});
});

app.delete('/', (req, res) => {
  return res.json({ 
    message: 'Chamado método DELETE'});
});

app.delete('/user', (req, res) => {
  return res.json({ 
    message: 'Chamado método DELETE em /user '});
});

//listen tem 2 parametros: porta e uma função callback - sobe o servidor e ouve as rotas
app.listen(3000, () => {    
  console.log('Server is running on http://localhost:3000')
});  
