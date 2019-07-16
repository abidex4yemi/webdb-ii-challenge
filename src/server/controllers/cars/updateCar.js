import { Car } from '../../model';
import { createSuccess, OK, createError, CONFLICT } from '../../util';

/**
 * Update car given the car id is valid
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
export const updateCar = async (req, res, next) => {
	try {
		const carDetails = req.body.sanitizedBody;

		const carId = req.car.id;

		const updatedCarDetails = await Car.update(carId, carDetails);

		return res.status(OK).json(
			createSuccess({
				data: updatedCarDetails,
				message: 'Car updated successfully'
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
