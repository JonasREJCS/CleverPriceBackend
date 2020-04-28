import { getConnection, Repository } from "typeorm"
import { Preco } from "../../modelos/preco"

const getPrecoRepository = (): Repository<Preco> => {
    return getConnection().getRepository(Preco)
}

export const buscarPrecos = async () => {
  const repository = getPrecoRepository()
  const resultado = await repository.find()
  return resultado
}