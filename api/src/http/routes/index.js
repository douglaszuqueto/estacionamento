import { default as Vaga } from './vaga'
import { default as Users } from './users'

export default (app) => {
  app.use('/vagas', Vaga)
  app.use('/users', Users)
}
