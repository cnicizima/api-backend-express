import { update } from "../../models/userModel.js"

export default async function (req, res) {
  const { id } = req.params // id está entre chaves pois estamos desestruturando o objeto params. Só queremos o id. 
  const user = req.body // já user, quero toda a data, por isso nao tem { }

  const result = await update (+id, user)
  // o '+' converte a informação para um Number (garante que seja um numero)

  
  if(!result){
    return res.status(404).json({
      error: "Usuário não encontrado"
    })
  }

  return res.json({
    message: "usuário atualizado com sucesso",
    user: result
  })
}

