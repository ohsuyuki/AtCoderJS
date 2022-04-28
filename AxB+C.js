function main(input) {
    const N = Number(input);

    const target = N - 1;
    let count = 0;
    // console.log(target);
    for(let i = 2; i <= target; i++) {
        // console.log(i);
        for(let j = 1; j <= i; j++) {
            if(i % j === 0) {
                // console.log(`${j} x ${i / j} = ${i}`);
                count++;
            }
        }
    }

    console.log(count + 1);
}

// main(`3`);
// main(`5`);
main(`8`);
// main(`100`);
// main(`1000000`);


// 5
// 1,1,4
// 1,2,3
// 2,1,3
// 1,3,2
// 3,1,2
// 2,2,1
// 1,4,1
// 4,1,1

// 8
