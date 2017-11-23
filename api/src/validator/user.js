import { default as _, validate } from 'lib/validator'

const createSchema = _.object({
  email: _.string().email().required(),
  password: _.string().required()
})

const updateSchema = _.object({
  email: _.string().email(),
  password: _.string()
})

export const create = (input) => validate(input, createSchema)
export const update = (input) => validate(input, updateSchema)
