var readline = require('readline-sync');
var num1, num2, remainder, GCD;
num1 = readline.question('Enter the first number : ');
num2 = readline.question('Enter the second number : ');

for (let i = 1; i <= num1 && i <= num2; i++) {

    // check if is factor of both integers
    if( num1 % i == 0 && num2 % i == 0) {
        GCD = i;
    }
}

console.log("GCD of two number " + num1  +" and  "+ num2 + " is : " + GCD);