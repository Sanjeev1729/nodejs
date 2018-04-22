/**
* getUnMaskedUserName :This function gets the unmasked username while traversing through the JSON in the local Storage
* @member of {frmLoginController}
* @param {entereduserName} the entered username
* @return {String} username if it is present or null if it is not present
* @throws {}
*/
getUnMaskedUserName= function(enteredUserName) {
    var names = [],
    var maskedUserValues = [];
    var unmaskedUserValues = [];
    names = JSON.parse(localStorage.getItem("names"));
    maskedUserValues = names.map(function (nameObj) {
        unmaskedUserValues.push(Object.keys(nameObj)[0]);
        return nameObj[Object.keys(nameObj)[0]];
    });
    var index = maskedUserValues.indexOf(enteredUserName);
    if (index >= 0) {
        return unmaskedUserValues[index];
    }
    return null;
};