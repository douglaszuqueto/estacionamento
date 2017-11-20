import jwt from 'jsonwebtoken'

const JWT_SECRET = 'dz'

const validateToken = ({authorization}) => {
  if (!authorization || authorization === undefined) {
    throw new Error('token not found')
  }

  jwt.verify(authorization, JWT_SECRET)
}

export default (req, res, next) => {
  try {
    console.log(req.headers.authorization)
    validateToken(req.headers)
    return next()
  } catch (exception) {
    return res.json(exception.message)
  }
}
