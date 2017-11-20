import express from 'express'
import jwt from 'jsonwebtoken'
import defaultMiddlewares from './middlewares/index'
import jwtMiddleware from './middlewares/jwt'
import routes from './routes'

const app = express()

const JWT_SECRET = 'dz'

/* Default middlewares */
defaultMiddlewares(app)

app.post('/auth', async (req, res) => {
  try {
    const {username, password} = req.body
    const token = jwt.sign({
      data: {username, password}
    }, JWT_SECRET, {expiresIn: '1h'})
    return res.json(token)
  } catch (exception) {
    return res.json(exception.message)
  }
})

/* JWT middleware */
app.use(jwtMiddleware)

/* ROUTES */
routes(app)

export default app
