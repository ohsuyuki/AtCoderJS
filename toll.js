// const N = 5;
// const M = 3;
// const X = 3;
// const checkPoint = [1,2,4];
// const N = 7;
// const M = 3;
// const X = 2;
// const checkPoint = [4,5,6];
const N = 10;
const M = 7;
const X = 6;
const checkPoint = [1,2,3,4,6,8,9];

// 0に向かう時のコスト
let costLeft = 0;
for(let i = X; 0 <= i; i--) {
    if(checkPoint.includes(i)) {
        costLeft++;
    }
}

// Nに向かうときのコスト
let costRight = 0;
for(let i = X; i <= N; i++) {
    if(checkPoint.includes(i)) {
        costRight++;
    }
}

let cost = Math.min(costLeft, costRight);
console.log(cost);