import r from 'rethinkdb'

export default () => r.connect({host: 'db', port: 28015, db: 'estacionamento'})
