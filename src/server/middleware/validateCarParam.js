'use strict';

import { Car } from '../model';
import { NOT_FOUND, createError } from '../util';

/**
 * Validate car request parameter id
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @param {*} carID 
 */
export const validateCarParam = async (req, res, next, carID) => {
	try {
		const car = await Car.getById(carID);

		if (!car) {
			return next(
				createError({
					message: 'Car ID is invalid.',
					status: NOT_FOUND
				})
			);
		}

		req.car = car;

		next();
	} catch (error) {
		next(error);
	}
};
