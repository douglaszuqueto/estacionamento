import jwt from '../../lib/jwt'

export default (req, res, next) => {
  try {
    console.log(req.headers.authorization)
    jwt.validateToken(req.headers)
    return next()
  } catch (exception) {
    return res.json({error: true, message: exception.message})
  }
}
