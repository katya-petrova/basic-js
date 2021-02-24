//const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let j = 0;
  const secondsPerHour = 3600;
    for (let i = 0; i <= disksNumber - 2; i = i + 1) {
        j = (j * 2) + 1; 
            turns = j * 2 + 1;
    }
let seconds = Math.floor((secondsPerHour / turnsSpeed) * turns);
return {turns: turns, 
        seconds: seconds};
};
