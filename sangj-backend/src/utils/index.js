exports.isEmpty = function (val) {
    //check for empty object {}, array []
    if (val !== null && typeof val === 'object') {
        if (Object.keys(val).length === 0) {
            return true;
        }
    }
    //check for undefined, null and "" 
    else if (val == null || val === "") {
        return true;
    }
    return false;
}