import { update } from "../../models/productModel.js"

export default async function updateProductController(req, res) {
  const { id } = req.params // id está entre chaves pois estamos desestruturando o objeto params. Só queremos o id. 
  const product = req.body // já user, quero toda a data, por isso nao tem { }

  const result = await update (+id, product)
  // o '+' converte a informação para um Number (garante que seja um numero)

  
  if(!result){
    return res.status(404).json({
      error: "Produto não encontrado"
    })
  }

  return res.json({
    message: "produto atualizado com sucesso",
    product: result
  })
}