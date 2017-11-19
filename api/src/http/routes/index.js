import { default as Vaga } from './vaga'

export default (app) => {
  app.use('/vagas', Vaga)
}
