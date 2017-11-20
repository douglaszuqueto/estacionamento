import { Router } from 'express'
import { AuthController } from '../controllers'

const router = Router()

router
  .post('/', async (req, res) => res.json(await AuthController.auth(req.body)))

export default router
