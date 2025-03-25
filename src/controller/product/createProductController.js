import { create } from "../../models/productModel.js" 
// importa a função create que criei no userModel

export default async function createProductController(req, res) {
    const product = req.body;

    const result = await create(product) //funcao criada no userModel

    if(!result){
      return res.status(500).json({ 
        message: 'Erro ao criar produto'
      })
    }

    return res.json({ 
      message: 'Produto criado com sucesso',
      user: result    
    })
  }
