import { Model } from './db/model'

const TABLE_NAME = 'users'

class Users extends Model {}

export default new Users(TABLE_NAME)
