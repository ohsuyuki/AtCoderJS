

function main(input) {
    let [A, B, H, M] = input.split(" ").map(Number);

    const m = M / 60;
    const angleM = 2 * Math.PI * m;
    const angleH = 2 * Math.PI * (H / 12) + (2 * Math.PI / 12) * m;
    console.log(angleH);
    const angle = Math.max(angleM, angleH) - Math.min(angleM, angleH);
    console.log(angle);

    // console.log((angle / (Math.PI * 2) * 360));
    const ans = Math.pow(Math.pow(A, 2) + Math.pow(B, 2) - 2 * A * B * Math.cos(angle), 0.5);
    console.log(ans);
}

// main(`3 4 9 0`);
main(`3 4 10 40`);
// main(require("fs").readFileSync("/dev/stdin", "utf8"));