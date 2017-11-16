import socketIO from 'socket.io'
import Events from './events'

const io = socketIO(8000)

Events(io)
