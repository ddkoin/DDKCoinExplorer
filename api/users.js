let library = {};

/**
 * Initializes library with scope content.
 * Calls library.db
 * Binds api with modules.
 * - Public API:
 * @class
 * @param {scope} scope - App instance.
 * @param {function} cb - Callback function.
 * @return {res.send()} Callback function.
 */
function UsersAPIs(app, scope) {
	library = scope;
	// implement users APIs here
}

module.exports = UsersAPIs;
