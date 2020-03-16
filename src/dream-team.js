module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;

  let arrStrings = members.filter(item => typeof item === 'string').map(str => str.trim().slice(0,1).toUpperCase()).sort().join('');

  return arrStrings.length ? arrStrings: false;
  
};