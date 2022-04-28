// difficulty 214

// const N = 3;
// const K = 1;
// const scores = [
//     [178,205,132],
//     [112,220,96],
//     [36,64,20]
// ];

// const N = 2;
// const K = 1;
// const scores = [
//     [300,300,300],
//     [200,200,200]
// ];

function main(input) {
    input = input.split("\n");
    const N = Number(input[0].split(" ")[0]);
    const K = Number(input[0].split(" ")[1]);
    let scores = [];
    for(let i = 0; i < N; i++) {
        let tmp = input[1 + i].split(" ").map(Number);
        scores.push(tmp);
    }

    // 暫定のスコアを算出
    const totalScores = scores.map(scoreArr => scoreArr.reduce((previous, current) => previous + current), 0);
    const sorted = totalScores.slice().sort((lhs, rhs) => rhs - lhs);
    
    // 暫定のスコアからK位に必要なスコアの最低点を出す
    const minScore = sorted[K-1];
    
    // 各生徒が最低点を超えるか
    for(const totalScore of totalScores) {
        const result = (minScore <= (totalScore + 300) ? "Yes" : "No");
        console.log(result);
    }
}

// main(`3 1
// 178 205 132
// 112 220 96
// 36 64 20
// `);
// main(`2 1
// 300 300 300
// 200 200 200
// `)
// main(`4 2
// 127 235 78
// 192 134 298
// 28 56 42
// 96 120 250
// `)
main(require("fs").readFileSync("/dev/stdin", "utf8"));