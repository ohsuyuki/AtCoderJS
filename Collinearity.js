function isCollinearity(p1, p2, p3) {
    // if(p1[1] === p2[1] && p1[1] === p3[1]) {
    //     return true
    // }

    // if(p1[0] === p2[0] && p1[0] === p3[0]) {
    //     return true;
    // } else if(p1[0] === p2[0] || p1[0] === p3[0]) {
    //     return false;
    // }

    // console.log(`${p1}, ${p2}, ${p3}`);
    // const a = (p2[1] - p1[1]) / (p2[0] - p1[0]);
    // const b = (p3[1] - p1[1]) / (p3[0] - p1[0]);
    const a = (p2[1] - p1[1]) * (p3[0] - p1[0]);
    const b = (p3[1] - p1[1]) * (p2[0] - p1[0]);

    return a === b;
}

function main(input) {
    input = input.split("\n");
    const N = Number(input[0]);
    let points = [];
    for(let i = 1; i < input.length; i++) {
        const point = input[i].split(" ").map(Number);
        points.push(point);
    }

    // const N = 4;
    // const points = [
    //     [0, 1],
    //     [0, 2],
    //     [0, 3],
    //     [1, 1]
    // ];

    for(let i = 0; i < points.length; i++) {
        for(let j = i + 1; j < points.length; j++) {
            for(let k = j + 1; k < points.length; k++) {
                if(isCollinearity(points[i], points[j], points[k]) === true) {
                    console.log("Yes");
                    // console.log(`${points[i]}, ${points[j]}, ${points[k]}`);
                    return;
                }
            }
        }
    }

    console.log("No");
}

// main(`4
// 0 1
// 0 2
// 0 3
// 1 1`);
// main(`14
// 5 5
// 0 1
// 2 5
// 8 0
// 2 1
// 0 0
// 3 6
// 8 6
// 5 9
// 7 9
// 3 4
// 9 2
// 9 8
// 7 2`);
// main(`9
// 8 2
// 2 3
// 1 3
// 3 7
// 1 0
// 8 8
// 5 6
// 9 7
// 0 1`)

main(require("fs").readFileSync("/dev/stdin", "utf8"));