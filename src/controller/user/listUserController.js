import { list } from "../../models/userModel.js"

export default async function listUserController(req, res, next) {
  try {
    const result = await list()
    return res.json(result)
  } catch (error) {
    next(error) //estou dizendo segue em frente, vai para o próximo middleware, levando o error que vai chegar no errorHandler
  }
}

