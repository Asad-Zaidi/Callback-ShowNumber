function showNumber(callback) {
    var number = 123;
    callback(number);
}
showNumber(function (result) {
    console.log("The Number is : " + result);
}); 

module.exports = showNumber;    
