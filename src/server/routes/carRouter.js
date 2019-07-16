import express from 'express';
import { getCars } from '../controllers/cars';
import { validateCarParam, validateAccountBody } from '../middleware';

const router = express.Router();

router.param('id', validateCarParam);

router.route('/cars').get(getCars);

export { router as carRouter };
