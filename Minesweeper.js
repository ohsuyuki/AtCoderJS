function main(input) {
    input = input.split(`\n`);
    const [H, W] = input[0].split(` `).map(Number);

    let field = input.slice(1);
    for(let h = 0; h < H; h++) {
        let line = "";

        for(let w = 0; w < W; w++) {
            if(field[h][w] === "#") {
                line += "#";
                continue;
            }

            let count = 0;
            for(let difY = -1; difY <= 1; difY++) {
                const y = h + difY;
                if(y < 0 || H - 1 < y) { continue; }

                for(let difX = -1; difX <= 1; difX++) {
                    const x = w + difX;
                    if(x < 0 || W - 1 < x) { continue; }

                    if(field[y][x] === "#") {
                        count++;
                    }
                }
            }

            line += count;
        }

        console.log(line);
    }
}

// main(`3 5
// .....
// .#.#.
// .....`);

// main(`6 6
// #####.
// #.#.##
// ####.#
// .#..#.
// #.##..
// #.#...`)

main(require("fs").readFileSync("/dev/stdin", "utf8"));
