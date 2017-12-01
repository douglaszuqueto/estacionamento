import { Users as Model } from 'back-end/sdk'

class Service {
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

  async update (id, body) {
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
}

export default new Service()
