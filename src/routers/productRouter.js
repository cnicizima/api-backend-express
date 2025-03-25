import express from 'express'
import createProductController from '../controller/product/createProductController.js'
import deleteProductController from '../controller/product/deleteProductController.js'
import getProductController from '../controller/product/getProductController.js'
import listProductController from '../controller/product/listProductController.js'
import updateProductController from '../controller/product/updateProductController.js'

const router = express.Router();


router.post('/', createProductController); 
router.delete('/:id', deleteProductController);
router.get('/', listProductController)
router.get('/:id', getProductController)
router.put('/:id', updateProductController)

export default router;