let library = {}, self;

/**
 * Initializes library with scope content.
 * @memberof module:Comments
 * @class
 * @classdesc Main Comments methods.
 * @implements module:comments.Comments
 * @param {scope} scope - App instance.
 * @param {function} cb - Callback function.
 * @return {setImmediateCallback} Callback function with `self` as data.
 */
function Comments(cb, scope) {
    library = {
        db: scope.db,
        logger: scope.logger,
        config: scope.config,
        redis: scope.redis
    };
    self = this;
    setImmediate(cb, null, self);
}

//Export
module.exports = Comments;
