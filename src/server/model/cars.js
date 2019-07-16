'use strict';

import create from '../../db/helpers/cars';

module.exports = knex => {
	const models = create({ modelName: 'Car', tableName: 'cars', knex });

	return {
		...models
	};
};
