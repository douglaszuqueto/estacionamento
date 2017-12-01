import jwtMiddleware from '../middlewares/jwt'
import { default as Vaga } from './vaga'
import { default as Users } from './users'
import { default as Auth } from './auth'

export default (app) => {
  app.use('/auth', Auth)

  app.use(jwtMiddleware)

  app.use('/vagas', Vaga)
  app.use('/users', Users)
}
