const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i]);
  }
  if (newArr[0] === '--double-prev' || newArr[0] === '--discard-prev') { newArr.splice(0, 1);
  return newArr;
  }
  if (newArr[newArr.length -1] === '--double-next' || newArr[newArr.length -1] === '--discard-next') {
  newArr.splice(newArr.length - 1, 1);
  return newArr;
  }
  doubleNext(newArr);
  doublePrev(newArr);
  discardNext(newArr);
  discardPrev(newArr);
  return newArr;
  };
  
  function doubleNext(newArr) {
  task = newArr.indexOf('--double-next');
  newArr.splice(task, 1, newArr[task + 1]);
  return newArr;
  }
  
  function doublePrev(newArr) {
  task2 = newArr.indexOf('--double-prev');
  newArr.splice(task2, 1, newArr[task2 - 1]);
  return newArr;
  }
  
  function discardNext(newArr) {
  task3 = newArr.indexOf('--discard-next');
  newArr.splice(task3, 2);
  return newArr;
  }
  
  function discardPrev(newArr) {
  task4 = newArr.indexOf('--discard-prev');
  newArr.splice(task4 - 1, 2);
  return newArr.filter(item => typeof item !== 'string');
  };