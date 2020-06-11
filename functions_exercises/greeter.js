function getName(which) {
  let rlSync = require('readline-sync');
  return rlSync.question(`What is your ${which} name? `);
} 

console.log(`Hello, ${getName('first')} ${getName('last')}!`);
