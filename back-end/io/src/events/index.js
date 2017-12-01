import { Vagas as vagas } from 'back-end/sdk/src/index'

export default (io) => {
  io.on('connection', (socket) => {
    console.log('User is connected ', socket.id)
    socket.on('disconnect', onDisconnect)
    socket.on('vagas.update', onUpdateVaga)
    socket.on('subscriber.vagas.change', (payload) => socket.broadcast.emit('vagas.change', payload))
  })
}

const onDisconnect = (socket) => console.log('User is disconnected...', socket)
const onUpdateVaga = async ({id}) => {
  await vagas.changeState(id)
}
