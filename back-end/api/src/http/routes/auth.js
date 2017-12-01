import { Router } from 'express'
import { AuthController } from '../controllers'

const router = Router()

router
  .post('/', async (...args) => AuthController.auth(...args))

export default router
