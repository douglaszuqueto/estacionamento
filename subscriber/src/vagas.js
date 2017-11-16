import { Vagas } from '../../sdk/build/main'

export default (io) => {
  Vagas.changes()
    .then((cursor) => {
      cursor.each((err, row) => {
        if (err) throw new Error(err)
        const message = row.new_val
        io.emit('subscriber.vagas.change', message)
        console.info(message)
      })
    })
    .catch((err) => console.error(err))
}
