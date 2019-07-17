exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('cars')
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex('cars').insert([
				{
					vin: 00020000,
					model: 'Acura',
					make: 'Acura',
					mileage: 999999,
					transmission_type: 'manual',
					status: 'clean'
				},
				{
					vin: 04420000,
					model: 'Audi',
					make: 'Audi',
					mileage: 98888,
					transmission_type: 'automatic',
					status: 'clean'
				},
				{
					vin: 03320000,
					model: 'Toyota',
					make: 'Corrola s',
					mileage: 98888,
					transmission_type: 'manual',
					status: 'savage'
				},
				{
					vin: 987766,
					model: 'Benz',
					make: 'Benz',
					mileage: 112222233,
					transmission_type: 'automatic',
					status: 'clean'
				}
			]);
		});
};
