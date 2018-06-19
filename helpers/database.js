let async = require('async');
let path = require('path');

/**
 * Migrator functions
 * @class
 * @private
 * @param {Object} pgp - pg promise
 * @param {Object} db - pg connection
 */
function Migrator (pgp, db) {

	/**
	 * Executes 'runtime.sql' file, that set peers clock to null and state to 1.
	 * @method
	 * @param {function} waterCb - Callback function
	 * @return {function} waterCb with error
	 */
	this.applyRuntimeQueryFile = function (waterCb) {
		let dirname = path.basename(__dirname) === 'helpers' ? path.join(__dirname, '..') : __dirname;
		let sql = new pgp.QueryFile(path.join(dirname, 'sql', 'runtime.sql'), {minify: true});

		db.query(sql)
		.then(function () {
			return waterCb();
		})
		.catch(function (err) {
			return waterCb(err);
		});
	};
}

/**
 * Connects to the database and performs:
 * - checkMigrations
 * - getLastMigration
 * - readPendingMigrations
 * - applyPendingMigrations
 * - insertAppliedMigrations
 * - applyRuntimeQueryFile
 * @memberof module:helpers
 * @requires pg-promise
 * @requires pg-monitor
 * @implements Migrator
 * @function connect
 * @param {Object} config
 * @param {function} logger
 * @param {function} cb
 * @return {function} error|cb
 */
module.exports.connect = function (config, logger, cb) {
	const promise = require('bluebird');
	let pgOptions = {
		promiseLib: promise
	};

	let pgp = require('pg-promise')(pgOptions);
	let monitor = require('pg-monitor');

	monitor.attach(pgOptions);
	monitor.setTheme('matrix');

	monitor.log = function (msg, info){
		info.display = false;
	};

	config.user = config.user || process.env.USER;

	let db = pgp(config);

	let migrator = new Migrator(pgp, db);

	async.waterfall([
		migrator.applyRuntimeQueryFile
	], function (err) {
		return cb(err, db);
	});
};
