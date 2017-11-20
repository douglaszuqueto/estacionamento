import { Router } from 'express'
import jwt from 'jsonwebtoken'

const router = Router()
const JWT_SECRET = 'dz'

router.post('/', async (req, res) => {
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

export default router
