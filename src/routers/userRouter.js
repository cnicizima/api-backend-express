// tem que importar o express para usar o router, que é uma função do express
import express from 'express'
import getUserController from '../controller/user/getUserController.js'
import updateUserController from '../controller/user/updateUserController.js'
import editNameUSerController from '../controller/user/editNameUserController.js'
import deleteUserController from '../controller/user/deleteUserController.js'
import listUserController from '../controller/user/listUserController.js'

const router = express.Router();

// aqui usamos o '/' somente porque se chegou aqui, ja acessou o endpoit /user. 
// o primeiro contato da api é sempre no server.js, que redireciona para o router
// e como é router, não é app.get e sim router.get


router.get('/list', listUserController);
router.get('/:id', getUserController);
router.put('/:id', updateUserController);
router.delete('/:id', deleteUserController);
router.patch('/nome/:id', editNameUSerController);
// http://localhost:3000/user/nome/1 - para trocar nome user



export default router;  