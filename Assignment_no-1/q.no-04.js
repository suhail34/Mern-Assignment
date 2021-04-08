let num = 2;
let it = 1;

while(num < 100)
{   
    // since  we need to print 2 , 2 + 4, 6 + 2(4),14 + 3(4),26 + 4(4)
    console.log(num+" ");
    num = num + (4*it);
    it += 1;
}