import express from 'express'
// tem que importar o express para usar o router, que é uma função do express

const router = express.Router();

// aqui usamos o '/' somente porque se chegou aqui, ja acessou o endpoit /user. 
// o primeiro contato da api é sempre no server.js, que redireciona para o router
// e como é router, não é app.get e sim router.get
router.get('/', (req, res) => {
  return res.json({ 
    message: 'Resposta do router GET /user/'});
});

router.post('/', (req, res) => {
  return res.json({ 
    message: 'Resposta do router POST /user/'});
});

router.patch('/', (req, res) => {
  return res.json({ 
    message: 'Resposta do router PATCH /user/'});
});

router.put('/', (req, res) => {
  return res.json({ 
    message: 'Resposta do router PUT /user/'});
});

router.delete('/', (req, res) => {
  return res.json({ 
    message: 'Resposta do router DELETE /user/'});
});


export default router;