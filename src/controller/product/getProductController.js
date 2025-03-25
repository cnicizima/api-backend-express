import { getById } from "../../models/productModel.js"

export default async function getProductController(req, res){

    const { id } = req.params
    
    const result = await getById(+id)

    if(!result){
      return res.status(404).json({
        error: "Produto não encontrado"
      })
    }

    return res.json({
      product: result
    })

  }
