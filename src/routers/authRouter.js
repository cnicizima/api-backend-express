// tem que importar o express para usar o router, que é uma função do express
import express from 'express'
import signUpController from '../controller/auth/signUpController.js'
import loginController from '../controller/auth/loginController.js'
import logoutController from '../controller/auth/logoutController.js'

const router = express.Router();

router.post('/signup', signUpController);  
router.post('/login', loginController);
router.delete('/logout', logoutController)

export default router;  