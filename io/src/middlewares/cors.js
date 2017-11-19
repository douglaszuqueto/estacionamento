export default (io) => {
  io.use(cors)
}

const cors = (socket, next) => {
  const {headers} = socket.request
  const {query} = socket.handshake

  console.log(`Headers:`, headers)
  console.log(`Query:`, query)

  if (headers.origin === 'http://127.0.0.1:8888') {
    return next()
  }

  if (headers.host === 'io:8000') {
    return next()
  }

  return next(new Error('origin not allowed'), false)
}
