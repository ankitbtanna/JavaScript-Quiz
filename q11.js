let x = 0;

for (let i = 0; i <= 6; i+=2) {
    if (i === 4) {
        continue;
    }
    x+=i;
}

console.log(x);

