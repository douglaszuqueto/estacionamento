import { Model } from './db/model'

const TABLE_NAME = 'vagas'

class Vagas extends Model {}

export default new Vagas(TABLE_NAME)
