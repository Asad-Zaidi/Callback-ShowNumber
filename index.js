function showNumber(number, callback) {
    callback(number);
}
showNumber(123, function (result) {
    console.log("The number is: " + result);
}); 

module.exports = showNumber;