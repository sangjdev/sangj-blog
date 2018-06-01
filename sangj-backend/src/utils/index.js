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

exports.wrapAsync = function (fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(next);
    };
}

exports.getYMD = function () {
    let date = new Date();
    let month = (date.getMonth() + 1);
    let day = date.getDate();
    let hrs = date.getHours();
    if (Number(month) < 10) { month = "0" + month; }
    if (Number(day) < 10) { day = "0" + day; }
    if (Number(hrs) < 10) { hrs = "0" + hrs; }
    return "" + date.getFullYear() + "" + month + "" + day;
}