var readline = require('readline-sync');
var amount = readline.question('Enter the amount : ');
var rate = readline.question('Enter the rate : ');
var time = readline.question('Enter the time : ');

var SimpleInterest = (amount*rate*time)/100;
console.log("The simple interest is : "+SimpleInterest);