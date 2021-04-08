var readline = require('readline-sync');
let num = readline.question('Enter the number : ');
let count = 0;
//let remainder = 0;

if(num >= 1)  
{
    ++count;
}
while( num / 10 >= 1)
{
    Math.floor(num = num / 10);
    //num = num - remainder;
    count += 1;
}
process.stdout.write("The count is "+count);