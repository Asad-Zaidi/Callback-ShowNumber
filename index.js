function showNumber(number, callback) {
    callback(number);
}
showNumber(123, function (result) {
    console.log("The Number is : " + result);
}); 

module.exports = showNumber;