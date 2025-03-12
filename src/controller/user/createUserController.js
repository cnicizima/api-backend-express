import { create } from "../../models/userModel.js" 
// importa a função create que criei no userModel

export default async function (req, res) {
    const user = req.body;

    const result = await create(user) //funcao criada no userModel

    if(!result){
      return res.status(500).json({ 
        message: 'Erro ao criar usuário'
      })
    }

    delete result.pass //para nao enviar a senha no json de retorno

    return res.json({ 
      message: 'Usuário criado com sucesso',
      user: result    
    })
  }