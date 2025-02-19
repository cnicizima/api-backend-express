import express from 'express'

const router = express.Router();

router.get('/', (req, res) => {
  return res.json({ 
    message: 'Resposta do router GET /product/'});
});

router.post('/', (req, res) => {
  return res.json({ 
    message: 'Resposta do router POST /product/'});
}); 

router.patch('/', (req, res) => {
  return res.json({ 
    message: 'Resposta do router PATCH /product/'});
});

router.put('/', (req, res) => {
  return res.json({ 
    message: 'Resposta do router PUT /product/'});
});

router.delete('/', (req, res) => {
  return res.json({ 
    message: 'Resposta do router DELETE /product/'});
});

export default router;