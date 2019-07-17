exports.up = function(knex, Promise) {
	return knex.schema.createTable('sales', table => {
		table.increments();
		table.integer('car_id');
		table
			.foreign('car_id')
			.references('id')
			.inTable('cars');
		table.bigInteger('price').notNullable();
		table.string('sold_by').notNullable();
		table.timestamps();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('sales');
};
