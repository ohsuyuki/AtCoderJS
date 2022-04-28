function uzu() {
    const edge = 6;
    const length = edge * edge;
    var targets = Array(edge);
    var pos = 0;
    var round = 0;

    while(true) {
        const currentEdge = edge - (2 * round);

        for(let i = 0; i < 4; i++) {
            // 対角線に該当する文字のインデックスを保持
            switch(i) {
            case 0:
                targets[round] = pos;
                break;
            case 2:
                targets[(edge - 1) - round] = pos;
                break;
            }

            pos += (currentEdge - 1);

            console.log(currentEdge, length, pos);
            if((length - 1) < pos) {
                return targets
            }
        }

        round++;
    }
}

function main(input) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWSYZ";

    const targets = uzu();
    console.log(targets);

    for(const target of targets) {
        const index = target % alphabet.length;
        console.log(alphabet[index]);
    }
}

main();

// 1 1 1 1
// 1 1 1 1
// 1 1 1 1
// 1 1 1 1

// 1 1 1
// 1 1 1
// 1 1 1