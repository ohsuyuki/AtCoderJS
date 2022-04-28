function main(input) {
    input = input.split(" ").map(Number);
    // ["4", "5"]
    // Number("4"), Number("5") -> [4, 5]
    const diff = Math.abs(input[0] - input[1]);
    // input[1] - input[0] => 4 - 5 = Math.abs(-1) => 1;

    if(diff === 1 || diff === 9) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

const num = Number("4");

main(`4 5`);
main(`5 4`);

// Yes
// main(require("fs").readFileSync("/dev/stdin", "utf8"));