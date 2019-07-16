exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('sales')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('sales').insert([
				{ car_id: 1, price: 50000, sold_by: 'Jane' },
				{ car_id: 2, price: 30000, sold_by: 'John' }
			]);
		});
};
