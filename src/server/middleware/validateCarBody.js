import Joi from '@hapi/joi';
import { joiValidate } from '../util';

/**
 * Car validation schema
 */
const carSchema = Joi.object().keys({
	vin: Joi.number()
		.min(4)
		.required(),
	model: Joi.string()
		.trim()
		.required(),
	make: Joi.string()
		.trim()
		.required(),
	mileage: Joi.number()
		.min(4)
		.required(),
	transmission_type: Joi.string(),
	status: Joi.string()
});

/**
 * Validate car body against defined schema
 */
export const validateCarBody = (req, res, next) => {
	joiValidate(req, res, next, carSchema);
};
