function main(input) {
    input = input.split(`\n`);
    const [N, M] = input[0].split(` `).map(Number);

    let minCard = 0;
    let maxCard = N;

    for(let i = 0; i < M; i++) {
        const [min, max] = input[i+1].split(` `).map(Number);

        minCard = Math.max(min, minCard);
        maxCard = Math.min(max, maxCard);

        if(maxCard < minCard) {
            console.log(0);
            return;
        }
    }

    console.log(maxCard - (minCard - 1));
}

const input = require("fs").readFileSync("/dev/stdin", "utf8");
main(input);