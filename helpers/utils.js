/**
 * @desc merge two objects
 * @param {Object} a 
 * @param {Object} b 
 * @returns {Object} a
 */
exports.merge = function (a, b) {
	for (let key in b) {
		if (b.hasOwnProperty(key)) {
			if (exports.merge.call(b, key) && b[key]) {
				if ('object' === typeof (b[key])) {
					if ('undefined' === typeof (a[key])) a[key] = {};
					exports.merge(a[key], b[key]);
				} else {
					a[key] = b[key];
				}
			}
		}
	}
	return a;
};
