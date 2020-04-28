import { createConnection } from 'typeorm'
import { Preco } from '../../modelos/preco'
import { Produto } from '../../modelos/produto'
import { UnidadeDeMedida } from '../../modelos/unidade-de-medida'

export const conectarBaseDeDados = async (): Promise<void> => {
  await createConnection({
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: 3306,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_SENHA || 'root',
    database: process.env.DB_NAME || 'db-clever-price',
    entities: [
        Preco,
        Produto,
        UnidadeDeMedida
    ],
    synchronize: false,
    logging: false
  }).then(() => console.log('Conectado à base de dados com sucesso')).catch(error => { throw error })
}
