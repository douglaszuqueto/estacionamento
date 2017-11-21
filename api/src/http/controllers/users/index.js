import { Users as Model } from 'sdk'
import { UserService as Service } from '../../../services'

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
      res.json(exception.message)
    }
  }

  async create (req, res) {
    try {
      res.json(await Service.create(req.body))
    } catch (exception) {
      res.json(exception.message)
    }
  }

  async update (req, res) {
    try {
      res.json(await Service.update(req.params.id, req.body))
    } catch (exception) {
      res.json(exception.message)
    }
  }

  async remove (req, res) {
    try {
      res.json(await Model.remove(req.params.id))
    } catch (exception) {
      res.json(exception.message)
    }
  }
}

export default new Controller()
