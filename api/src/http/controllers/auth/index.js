import jwt from '../../../lib/jwt'
import { Users as User } from 'sdk'

class Controller {
  async auth (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findByEmail(email)
      if (user.password !== password) {
        throw new Error('The password is invalid')
      }
      res.json(await jwt.sign(email, password))
    } catch (exception) {
      res.json(exception.message)
    }
  }
}

export default new Controller()
