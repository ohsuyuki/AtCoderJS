// inputに入力データ全体が入る
function Main(input) {
    const inputList = input.split("\n");
    const n = Number(inputList[0].split(' ')[0]);
    const x = BigInt(inputList[0].split(' ')[1]);
    const bags = inputList.slice(1, -1).map(raw => {
        return raw.split(' ').slice(1).map(s=>BigInt(s))
    });
    console.log(n);
    console.log(x);
    console.log(bags);

    let patterns = bags[0].map(i=>[i]);
    console.log(patterns);

    for (const bag of bags.slice(1)) {
        const existing = patterns
        const addPattern = []
        for (const ball of bag) {
            console.log(existing.length);
            for (let i = 0; i < existing.length; i++) {
                addPattern.push(existing[i].concat(ball))
            }
        }
        patterns = addPattern
    }

    console.log(patterns);

    let count = 0
    for (const pattern of patterns) {
        if (pattern.reduce((pre, cur)=>pre*cur) === x) {
            count +=1
        }
    }
    console.log(count);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// Main(`3 200
// 3 10 10 10
// 3 10 10 10
// 5 2 2 2 2 2
// `)
Main(`2 4
3 1 8 4
2 10 5
`)
// 2 40
// 3 1 8 4
// 2 10 5