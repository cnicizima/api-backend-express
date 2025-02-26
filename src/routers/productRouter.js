import express from 'express'
import createProductController from '../controller/product/createProductController.js'
import deleteProductController from '../controller/product/deleteProductController.js'

const router = express.Router();


router.post('/', createProductController); 
router.delete('/', deleteProductController);

export default router;