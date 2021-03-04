const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.hasOwnProperty('repeatTimes') === false) {
    options.repeatTimes = '1';
  }
  
  if (options.hasOwnProperty('separator') === false) {
    options.separator = '+';
  }
  
  if (options.hasOwnProperty('addition') === false) {
    options.addition = '';
  }
  
  if (options.hasOwnProperty('additionRepeatTimes') === false) {
    options.additionRepeatTimes = '1';
  }
  
  if (options.hasOwnProperty('additionSeparator') === false) {
    options.additionSeparator = '|';
  }

  if (options.addition === null) {options.addition = 'null'};

  if (str === null) {str = 'null'};
  
  addition = String(options.addition).split();
  
  for (let i = 1; i < options.additionRepeatTimes; i++) {
  addition.push(addition[0]);
  
    }
    
  addition = addition.join(options.additionSeparator);
  
  str = (String(str) + addition).split();
  
    for (let i = 1; i < options.repeatTimes; i++) {
  str.push(str[0]);
    }
  
    return str.join(options.separator);
  };
  