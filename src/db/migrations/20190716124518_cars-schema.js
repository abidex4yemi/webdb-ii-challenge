exports.up = function(knex, Promise) {
	return knex.schema.createTable('cars', table => {
		table.increments();
		table
			.integer('vin')
			.unique()
			.notNullable();
		table.string('make').notNullable();
		table.string('model').notNullable();
		table.bigInteger('mileage').notNullable();
		table.string('transmission_type').defaultTo('Not Specified');
		table.status('status').defaultTo('Not Specified');
		table.timestamp('created_at').defaultTo(knex.fn.now());
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('cars');
};
