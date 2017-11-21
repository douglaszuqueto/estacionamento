import { Users as Model } from 'sdk'

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
      const body = req.body
      const payload = {
        name: body.name,
        email: body.email,
        username: body.username,
        password: body.password,
        status: 1
      }
      res.json(await Model.create(payload))
    } catch (exception) {
      res.json(exception.message)
    }
  }

  async update (req, res) {
    try {
      const body = req.body
      const payload = {
        name: body.name,
        email: body.email,
        username: body.username,
        password: body.password,
        status: 1
      }
      res.json(await Model.update(req.params.id, payload))
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
