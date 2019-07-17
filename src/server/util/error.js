'use strict';

/**
 * Define error constants
 */
export const BAD_REQUEST = 400;
export const CONFLICT = 409;
export const NOT_FOUND = 404;
export const GENERIC_ERROR = 500;

/**
 * Wrapper for javascript native Error() constructor
 * 
 * @param {String} message
 * @param {number} status 
 * 
 * @returns {object} error
 */
export const createError = ({ message = 'Something went wrong, try again...', status = 500 }) => {
	const error = new Error(message);
	error.status = status;

	return error;
};
