import r from 'rethinkdb'
import getConn from './db'

export class Model {
  constructor (table) {
    this.table = table
  }

  find (id) {
    return getConn()
      .then((conn) => r.table(this.table).get(id).run(conn))
  }

  all () {
    return getConn()
      .then((conn) => r.table(this.table).run(conn))
      .then((cursor) => cursor.toArray())
  }

  findBy (by) {
    return getConn()
      .then((conn) => r.table(this.table).filter(by).run(conn))
      .then((cursor) => cursor.toArray())
  }

  changes () {
    return getConn()
      .then((conn) => r.table(this.table).changes().run(conn))
  }

  create (payload) {
    return getConn()
      .then((conn) => r.table(this.table).insert(payload).run(conn))
  }

  update (id, payload) {
    return getConn()
      .then((conn) => r.table(this.table).get(id).update(payload).run(conn))
  }

  remove (id) {
    return getConn()
      .then((conn) => r.table(this.table).get(id).delete().run(conn))
  }
}
