/* MODEL */
import { Vagas as Model } from 'sdk'

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

  async update ({id}, body) {
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

  async remove ({id}) {
    try {
      return await Model.remove(id)
    } catch (exception) {
      return exception.message
    }
  }

  async changeState ({id}) {
    try {
      return await Model.changeState(id)
    } catch (exception) {
      return exception.message
    }
  }
}

export default new Controller()
