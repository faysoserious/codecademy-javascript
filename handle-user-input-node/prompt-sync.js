//const prompt = require('prompt-sync')();
//sigint:true make sure user can exit at will
const prompt = require('prompt-sync')({sigint: true});

const name = prompt('What is your name?');
console.log(`Hey there ${name}`);