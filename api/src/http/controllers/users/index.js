/* MODEL */
import { Users as Model } from 'sdk'

class Controller {
  async all () {
    try {
      return await Model.all()
    } catch (exception) {
      return exception.message
    }
  }

  async find ({id}) {
    try {
      return await Model.find(id)
    } catch (exception) {
      return exception.message
    }
  }

  async create (body) {
    try {
      const payload = {
        name: body.name,
        email: body.email,
        username: body.username,
        password: body.password,
        status: 1
      }
      return await Model.create(payload)
    } catch (exception) {
      return exception.message
    }
  }

  async update ({id}, body) {
    try {
      const payload = {
        name: body.name,
        email: body.email,
        username: body.username,
        password: body.password,
        status: 1
      }
      return await Model.update(id, payload)
    } catch (exception) {
      return exception.message
    }
  }

  async remove ({id}) {
    try {
      return await Model.remove(id)
    } catch (exception) {
      return exception.message
    }
  }
}

export default new Controller()
