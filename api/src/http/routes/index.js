import { Router } from 'express'

/* MODEL */
import { Vagas } from 'sdk'

/* ROUTES */
const router = Router()

router.get('/vagas', async (req, res) => {
  try {
    const vagas = await Vagas.all()
    res.json(vagas)
  } catch (exception) {
    res.json(exception.message)
  }
})

router.post('/vagas/:id', async (req, res) => {
  try {
    const {id} = req.params
    const vagas = await Vagas.changeState(id)
    res.json(vagas)
  } catch (exception) {
    res.json(exception.message)
  }
})

export default router
