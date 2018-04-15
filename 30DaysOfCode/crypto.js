var crypto = require('crypto');
var hash = crypto.createHash('md5');
var data = hash.update('sanjeev','ascii');
console.log(data);
var dataDigest = data.digest('hex');
console.log(dataDigest);
