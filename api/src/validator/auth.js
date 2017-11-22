import { default as _, validate } from 'lib/validator'

const schema = _.object().keys({
  email: _.string().email().required(),
  password: _.string().required()
})

export default (input) => validate(input, schema)
