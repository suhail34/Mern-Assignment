let n = 5;
let c = 1;

let row = 0;
while(row < n)
{
    let col = 0;
    while(col <= row)
    {
        if(row == 0 || col == 0)
        {
             c =1;
        }   
        else
        {
            c = c*(row-col+1)/col;
        }
        process.stdout.write(c+"  ");
        ++col;
    }
    process.stdout.write("\n");
    ++row; 
}