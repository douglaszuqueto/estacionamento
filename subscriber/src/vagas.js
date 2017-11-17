import { Vagas } from 'sdk'

export default async (io) => {
  try {
    const cursor = await Vagas.changes()

    cursor.each((err, row) => {
      if (err) {
        throw new Error(err)
      }
      const {new_val} = row
      io.emit('subscriber.vagas.change', new_val)
      console.info(new_val)
    })
  } catch (exception) {
    console.error(exception.message())
  }
}
