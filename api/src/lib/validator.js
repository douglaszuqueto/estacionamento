import Joi from 'joi'

export const validate = (input, schema) => Joi.validate(input, schema)

export default Joi
