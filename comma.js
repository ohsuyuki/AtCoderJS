// function getCount(num) {
//     return Math.floor((num.toString().length - 1) / 3);
// }

// 15桁

function main(input) {
    // 4桁 -> 1, 50001 - 10000 = 40001 * 1, 1010 - 1000 = 10, 10010 - 1000 = 9010 * 1
    // 7桁 -> 2,
    // 10桁 -> 3
    // 13桁 -> 4
    // 16桁 -> 5

    let N = BigInt(input);
    let total = 0n;
    while(1000n <= N) {
        let str = N.toString();
        let digits = str.length;

        if(16 <= digits) {
            const base = 1000000000000000n - 1n;
            const count = (N - base) * 5n;
            total += count;
            N = base;
        } else if(13 <= digits) {
            const base = 1000000000000n - 1n;
            const count = (N - base) * 4n;
            total += count;
            N = base;
        } else if(10 <= digits) {
            const base = 1000000000n - 1n;
            const count = (N - base) * 3n;
            total += count;
            N = base;
        } else if(7 <= digits) {
            const base = 1000000n - 1n;
            const count = (N - base) * 2n;
            total += count;
            N = base;
        } else if(4 <= digits){
            const base = 1000n - 1n;
            const count = (N - base) * 1n;
            total += count;
            N = base;
        }
    }

    console.log(`${total}`);
}

// main(1010);
//main(27182818284590);
main(1000000);

// 107730272137364
// 107730272137364
// 107730272137354

// main(require("fs").readFileSync("/dev/stdin", "utf8"));