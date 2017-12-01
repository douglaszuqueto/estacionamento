import { Router } from 'express'
import { VagaController } from '../controllers'

const router = Router()

router
  .get('/', async (...args) => VagaController.all(...args))
  .get('/:id', async (...args) => VagaController.find(...args))
  .post('/', async (...args) => VagaController.create(...args))
  .post('/:id', async (...args) => VagaController.changeState(...args))
  .put('/:id', async (...args) => VagaController.update(...args))
  .delete('/:id', async (...args) => VagaController.remove(...args))

export default router
