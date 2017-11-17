import socketIO from 'socket.io'
import Events from './events'

const io = socketIO(process.env.IO_PORT)

Events(io)
