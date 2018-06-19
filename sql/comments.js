
let Comments = {

    insertComments: 'INSERT INTO comments ("id", "parent", "created", "modified", "content", "pings", "creator", "fullname", "profile_picture_url", "created_by_admin", "created_by_current_user", "upvote_count", "user_has_upvoted", "is_new") VALUES (${id}, ${parent}, ${created}, ${modified}, ${content}, ${pings}, ${creator}, ${fullname}, ${profile_picture_url}, ${created_by_admin}, ${created_by_current_user}, ${upvote_count}, ${user_has_upvoted}, ${is_new})',

    getComments: 'SELECT * FROM comments',

    updateComment: 'UPDATE comments SET "parent" = ${parent}, "created" = ${created}, "modified" = ${modified}, "content" = ${content}, "pings" = ${pings}, "creator" = ${creator}, "fullname" = ${fullname}, "profile_picture_url" = ${profile_picture_url}, "created_by_admin" = ${created_by_admin}, "created_by_current_user" = ${created_by_current_user}, "upvote_count" = ${upvote_count}, "user_has_upvoted" = ${user_has_upvoted}, "is_new" = ${is_new} WHERE "id" = ${id}',

    deleteComment: 'DELETE FROM comments WHERE "id" = ${id}',

    updateVoteCount: 'UPDATE comments SET "upvote_count" = CASE WHEN ${user_has_upvoted} THEN "upvote_count" + 1 ELSE "upvote_count" - 1 END WHERE "id" = ${id}'

};

module.exports = Comments;
