import { create, userValidator } from "../../models/userModel.js"

// importa a função create que criei no userModel

export default async function (req, res) {

  const user = req.body;

  const { success, error, data } = userValidator(user, { id: true })
  //valida o usuario recebido no body da req, usando a funçao do model
  //quando passo o segundo parametro como { id: true }, ele valida o id como opcional, se não passar nada, ele valida o id como obrigatório
  //se por um patch só de avatar, teria que passar tudo como true.
  if (!success) {
    return res.status(400).json({
      message: "Erro ao validar os dados do usuário",
      errors: error.flatten().fieldErrors
    })
  }

  const result = await create(data) //funcao criada no userModel

  if (!result) {
    return res.status(500).json({
      message: 'Erro ao criar usuário'
    })
  }


  return res.status(201).json({
    message: 'Usuário criado com sucesso',
    user: result
  })
}


