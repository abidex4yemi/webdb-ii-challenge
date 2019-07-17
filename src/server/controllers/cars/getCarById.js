'use strict';

import { createSuccess, OK } from '../../util';

/**
 * Get car by id
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
export const getCarById = (req, res) => {
	const car = req.car;

	return res.status(OK).json(createSuccess({ data: car }));
};
