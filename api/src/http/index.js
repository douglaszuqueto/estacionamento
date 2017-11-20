import express from 'express'
import jwt from 'jsonwebtoken'
import defaultMiddlewares from './middlewares/index'
import routes from './routes'

const app = express()

/* JWT */
const secret = 'dz'

/* Default middlewares */
defaultMiddlewares(app)

app.post('/auth', async (req, res) => {
  try {
    const {username, password} = req.body
    const token = jwt.sign({
      data: {username, password}
    }, secret, {expiresIn: '1h'})
    return res.json(token)
  } catch (exception) {
    return res.json(exception.message)
  }
})

const validateToken = ({authorization}) => {
  if (!authorization || authorization === undefined) {
    throw new Error('token not found')
  }

  jwt.verify(authorization, secret)
}

app.use((req, res, next) => {
  try {
    console.log(req.headers.authorization)
    validateToken(req.headers)
    return next()
  } catch (exception) {
    return res.json(exception.message)
  }
})

/* ROUTES */
routes(app)

export default app
