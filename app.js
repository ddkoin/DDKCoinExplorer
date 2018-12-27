/**
 * A node-style callback as used by {@link modules}.
 * @see {@link https://nodejs.org/api/errors.html#errors_node_js_style_callbacks}
 * @callback nodeStyleCallback
 * @param {?Error} error - Error, if any, otherwise `null`.
 * @param {Data} data - Data, if there hasn't been an error.
 */
/**
 * A triggered by res.send() callback as used by {@link modules} and {@link helpers}.
 * Parameters formats: (cb, error, data), (cb, error), (cb).
 * @see {@link https://nodejs.org/api/timers.html#timers_setimmediate_callback_args}
 * @callback res.send()
 * @param {function} cb - Callback function.
 * @param {?Error} [error] - Error, if any, otherwise `null`.
 * @param {Data} [data] - Data, if there hasn't been an error and the function should return data.
 */

/**
 * Main entry point.
 * Loads the DDK Explorer modules, the Explorer api and run the express server as Domain master.
 * CLI options available.
 * @module app
 */

require('dotenv').config();
require('auto-strict');
let path = require('path');
let async = require('async');
const Logger = require('./logger.js');
let utils = require('./helpers/utils');
let appConfig = require('./config.json');
let env = require('./helpers/env');


    let logman = new Logger();
    let logger = logman.logger;

/**
 * @desc The config object to handle DDKAdmin modules and DDKAdmin api.
 * @desc It loads `modules` and `api` folders content.
 * @desc Also contains db configuration from config.json.
 * @property {object} db - Config values for database.
 * @property {object} modules - `modules` folder content.
 * @property {object} api - `api/http` folder content.
 * @property {object} - The default list of configuration options. Can be updated by CLI.
 * @default Object {appConfig} i.e 'config.json'
 * @param {Object} env - Environment variables
 */
appConfig = utils.merge(appConfig, env);
/**
 * Creates the express server and loads all the Modules and logic.
 * @property {object} - Domain instance.
 */
let d = require('domain').create();

d.on('error', function (err) {
    let logman = new Logger();
    let logger = logman.logger;
    logger.error('error : ', err);
    process.exit(0);
});

