let readline = require('readline-sync');
let num = readline.question('Enter the number : ');
let rev = 0;
let temp = 0;

while(num > 0)
{
    temp = (num % 10);
    rev = rev * 10 + temp; 
    num = Math.floor(num / 10);
}
process.stdout.write("The reverse is : "+rev);