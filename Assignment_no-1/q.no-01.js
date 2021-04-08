var readline = require('readline-sync');
var credits = readline.question('Enter the credits : ');

if (credits >= 7500)
{
    console.log("Tera leader");
}
else if (credits < 7500 && credits >= 6000)
{
    console.log("Gega leader");
}
else if (credits < 6000 && credits >= 4500)
{
    console.log("Mega leader");
}
else if(credits < 4500)
{
    console.log("Rising Star");
}
