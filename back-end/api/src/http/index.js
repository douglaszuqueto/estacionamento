import express from 'express'
import defaultMiddlewares from './middlewares/index'
import routes from './routes'

const app = express()

defaultMiddlewares(app)

routes(app)

export default app
