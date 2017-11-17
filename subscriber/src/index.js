import socketIOClient from 'socket.io-client'
import Vagas from './vagas'

const io = socketIOClient(`http://${process.env.IO_HOST}:${process.env.IO_PORT}`)

Vagas(io)
