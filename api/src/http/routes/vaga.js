import { Router } from 'express'

/* Controllers */
import { VagaController } from '../controllers'

const router = Router()

router
  .get('/', async (req, res) => res.json(await VagaController.all()))
  .get('/:id', async (req, res) => res.json(await VagaController.find(req.params)))
  .post('/', async (req, res) => res.json(await VagaController.create(req.body)))
  .post('/:id', async (req, res) => res.json(await VagaController.changeState(req.params)))
  .put('/:id', async (req, res) => res.json(await VagaController.update(req.params, req.body)))
  .delete('/:id', async (req, res) => res.json(await VagaController.remove(req.params)))

export default router
