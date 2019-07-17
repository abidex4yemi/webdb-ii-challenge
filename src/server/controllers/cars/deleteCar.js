import { Car } from '../../model';
import { OK, createSuccess } from '../../util';

/**
 * Delete a car given the id is valid
 * 
 * @param {*} req
 * @param {*} res 
 * @param {*} next 
 */
export const deleteCar = async (req, res, next) => {
	try {
		const { id } = req.car;

		// Delete car from database using specified id
		await Car.remove(id);

		return res.status(OK).json(
			createSuccess({
				success: true,
				message: 'Car deleted successfully',
				data: req.car
			})
		);
	} catch (error) {
		next(error);
	}
};
