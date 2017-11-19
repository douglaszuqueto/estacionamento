export default (io) => {
  io.use(token)
}

const token = (socket, next) => {
  const {headers} = socket.request
  const {query} = socket.handshake

  console.log(`Headers:`, headers)
  console.log(`Query:`, query)

  // if (query !== 'bla') {
  //   return next(new Error(''))
  // }
  next()
}
