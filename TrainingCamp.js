function main(input) {
    // const N = BigInt(input);

    // let power = 1n;
    // let didDiv = false;
    // let bigIntMax = BigInt(2n ** 54n);
    // let base = 10n ** 9n + 7n;
    // for(let i = 1n; i<= N; i++) {
    //     power = power * BigInt(i);

    //     if(bigIntMax / i <= i + 1n) {
    //         power = power % base;
    //         didDiv = true;
    //     }
    // }

    // if(didDiv === false) {
    //     power = power % base;
    // }

    // console.log(`${power}`);
    const N = Number(input);
    let ans = 1;
    for(let i = 1; i <= N; i++) {
        ans = ans * i % (1e9+7);
    }
    console.log(ans);
}

// main(`100000`);
main(require("fs").readFileSync("/dev/stdin", "utf8"));
