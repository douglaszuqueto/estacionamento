import r from 'rethinkdb'

export default () => r.connect({host: process.env.DB_HOST, port: 28015, db: 'estacionamento'})
