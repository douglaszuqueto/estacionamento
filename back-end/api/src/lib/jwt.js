import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'estacionamento'

const validateToken = ({authorization}) => {
  if (!authorization || authorization === undefined) {
    throw new Error('token not found')
  }

  jwt.verify(authorization, JWT_SECRET)
}

const sign = (email, password) => {
  return jwt.sign({
    data: {email, password}
  }, JWT_SECRET, {expiresIn: '1h'})
}

export default {
  validateToken,
  sign
}
