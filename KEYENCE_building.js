// function main(input) {
//     input = input.split("\n");
//     const N = Number(input[0]);
//     let predictAreas = input[1].split(" ").map(Number);

//     const isValid = (area => {
//         for(let a = 1; a <= area; a++) {
//             for(let b = a; b <= area; b++) {
//                 if(area === 4*a*b+3*a+3*b) {
//                     return true;
//                 }
//             }
//         }

//         return false;
//     })

//     let invalidCount = 0;
//     for(const area of predictAreas) {
//         const v = isValid(area);
//         if(!v) {
//             invalidCount++;
//         }
//     }

//     console.log(invalidCount);
// }

// main(require("fs").readFileSync("/dev/stdin", "utf8"));

function main(input) {
    input = input.split("\n");
    const N = +input.shift();
    const S = input.shift().split(/\s+/).map(n=>+n);
    console.log("N", N, typeof N);
    console.log("S", S);

    // const N = Number(input[0]);
    // const S = input[1].split(" ").map(Number);

    let count = 0;

    for (let i = 0; i < S.length; i++) {
        let bool = false;

        for (let a = 1; a < S[i]; a++) {
 
            for (let b = 1; b < S[i]; b++) {
                if (S[i] === (4 * a * b + 3 * a + 3 * b)) {
                    bool = true;
                }
                if (bool === true) {
                    break;
                }
            }

            if (bool === true) {
                break;
            }
        }

        if (bool === false) {
            count += 1; 
        } 
    }

    console.log(count);
}

main(`3
10 20 39
`)
// main(require("fs").readFileSync("/dev/stdin", "utf8"));