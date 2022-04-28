import fetch from "node-fetch";

function main(input) {
    console.log("griffin dragon troll medusa vampire");
}

function isStrongerThan(lhs, rhs) {
    fetch(`https://ob6la3c120.execute-api.ap-northeast-1.amazonaws.com/Prod/battle/${lhs}+${rhs}`, {
        method: "GET",
        mode: "cors"
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        // 404 や 500 ステータスならここに到達する
        throw new Error('Network response was not ok.');
    })
    .then(resJson => {
        console.log(JSON.stringify(resJson));
        console.log(resJson["winner"] === lhs);
        return resJson["winner"] === lhs;
        // return rhs.length >= lhs.length;
    })
    .catch(error => {
        // ネットワークエラーの場合はここに到達する
        console.error(error);
    })
}

function swap(arr, xp, yp) {
    const tmp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = tmp;
}

function bableSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 0; j < arr.length - 1 - i; j++) {
            if(isStrongerThan(arr[j], arr[j + 1])) {
                swap(arr, j, j + 1);
            }
        }
    }
}

const monsters = ["griffin", "dragon", "troll", "medusa", "vampire"];
bableSort(monsters);

console.log(monsters);