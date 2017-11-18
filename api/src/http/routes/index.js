import { Router } from 'express'

/* MODEL */
import { Vagas } from 'sdk'

/* ROUTES */
const router = Router()

router.get('/vagas', async (req, res) => {
  try {
    const vagas = await Vagas.all()
    return res.json(vagas)
  } catch (exception) {
    return res.json(exception.message)
  }
})

router.get('/vagas/:id', async (req, res) => {
  try {
    const {id} = req.params
    const vagas = await Vagas.find(id)
    return res.json(vagas)
  } catch (exception) {
    return res.json(exception.message)
  }
})

router.post('/vagas', async (req, res) => {
  try {
    const payload = {
      number: req.body.number,
      state: false,
      position: {
        x: req.body.position_x,
        y: req.body.position_y
      }
    }
    const vagas = await Vagas.create(payload)
    return res.json(vagas)
  } catch (exception) {
    return res.json(exception.message)
  }
})

router.put('/vagas/:id', async (req, res) => {
  try {
    const {id} = req.params
    const payload = {
      number: req.body.number,
      state: false,
      position: {
        x: req.body.position_x,
        y: req.body.position_y
      }
    }
    const vagas = await Vagas.update(id, payload)
    return res.json(vagas)
  } catch (exception) {
    return res.json(exception.message)
  }
})

router.post('/vagas/:id', async (req, res) => {
  try {
    const {id} = req.params
    const vagas = await Vagas.changeState(id)
    return res.json(vagas)
  } catch (exception) {
    return res.json(exception.message)
  }
})

router.delete('/vagas/:id', async (req, res) => {
  try {
    const {id} = req.params
    const vagas = await Vagas.remove(id)
    return res.json(vagas)
  } catch (exception) {
    return res.json(exception.message)
  }
})

export default router
