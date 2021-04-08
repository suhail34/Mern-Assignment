let space , i, rows, k = 0, count = 0, count1 = 0;
rows = 5;

for (i = 1; i <= rows; ++i) {
    for (space = 1; space <= rows - i; ++space) {
       process.stdout.write("  ");
       ++count;
    }
    while (k != 2 * i - 1) {
       if (count <= rows - 1) {
          process.stdout.write((i + k)+" ");
          ++count;
       } else {
          ++count1;
          process.stdout.write((i + k - 2 * count1)+" ");
       }
       ++k;
    }
    count1 = count = k = 0;
    process.stdout.write("\n");
 }