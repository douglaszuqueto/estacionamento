export default (io) => {
  io.use(cors)
}

const cors = (socket, next) => {
  const {headers} = socket.request
  const {query} = socket.handshake

  console.log(`Origin:`, headers)
  console.log(`Query:`, query)

  // if (headers.origin !== 'http://127.0.0.1:8888') {
  //   return next(new Error('origin not allowed'), false)
  // }
  return next()
}
