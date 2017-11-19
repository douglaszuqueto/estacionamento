import express from 'express'
import middlewares from './middlewares'
import routes from './routes'

const app = express()

/* MIDDLEWARES  */
middlewares(app)

/* ROUTES */
routes(app)

export default app
