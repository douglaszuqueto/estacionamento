import { Router } from 'express'
import { UserController as Controller } from '../controllers'

const router = Router()

router
  .get('/', async (...args) => Controller.all(...args))
  .get('/:id', async (...args) => Controller.find(...args))
  .post('/', async (...args) => Controller.create(...args))
  .put('/:id', async (...args) => Controller.update(...args))
  .delete('/:id', async (...args) => Controller.remove(...args))

export default router
