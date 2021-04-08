let n = 5;

let row = 0;
while(row < n)
{
    let col = 0;
    let col_mirr = 0;
    while(col_mirr <= 2 * n - 1)
    {
        if(col < n - row - 1 )
        {
            process.stdout.write("  ");
        }
        else
        {
            process.stdout.write((col+row-3)+" ");
        }
        if(col_mirr < n - 1)
        {
            ++col;
        }
        else
        {
            --col;
        }
        ++col_mirr;
    }
    process.stdout.write("\n");
    ++row; 
}