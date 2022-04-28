// const A = 11009;
// const B = 11332;
const A = 31415;
const B = 92653;

function isPalidromic(num) {
    const str = num.toString();

    const mid = Math.floor(str.length / 2);
    // console.log(mid);
    for(let i = 0; i < mid; i++) {
        if(str[i] !== str[str.length  - 1 - i]) {
            return false;
        }
    }

    return true;
}

let count = 0;
for(i = A; i <= B; i++) {
    if(isPalidromic(i)) {
        count++;
    }
}

console.log(count);