const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  newArr = arr.flat();
    count = 0;
    for (let i = 0; i < newArr.length; i = i + 1) {
        if (newArr[i] == '^^') {
            count = count + 1;
        }
    }
    return count;
};
