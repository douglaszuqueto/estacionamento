import { Vagas as Model } from 'sdk'
import { VagaService as Service } from '../../../services'

class Controller {
  async all (req, res) {
    try {
      res.json(await Model.all())
    } catch (exception) {
      res.json(exception.message)
    }
  }

  async find (req, res) {
    try {
      res.json(await Model.find(req.params.id))
    } catch (exception) {
      return exception.message
    }
  }

  async create (req, res) {
    try {
      const body = req.body
      const payload = {
        number: body.number,
        state: false,
        position: {
          x: body.position_x,
          y: body.position_y
        }
      }
      res.json(await Model.create(payload))
    } catch (exception) {
      return exception.message
    }
  }

  async update (req, res) {
    try {
      const body = req.body
      const payload = {
        number: body.number,
        state: false,
        position: {
          x: body.position_x,
          y: body.position_y
        }
      }
      res.json(await Model.update(req.params.id, payload))
    } catch (exception) {
      return exception.message
    }
  }

  async remove (req, res) {
    try {
      res.json(await Model.remove(req.params.id))
    } catch (exception) {
      return exception.message
    }
  }

  async changeState (req, res) {
    try {
      res.json(await Service.changeState(req.params))
    } catch (exception) {
      return exception.message
    }
  }
}

export default new Controller()
