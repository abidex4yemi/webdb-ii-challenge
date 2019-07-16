import path from 'path';

// Get root directory absolute path
const rootDirectory = path.parse(__dirname).dir;

module.exports = {
	development: {
		client: 'sqlite3',
		useNullAsDefault: true,
		connection: {
			filename: `${__dirname}/db/sqlite3/car-dealer.db3`
		},
		pool: {
			afterCreate: (conn, done) => {
				conn.run('PRAGMA foreign_keys = ON', done);
			}
		},
		migrations: {
			directory: `${__dirname}/db/migrations`
		},
		seeds: {
			directory: `${__dirname}/db/seeds`
		}
	},
	production: {
		client: 'sqlite3',
		useNullAsDefault: true,
		connection: {
			filename: `${rootDirectory}/sqlite3/car-dealer.db3`
		},
		pool: {
			afterCreate: (conn, done) => {
				conn.run('PRAGMA foreign_keys = ON', done);
			}
		},
		migrations: {
			directory: `${__dirname}/src/db/migrations`,
			tableName: 'dbmigrations'
		},
		seeds: {
			directory: `${__dirname}/src/db/seeds`
		}
	}
};
