import { Users as User } from 'sdk'
import jwt from 'lib/jwt'

class Service {
  async auth ({email, password}) {
    try {
      const user = await User.findByEmail(email)
      if (user.password !== password) {
        throw new Error('The password is invalid')
      }
      return await jwt.sign(email, password)
    } catch (exception) {
      return exception.message
    }
  }
}

export default new Service()
