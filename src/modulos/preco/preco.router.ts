import express from 'express'
import { getPrecos } from './preco.controller'

const precoRouter = express.Router()

precoRouter.get('/', getPrecos)

export default precoRouter
