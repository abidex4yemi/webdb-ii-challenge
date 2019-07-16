/**
 * Wrap all cars model functions
 * 
 * @param {object} { modelObjName, tableName, knex }
 * @returns {object}
 */
export default ({ modelName = '', tableName = '', knex = {} }) => {
	function getAll({ limit, sortBy, sortDir }) {
		const query = knex(tableName);

		if (limit) {
			query.limit(limit);
		}

		if (sortBy && sortBy) {
			query.orderBy(sortBy, sortDir);
		}

		return query;
	}

	function insert(account) {
		return knex(tableName)
			.insert(account)
			.then(([id]) => getById(id));
	}

	function getById(id) {
		return knex(tableName)
			.where({ id })
			.first();
	}

	function update(id, changes) {
		return knex(tableName)
			.where({ id })
			.update(changes)
			.then(count => (count > 0 ? getById(id) : null));
	}

	function remove(id) {
		return knex(tableName)
			.where({ id })
			.del()
			.then(count => (count > 0 ? 1 : null));
	}

	return {
		modelName,
		insert,
		getById,
		update,
		remove,
		getAll
	};
};
