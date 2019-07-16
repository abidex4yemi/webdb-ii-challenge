import express from 'express';
import { getCars, getCarById, deleteCar, addCar } from '../controllers/cars';
import { validateCarParam, validateCarBody } from '../middleware';

const router = express.Router();

router.param('id', validateCarParam);

router
	.route('/cars')
	.get(getCars)
	.post(validateCarBody, addCar);

router
	.route('/cars/:id')
	.get(getCarById)
	.delete(deleteCar);

export { router as carRouter };
