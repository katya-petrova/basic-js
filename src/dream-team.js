const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
}
for (let i = 0; i < members.length; i = i + 1) {
if (typeof members[i] !== 'string') {
  members = members.filter(item => typeof item == 'string')
}
}
    let arr = members.map(item => item.trim());
   let abbr = (arr.map(member => {return member[0].toUpperCase()}));
   return abbr.sort().join('');
};
