import socketIOClient from 'socket.io-client'
import vagas from './vagas'

const host = 'http://io:8000'

const io = socketIOClient(host)

vagas(io)
