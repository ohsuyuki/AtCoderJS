const errorMsg = "invalid format";

function main(input) {
    if(input.length <= 0) {
        console.log(errorMsg);
    }

    let result = "";
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i]) == false) {
            // i が食材の名前でないところを指している場合は、データ形式が不正
            console.log(errorMsg);
            return;
        }

        // 食材の名前
        let name = input[i];

        // 食材の個数
        let count;
        if(i == (input.length - 1)) {
            // 配列の最後が食材の場合は、個数がなく、1個
            count = 1; 
        } else if(isNaN(input[i + 1]) == false) {
            // 食材の後に個数が続くパターン
            count = Number(input[i + 1]);
            // iが食材の名前を指すようにインクリメント
            i++;
        } else {
            // 食材の後に食材が続くパターン
            count = 1;
        }

        // 出力する文字列を作成
        for(let j = 0; j < count; j++) {
            if(result) {
                result += ` ${name}`;
            } else {
                result = name;
            }
        }
    }

    console.log(result);
}

main(process.argv.slice(2));
// main("apple 2 butter egg 2 raisin");
// main("apple 2 2 butter");
// main(require("fs").readFileSync("/dev/stdin", "utf8"));