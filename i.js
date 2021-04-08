let n = 5;

let row = 0;
let row_mirr = 0;
while(row_mirr <= 2 * n - 2)
{
    let col = 0;
    let col_mirr = 0;
    while(col_mirr <= 2 * n - 2)
    {
        if(col <= row - 1 )
        {
            process.stdout.write((n-col)+" ");
        }
        else
        {
            process.stdout.write((n-row)+" ");
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
    if(row_mirr < n - 1)
    {
        ++row;
    }
    else
    {
        --row;
    }
    ++row_mirr; 
}