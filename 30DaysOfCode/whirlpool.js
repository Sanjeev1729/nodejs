var crypto = require('crypto');
var hash = crypto.createHash('whirlpool');
var data = hash.update('sanjeev','utf8');
var value = data.digest('base64');
console.log(value);