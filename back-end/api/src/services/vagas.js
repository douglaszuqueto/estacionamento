import { Vagas as Model } from 'back-end/sdk'

class Service {
  async create (body) {
    try {
      const payload = {
        number: body.number,
        state: false,
        position: {
          x: body.position_x,
          y: body.position_y
        }
      }
      return await Model.create(payload)
    } catch (exception) {
      return exception.message
    }
  }

  async update (id, body) {
    try {
      const payload = {
        number: body.number,
        state: false,
        position: {
          x: body.position_x,
          y: body.position_y
        }
      }
      return await Model.update(id, payload)
    } catch (exception) {
      return exception.message
    }
  }

  async changeState ({id}) {
    try {
      const {state} = await Model.find(id)
      return await Model.update(id, {state: !state})
    } catch (exception) {
      return exception.message
    }
  }
}

export default new Service()
