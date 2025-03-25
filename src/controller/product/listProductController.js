import { list } from "../../models/productModel.js"

export default async function listProductController(req, res){
  const result = await list ()

  return res.json(result)
}

