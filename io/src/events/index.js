import { Vagas as vagas } from '../../../sdk/build/main'

export default (io) => {
  io.on('connection', (socket) => {
    console.log('User is connected ', socket.id)
    socket.on('disconnect', onDisconnect)
    socket.on('vagas.update', onUpdateVaga)
    socket.on('subscriber.vagas.change', (payload) => socket.broadcast.emit('vagas.change', payload))
  })
}

const onDisconnect = (socket) => console.log('User is disconnected...', socket)
const onUpdateVaga = async (payload) => {
  const {id} = payload
  console.log(id)

  try {
    const vaga = await vagas.find(id)
    const state = !vaga.state
    await vagas.update(id, {state})
  } catch (exception) {
    console.error(exception.message)
  }
}
