import express from 'express'
import defaultMiddlewares from './middlewares/index'
import routes from './routes'

const app = express()

/* Default middlewares */
defaultMiddlewares(app)

/* ROUTES */
routes(app)

export default app
