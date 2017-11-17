import { Model } from './db/model'

const TABLE_NAME = 'vagas'

class Vagas extends Model {
  async changeState (id) {
    try {
      const {state} = await this.find(id)
      await this.update(id, {state: !state})
    } catch (exception) {
      console.log(exception.message)
    }
  }
}

export default new Vagas(TABLE_NAME)
