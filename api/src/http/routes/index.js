import { Router } from 'express'

/* MODEL */
import { Vagas } from 'sdk/build/main'

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
    const id = req.params.id

    const vaga = await Vagas.find(id)
    const state = !vaga.state
    const vagas = await Vagas.update(id, {state})
    res.json(vagas)
  } catch (exception) {
    res.json(exception.message)
  }
})

export default router
