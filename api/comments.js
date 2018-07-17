let sql = require('../sql/comments');
let library = {}; let count = 0;

/**
 * Initializes library with scope content.
 * Calls library.db
 * Binds api with modules.
 * - Public API:
	- get /api/comments
	- post /api/comments
	- put /api/comments/:id
	- delete /api/comments/:id
	- post /api/comments/:id/upvotes/
 * @class
 * @param {scope} scope - App instance.
 * @param {function} cb - Callback function.
 * @return {res.send()} Callback function.
 */
function CommentsAPIs(app, scope) {
    library = {
        db: scope.db
    };

    app.get('/api/comments', function (req, res) {
        library.db.query(sql.getComments)
            .then(function (comments) {
                return res.send(comments);
            })
            .catch(function (err) {
                return res.status(400).json({ err: err.message });
            });
    });

    app.post('/api/comments', function (req, res) {
        count = count + 1;
        let commentsData = {
            content: req.body.content,
            created: req.body.created,
            created_by_current_user: req.body.created_by_current_user,
            fullname: req.body.fullname,
            id: count + 1,
            modified: req.body.modified,
            parent: req.body.parent || null,
            profile_picture_url: req.body.profile_picture_url,
            upvote_count: req.body.upvote_count,
            user_has_upvoted: req.body.user_has_upvoted,
            pings: req.body.pings || [{}],
            creator: req.body.creator || 0,
            created_by_admin: req.body.created_by_admin || false,
            is_new: req.body.is_new || false
        };
        library.db.none(sql.insertComments, commentsData)
        .then(function () {
            return res.send(commentsData);
        })
        .catch(function (err) {
            return res.status(400).json({ data: { success: false, err: err.message } });
        });
    });

    app.put('/api/comments/:id', function (req, res) {
        let commentsData = {
            content: req.body.content,
            created: req.body.created,
            created_by_current_user: req.body.created_by_current_user,
            fullname: req.body.fullname,
            id: req.body.id,
            modified: (new Date(parseInt(req.body.modified))).toUTCString(),
            parent: req.body.parent || null,
            profile_picture_url: req.body.profile_picture_url,
            upvote_count: req.body.upvote_count,
            user_has_upvoted: req.body.user_has_upvoted,
            pings: req.body.pings || [{}],
            creator: req.body.creator || 0,
            created_by_admin: req.body.created_by_admin || false,
            is_new: req.body.is_new || false
        };
        library.db.none(sql.updateComment, commentsData)
            .then(function () {
                return res.send(commentsData);
            })
            .catch(function (err) {
                return res.status(400).json({ data: { success: false, err: err.message } });
            });
    });

    app.delete('/api/comments/:id', function (req, res) {
        library.db.none(sql.deleteComment, {
            id: req.params.id
        })
            .then(function () {
                return res.send(req.body);
            })
            .catch(function (err) {
                return res.status(400).json({ data: { success: false, err: err.message } });
            });
    });

    app.post('/api/comments/:id/upvotes/', function (req, res) {
        library.db.none(sql.updateVoteCount, {
            id: req.body.comment,
            user_has_upvoted: req.body.user_has_upvoted
        })
            .then(function () {
                return res.send(req.body.comment);
            })
            .catch(function (err) {
                return res.status(400).json({ data: { success: false, err: err.message } });
            });
    });
}

module.exports = CommentsAPIs;
