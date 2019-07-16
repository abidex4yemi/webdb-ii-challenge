import { Car } from '../../model';
import { CREATED, createSuccess, createError, CONFLICT } from '../../util';

/**
 * Insert new car
 * 
 * @param {*} req 
 * @param {*} res
 * @param {*} next 
 */
export const addCar = async (req, res, next) => {
	try {
		// Get car details from req body
		const carDetails = req.body.sanitizedBody;

		// Insert new car
		const createdCar = await Car.insert(carDetails);

		return res.status(CREATED).json(
			createSuccess({
				data: createdCar,
				message: 'New car record was created.'
			})
		);
	} catch (error) {
		if (error.code === 'SQLITE_CONSTRAINT' && error.message.indexOf('failed: cars.vin')) {
			return next(
				createError({
					status: CONFLICT,
					message: 'Vehicle identification number already exist'
				})
			);
		}
		next(error);
	}
};
