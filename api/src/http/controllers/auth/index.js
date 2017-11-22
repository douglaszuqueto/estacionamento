import { AuthValidator as Validator } from '../../../validator'
import { AuthService as Service } from '../../../services'

class Controller {
  async auth (req, res) {
    try {
      const result = await Validator(req.body)
      if (result.error) {
        throw new Error(result)
      }
      res.json(await Service.auth(req.body))
    } catch (exception) {
      res.json(exception.message)
    }
  }
}

export default new Controller()
