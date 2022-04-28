/* 出力例1 */
// const N = 2;
// const X = 40;
// const balls = [
//     [1, 8, 4],
//     [10, 5]
// ]

/* 出力例2 */
// const N = 3;
// const X = 200;
// const balls = [
//     [10,10,10],
//     [10,10,10],
//     [2,2,2,2,2]
// ];

function getCount(numbers, target, current, y) {
    if(numbers.length - 1 === y) {
        let count = 0;
        for(let i = 0; i < numbers[y].length; i++) {
            let total = current * numbers[y][i];
            if(total === target) {
                count++;
            }
        }
        return count;
    } else {
        let count = 0;
        for(let i = 0; i < numbers[y].length; i++) {
            let total = current * numbers[y][i];
            let subCount = getCount(numbers, target, total, y + 1);
            count += subCount;
        }
        return count;
    }
}

function Main(input) {
    input = input.split("\n");
    const N = BigInt(input[0].split(" ")[0]);
    const X = BigInt(input[0].split(" ")[1]);
    let balls = [];
    for(let i = 0; i < N; i++) {
        let tmp = input[1 + i].split(" ").slice(1).map(BigInt);
        balls.push(tmp);
    }

    const count = getCount(balls, X, 1n, 0);
    console.log(count);
}

// Main("2 40\n3 1 8 4\n2 10 5");
// Main("3 200\n3 10 10 10\n3 10 10 10\n5 2 2 2 2 2");
// Main(`3 200
// 3 10 10 10
// 3 10 10 10
// 5 2 2 2 2 2
// `)
Main(require("fs").readFileSync("/dev/stdin", "utf8"));