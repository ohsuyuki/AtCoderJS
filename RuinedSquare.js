function main(input) {
    const [x1, y1, x2, y2] = input.split(" ").map(Number);

    let dx = x2 - x1;
    let dy = y2 - y1;

    // x3, y3
    const x3 = x2 - dy;
    const y3 = y2 + dx;

    // x4, y4
    const x4 = x1 - dy;
    const y4 = y1 + dx;

    // x2, y2 を中心に x1, y1 を90度回転
    // const theta3 = -1 * Math.PI/2.0;
    // const _x3 = Math.cos(theta3) * x1 + (-1) * Math.sign(theta3) + (x2 - x2 * Math.cos(theta3) + y2 * Math.sign(theta3));
    // const _y3 = Math.sin(theta3) * x1 + Math.cos(theta3) * y1 + (y2 - x2 * Math.sign(theta3) - y2 * Math.cos(theta3));

    console.log(`${x3} ${y3} ${x4} ${y4}`);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(`0 0 0 1`);
// main(`2 3 6 6`);
// main(`31 -41 -59 26`);