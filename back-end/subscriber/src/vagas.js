import { Vagas } from 'sdk'

export default async (io) => {
  try {
    const cursor = await Vagas.changes()

    cursor.each((err, row) => {
      if (err) {
        throw new Error(err)
      }
      io.emit('subscriber.vagas.change', row)
      console.info(row)
    })
  } catch (exception) {
    console.error(exception.message())
  }
}
