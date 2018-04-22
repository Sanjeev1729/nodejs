var crypto = require('crypto');
var algorithm = 'aes-256-ctr';
var pwd = "sanjeev";

var encrypt = function(text){
    var cipher = crypto.createCipher(algorithm,pwd);
    var crypted = cipher.update(text,'utf8','hex');
        crypted  = crypted+cipher.final('hex');
        return crypted;
}

var decrypt = function(text){
    var decryptcypher = crypto.createDecipher(algorithm,pwd);
    var originaltext = decryptcypher.update(text,'utf8','hex');
        originaltext += decryptcypher.final('hex');
        return originaltext;
}

let text = "not going for lunch";
console.log(encrypt(text));
console.log(decrypt(text));
