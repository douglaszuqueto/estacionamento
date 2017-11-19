import { Router } from 'express'

/* Controllers */
import { UserController } from '../controllers'

const router = Router()

router
  .get('/', async (req, res) => res.json(await UserController.all()))
  .get('/:id', async (req, res) => res.json(await UserController.find(req.params)))
  .post('/', async (req, res) => res.json(await UserController.create(req.body)))
  .put('/:id', async (req, res) => res.json(await UserController.update(req.params, req.body)))
  .delete('/:id', async (req, res) => res.json(await UserController.remove(req.params)))

export default router
