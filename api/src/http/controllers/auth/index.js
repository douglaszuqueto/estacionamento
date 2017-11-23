import * as AuthValidator from '../../../validator/auth'
import { AuthService as Service } from '../../../services'

class Controller {
  async auth (req, res) {
    try {
      await AuthValidator.passesOrFail(req.body)
      res.json(await Service.auth(req.body))
    } catch (exception) {
      res.json({error: true, message: exception.message})
    }
  }
}

export default new Controller()
