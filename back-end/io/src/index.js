import socketIO from 'socket.io'
import { cors as Cors, token as Token } from './middlewares/index'
import Events from './events/index'

const io = socketIO(process.env.IO_PORT)

/* Origins */
Cors(io)

/* Middlewares */
Token(io)

/* Events */
Events(io)
