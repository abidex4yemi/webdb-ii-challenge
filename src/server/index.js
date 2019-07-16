'use strict';
/**
 * Application Main file
 */
import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { allErrorHandler } from './middleware';
import { OK, createSuccess } from './util';

const app = express();

/**
 * Set up middleware
 */
app.use(express.json());
app.use(cors());
app.use(logger('dev'));
app.use(helmet());

app.get('/', (req, res) => {
	return res.status(OK).json(
		createSuccess({
			message: 'Welcome to home route...',
			data: []
		})
	);
});

// Handle invalid request
app.all('*', (req, res) => {
	return res.status(404).json({
		success: false,
		message: 'Route does not exist...',
		body: []
	});
});

// handle all application error
app.use(allErrorHandler());

export default app;
