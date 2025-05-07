import { userValidator, getByEmail } from "../../models/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


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

    const accessToken = jwt.sign({ id: result.id, email: result.email, avatar: result.avatar }, process.env.JWT_SECRET, { expiresIn: '15min' })

    const refreshToken = jwt.sign({ id: result.id, email: result.email, avatar: result.avatar }, process.env.JWT_SECRET, { expiresIn: '3d' })

    res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: "None", secure: true, maxAge: 3 * 24 * 60 * 60 * 1000 })



    return res.status(201).json({
      message: 'Login realizado com sucesso',
      accessToken: accessToken,
      refreshToken: refreshToken,
      user: {
        id: result.id,
        name: result.name,
        email: result.email,
        avatar: result.avatar
      }
    })

  } catch (error) {
    next(error)
  }
}


