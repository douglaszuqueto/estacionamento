import { default as _, validate } from 'lib/validator'

const schema = _.object({
  email: _.string().email().required(),
  password: _.string().required()
})

export function passesOrFail (input) {
  return validate(input, schema)
}
