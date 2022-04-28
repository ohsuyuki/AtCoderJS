function getFirst(num) {
    return num % 10;
}

function getOrder(cookingTime) {
    let lastOrder = 0;
    for(let i = 1; i < cookingTime.length; i++) {
        const tmpMinWaitingTime = getFirst(cookingTime[lastOrder]);
        const minWaitingTime = (tmpMinWaitingTime == 0 ? Infinity : tmpMinWaitingTime);
        const tmpCurrentWaitingTime = getFirst(cookingTime[i]);
        const currentWaitingTime = (tmpCurrentWaitingTime == 0 ? Infinity : tmpCurrentWaitingTime);

        if(currentWaitingTime < minWaitingTime) {
            lastOrder = i;
        }
    }

    let last = cookingTime.splice(lastOrder, 1);
    cookingTime.push(last[0]);

    return cookingTime;
}

function getTime(order) {
    let totalTime = 0;
    for(let i = 0; i < order.length - 1; i++) {
        let time = Math.floor((order[i] + 9) / 10) * 10;
        totalTime += time;
    }

    return totalTime + order[order.length - 1];
}

// function main(input) {
//     input = input.trim().split("\n");

//     const A = Number(input[0]);
//     const B = Number(input[1]);
//     const C = Number(input[2]);
//     const D = Number(input[3]);
//     const E = Number(input[4]);

//     // 注文順番を確定
//     // 1の位が一番小さいものを最後に注文
//     let order = getOrder([A, B, C, D, E])

//     // 確定した注文順番で作ったときの提供時間を求める
//     let time = getTime(order);

//     // 提供時間を出力
//     // console.log(time);
// }

// Math.floor(num + (base - 1) / base) * base

// 120 -> 120 / 10 = 12, 12 * 10 = 120
// 121 -> 121 / 10 = 12, 12 * 10 = 120 => 130
// 121 -> (121 + 10) / 10 = 13, 
// 120 -> (120 + 10) / 10 = 13
// 120 -> (120 + 9) / 10 = 12
// 121 -> (121 + 9) / 10 = 13, 


function calc(order) {
    let totalTime = 0;
    for(let i = 0; i < 4; i++) {
        // 1の位で切り上げ
        // let time = Math.floor((order[i] + (10 - 1)) / 10) * 10;
        let time = Math.ceil(order[i] / 10) * 10;
        totalTime += time;
    }

    totalTime += order[order.length - 1]

    return totalTime;
}

function main(/*input*/) {
    // input = input.trim().split("\n");
    const input = [
        101,
        86,
        119,
        108,
        57
    ]

    let min = Infinity;
    for(let i = 0; i < 5; i++) {
        for(let j = i+1; j < 5; j++) {
            for(let k = j+1; k < 5; k++) {
                for(let l = k+1; l < 5; l++) {
                    for(let m = l+1; m < 5; m++) {
                        let order = [
                            Number(input[i]),
                            Number(input[j]),
                            Number(input[k]),
                            Number(input[l]),
                            Number(input[m])
                        ]
    
                        let cookingTime = calc(order);
                        if(cookingTime < min) {
                            min = cookingTime
                        }
                    }
                }
            }
        }
    }
    
    console.log(min);
}

main();
// main(require("fs").readFileSync("/dev/stdin", "utf8"));