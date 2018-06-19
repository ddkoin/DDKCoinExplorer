/* ETP Memory Tables
 *
 */

BEGIN;

CREATE TABLE IF NOT EXISTS "users"(
"id" SERIAL,
"fullname" VARCHAR(50),
"email" VARCHAR(50) NOT NULL UNIQUE PRIMARY KEY,
"profile_picture_url" VARCHAR(52)
);

CREATE TABLE IF NOT EXISTS "comments"(
"id" SERIAL,
"parent" VARCHAR(10),
"created" VARCHAR(50),
"modified" VARCHAR(55),
"content" VARCHAR(500),
"pings" TEXT [],
"creator" VARCHAR(10),
"fullname" VARCHAR(50),
"profile_picture_url" VARCHAR(252),
"created_by_admin" BOOLEAN DEFAULT FALSE,
"created_by_current_user" BOOLEAN DEFAULT TRUE,
"upvote_count" SMALLINT DEFAULT 0,
"user_has_upvoted" BOOLEAN DEFAULT TRUE,
"is_new" BOOLEAN DEFAULT FALSE
);

COMMIT;