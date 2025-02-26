// tem que importar o express para usar o router, que é uma função do express
import express from 'express'
import getUserController from '../controller/user/getUserController.js'
import createUserController from '../controller/user/createUserController.js'
import updateUserController from '../controller/user/updateUserController.js'
import editNameUSerController from '../controller/user/editNameUserController.js'
import deleteUserController from '../controller/user/deleteUserController.js'

const router = express.Router();

// aqui usamos o '/' somente porque se chegou aqui, ja acessou o endpoit /user. 
// o primeiro contato da api é sempre no server.js, que redireciona para o router
// e como é router, não é app.get e sim router.get

router.get('/', getUserController);
router.put('/', updateUserController);
router.post('/', createUserController);  
router.patch('/', editNameUSerController);
router.delete('/', deleteUserController);



export default router;  