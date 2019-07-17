import { Car } from '../../model';
import { OK, createSuccess } from '../../util';

/**
 * Get all cars
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
export const getCars = async (req, res, next) => {
	try {
		const limit = req.query.limit;
		const sortBy = req.query.sortBy;
		const sortDir = req.query.sortDir;

		const cars = await Car.getAll({ limit, sortBy, sortDir });

		return res.status(OK).json(
			createSuccess({
				data: cars
			})
		);
	} catch (error) {
		return next(error);
	}
};
