import { AuthService as Service } from '../../../services'

class Controller {
  async auth (req, res) {
    try {
      res.json(await Service.auth(req.body))
    } catch (exception) {
      res.json(exception.message)
    }
  }
}

export default new Controller()
