import jwt from 'jsonwebtoken'

const JWT_SECRET = 'dz'

class Controller {
  async auth ({username, password}) {
    try {
      const token = await jwt.sign({
        data: {username, password}
      }, JWT_SECRET, {expiresIn: '1h'})

      return token
    } catch (exception) {
      return exception.message
    }
  }
}

export default new Controller()
