// Función de devolver si hay numero par o no
function hasEven(myNums) {
    var i = 0;
    var result = false;
    while (i < myNums.length) {
        if (myNums[i] % 2 === 0) {
            result = true;
        }
        i++;
    }
    return result;
}
var numArr = [2];
console.log(hasEven(numArr));
function startsWithM(myNames) {
    var i = 0;
    var result = true;
    while (i < myNames.length) {
        if (myNames[i][0].toLowerCase() !== "m") {
            result = false;
        }
        i++;
    }
    return result;
}
var mArr = ["Marta", "Manuel", "Manolo"];
console.log(startsWithM(mArr));