d.run(function () {
    let modules = [];
    async.auto({

        /**
		 * @method config
		 * @param {nodeStyleCallback} cb - Callback function with the mutated `appConfig`.
		 * @throws {Error} If failed.
		 */
        config: function (cb) {
            cb(null, appConfig);
        },

        /**
		 * @method logger
		 * @param {nodeStyleCallback} cb - Callback function with the mutated `logger`.
		 * @throws {Error} If failed.
		 */
        logger: function (cb) {
            let logman = new Logger();
            let logger = logman.logger;
            cb(null, logger);
        },

        /**
		 * @method public
		 * @param {nodeStyleCallback} cb - Callback function with the mutated `public` directory.
		 * @throws {Error} If failed.
		 */
        public: function (cb) {
            cb(null, path.join(__dirname, 'public'));
        },

        /**
		 * @method db
		 * @param {nodeStyleCallback} cb - Callback function with the mutated database instance.
		 * @throws {Error} If failed.
		 */
        db: ['config', 'logger', function (scope, cb) {
            let db = require('./helpers/database.js');
            db.connect(scope.config.db, scope.logger, cb);
        }],

        /**
		 * @method redis
		 * @param {nodeStyleCallback} cb - Callback function with the mutated redis instance.
		 * @throws {Error} If failed.
		 */
        redis: ['config', 'logger', function (scope, cb) {
			let cache = require('./helpers/cache.js');
			cache.connect(scope.config.cacheEnabled, scope.config.redis, scope.logger, cb);
        }],

        /**
		 * @method network
		 * @param {nodeStyleCallback} cb - Callback function with network configuration.
		 * @throws {Error} If failed.
		 */
        network: ['config', function (scope, cb) {
            let express = require('express');
            let fs = require('fs');
            let cors = require('cors');
            let app = express();

            app.use(cors());
            app.options('*', cors());

            let server = require('http').createServer(app);
            let io = require('socket.io')(server);

            let privateKey, certificate, https, https_io;
            if (scope.config.ssl.enabled) {
                privateKey = fs.readFileSync(scope.config.ssl.options.key);
                certificate = fs.readFileSync(scope.config.ssl.options.cert);

                https = require('https').createServer({
                    key: privateKey,
                    cert: certificate,
                    ciphers: 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:' + 'ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:' + '!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA'
                }, app);

                https_io = require('socket.io')(https);
            }

            cb(null, {
                express: express,
                app: app,
                server: server,
                io: io,
                https: https,
                https_io: https_io
            });
        }],

        /**
		 * @method connect
		 * @param {nodeStyleCallback} cb - Callback function with used middlewares.
		 * @throws {Error} If failed.
		 */
        connect: ['network', function (scope, cb) {
            let bodyParser = require('body-parser');
            let cookieParser = require('cookie-parser');

            scope.network.app.engine('html', require('ejs').renderFile);
            scope.network.app.set('view engine', 'ejs');
            scope.network.app.set('views', path.join(__dirname, 'public'));
            scope.network.app.use(scope.network.express.static(path.join(__dirname, 'public')));
            scope.network.app.use(bodyParser.raw({ limit: '2mb' }));
            scope.network.app.use(bodyParser.urlencoded({ extended: true, limit: '2mb', parameterLimit: 5000 }));
            scope.network.app.use(bodyParser.json({ limit: '2mb' }));
            scope.network.app.use(cookieParser());
            cb();
        }],

        /**
		 * @method modules
		 * @param {nodeStyleCallback} cb - Callback function with all modules loaded from modules directory.
		 * @throws {Error} If failed.
		 */
        modules: ['network', 'connect', 'config', 'logger', 'db', 'redis', function(scope, cb) {
            let tasks = {};

			Object.keys(scope.config.modules).forEach(function (name) {
				tasks[name] = function (cb) {
					let d = require('domain').create();

					d.on('error', function (err) {
						scope.logger.error('error : ' , err);
						scope.logger.error('Domain ' + name, { message: err.message, stack: err.stack });
					});

					d.run(function () {
						scope.logger.debug('Loading module', name);
						let Klass = require(scope.config.modules[name]);
						let obj = new Klass(cb, scope);
						modules.push(obj);
					});
				};
			});
			async.parallel(tasks, function (err, results) {
				cb(err, results);
			});
        }],

        /**
		 * @method api
		 * @param {nodeStyleCallback} cb - Callback function with all api loaded from routes directory.
		 * @throws {Error} If failed.
		 */
        api: ['modules', 'logger', 'network', function (scope, cb) {
            Object.keys(scope.config.api).forEach(function (name) {
				try {
                    let ApiEndpoint = require(scope.config.api[name]);
                    new ApiEndpoint(scope.network.app, scope);
                } catch (e) {
                    scope.logger.error('Unable to load API endpoint : ' , e);
                    cb(e);
                }
			});
            cb();
        }],

        /**
		 * @method ready
		 * @param {nodeStyleCallback} cb - Callback function when db and config ready
		 * @throws {Error} If failed.
		 */
        ready: ['config', 'db', function (scope, cb) {
            cb();
        }],

        /**
		 * @method listen
		 * @param {nodeStyleCallback} cb - Callback function with connection on specified port
		 * @throws {Error} If failed.
		 */
        listen: ['ready', function (scope, cb) {
            scope.network.server.listen(scope.config.app.port, scope.config.app.address, function (err) {
                scope.logger.info('ETP started: ' + scope.config.app.address + ':' + scope.config.app.port);
                if (!err) {
                    cb(null, scope.network);
                } else {
                    cb(err, scope.network);
                }
            });
        }],

        web: ['ready', function (scope, cb) {
            scope.network.server.listen(3000, 'localhost', function (err) {
              require('./preloader-server.js');
              cb();
            });
        }]

    }, function (err, scope) {
        // TODO: fixme
        if (err) {
            logger.error('error : ', err);
            process.exit(0);
        }
    });
});

