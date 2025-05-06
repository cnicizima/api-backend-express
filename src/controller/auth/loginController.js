import { userValidator, getByEmail } from "../../models/userModel.js"
import bcrypt from "bcrypt"


export default async function (req, res, next) {
  try {
    const user = req.body;

    const { success, error, data } = userValidator(user, { id: true, name: true, avatar: true })
   //os trues ignora os campos no validator - neste caso só validará email e senha
   
   if (!success) {
      return res.status(400).json({
        message: "Erro ao validar os dados do usuário",
        errors: error.flatten().fieldErrors
      })
    }

    const result = await getByEmail(data.email)

    if (!result) {
      return res.status(400).json({
        message: 'Usuário ou senha inválidos (usuario nao encontrado)'
      })
    }

    const passIsValid = bcrypt.compareSync(data.pass, result.pass)


    if (!passIsValid) {
        return res.status(400).json({
          message: 'Usuário ou senha inválidos (senha não confere)'
        })
      }

     // neste ponto, email é valido e senha é valido. depois buscou no banco e achou o email no banco e trouxe os dados, depois comparou a hash com os dados. Neste ponto, ele está autenticado. 
    
    // CONTINUE
     return res.status(201).json({
      message: 'Usuário criado com sucesso'
    })
  } catch (error) {
    if (error?.code === "P2002" && error?.meta?.target === "user_email_key") {
      return res.status(400).json({
        message: "Erro ao criar usuário",
        errors: {
          email: ["email já cadastrado"]
        }
      })
    }
    next(error)
  }
}


