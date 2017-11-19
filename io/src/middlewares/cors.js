export default (io) => {
  io.origins(cors)
}

const cors = (origin, callback) => {
  console.log(`Origin: ${origin}`)

  if (origin !== 'http://127.0.0.1:8888') {
    return callback(new Error('origin not allowed'), false)
  }
  return callback(null, true)
}
