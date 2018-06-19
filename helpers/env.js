
/** 
 * @desc loads environment variables and make an object
 * @param {String} mailFrom - sender address
 * @param {String} refreshToken - refresh token
 * @param {String} accessToken - access token
 * @param {String} clientId - client id
 * @param {String} clientSecret - client secret
 * @param {String} hashSecret - hash secret
 * @returns {Object}
*/

let env = process.env;

module.exports = {
    mailFrom: env.MAIL_FROM,
    refreshToken: env.REFRESH_TOKEN,
    accessToken: env.ACCESS_TOKEN,
    clientId: env.CLIENT_ID,
    clientSecret: env.CLIENT_SECRET,
    hashSecret: env.HASH_SECRET
};
