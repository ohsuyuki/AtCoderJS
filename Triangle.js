function isCollinearity(p1, p2, p3) {
    console.log(p1, p2, p3);

    const a = (p2[1] - p1[1]) * (p3[0] - p1[0]);
    const b = (p3[1] - p1[1]) * (p2[0] - p1[0]);

    console.log(a, b);

    const divA = (p2[1] - p1[1]) / (p2[0] - p1[0]);
    const divB = (p3[1] - p1[1]) / (p3[0] - p1[0]);

    console.log(divA);
    console.log(divB);

    console.log(p2[1] - p1[1], p2[0] - p1[0]);
    console.log(p3[1] - p1[1], p3[0] - p1[0]);

    return a === b;
}

function main(input) {
    input = input.split(`\n`);

    const N = Number(input[0]);
    let points = [];
    for(let i = 1; i < input.length; i++) {
        const point = input[i].split(" ").map(Number);
        points.push(point);
    }

    // let count = 0;
    // for(let i = 0; i < points.length; i++) {
    //     for(let j = i + 1; j < points.length; j++) {
    //         for(let k = j + 1; k < points.length; k++) {
    //             // let edge1 = (points[i][1] - points[j][1]) / (points[i][0] - points[j][0]);
    //             // let edge2 = (points[j][1] - points[k][1]) / (points[j][0] - points[k][0]);
    //             // let edge3 = (points[k][1] - points[i][1]) / (points[k][0] - points[i][0]);

    //             // if(edge1 === edge2 && edge2 === edge3) {
    //             //     console.log(points[i], points[j], points[k]);
    //             //     continue;
    //             // }

    //             // count++;
    //             if(isCollinearity(points[i], points[j], points[k]) === true) {
    //                 console.log(points[i], points[j], points[k]);
    //                 console.log(i, j, k);
    //                 continue;
    //             }

    //             count++;
    //         }
    //     }
    // }

    isCollinearity(points[7], points[10], points[12]);

    // console.log(count);
}

// main(`4
// 0 1
// 1 3
// 1 1
// -1 -1`)

main(`20
224 433
987654321 987654321
2 0
6 4
314159265 358979323
0 0
-123456789 123456789
-1000000000 1000000000
124 233
9 -6
-4 0
9 5
-7 3
333333333 -333333333
-9 -1
7 -10
-1 5
324 633
1000000000 -1000000000
20 0`);