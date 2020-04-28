import { RequestHandler } from 'express-serve-static-core'
import { buscarPrecos } from './preco.service'

export const getPrecos: RequestHandler = async (_req, res) => {
    try {
      const precos = await buscarPrecos()
      res.json({ erro: false, resultado: precos })
    } catch (e) {
      console.error(e)
      res.status(500).json({ erro: true, mensagem: e.message })
    }
  }