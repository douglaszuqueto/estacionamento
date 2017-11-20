import jwt from 'jsonwebtoken'
import { Users as User } from 'sdk'

const JWT_SECRET = 'dz'

class Controller {
  async auth ({email, password}) {
    try {
      const user = await User.findByEmail(email)
      if (user.password !== password) {
        throw new Error('The password is invalid')
      }
      return await jwt.sign({
        data: {email, password}
      }, JWT_SECRET, {expiresIn: '1h'})
    } catch (exception) {
      return exception.message
    }
  }
}

export default new Controller()
