import express from 'express'
import cors, { CorsOptions } from 'cors'
import Helmet from 'helmet'
import precoRouter from './modulos/preco/preco.router'
import { conectarBaseDeDados } from './services/connection-factory/connection-factory'

const CONFIG = {
  PORT: process.env.PORT || '7373'
}

const corsOptions: CorsOptions = {
  origin: '*',
  methods: ['GET', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With'],
  credentials: true
}

const app: express.Application = express()

app.use(express.json())
app.use(cors(corsOptions))
app.use(Helmet())

app.use('/v1/cleverprice/precos', precoRouter)

app.listen(CONFIG.PORT, async () => {
  await conectarBaseDeDados()
  console.log('Listening on ' + CONFIG.PORT)
})
