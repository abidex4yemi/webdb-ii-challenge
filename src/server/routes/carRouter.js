import express from 'express';
import { getCars, getCarById, deleteCar } from '../controllers/cars';
import { validateCarParam, validateAccountBody } from '../middleware';

const router = express.Router();

router.param('id', validateCarParam);

router.route('/cars').get(getCars);

router
	.route('/cars/:id')
	.get(getCarById)
	.delete(deleteCar);

export { router as carRouter };
