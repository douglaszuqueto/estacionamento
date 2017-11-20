import { Model } from './db/model'

const TABLE_NAME = 'users'

class Users extends Model {
  findByEmail (email) {
    return this.conn
      .then((conn) => this.r.table(this.table).filter({email}).limit(1).run(conn))
      .then((cursor) => cursor.toArray())
      .then((row) => row[0])
  }
}

export default new Users(TABLE_NAME)
