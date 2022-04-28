function main(input) {
    const lines = input.trim().split("\n");
    let [n,x] = lines[0].split(" ").map(x => BigInt(x));
    n = Number(n);
    const l = [];
    const a = [];
    for (let i=0;i<n;i++) {
      const line = lines[i+1].split(" ").map(x => BigInt(x));
      l.push(Number(line[0]));
      a.push(line.slice(1));
    }
    let d = [1n];
    for (i of a) {
      const dd = [];
      for (j of d) {
        for (k of i) {
            console.log(`${j} x ${k}`);
            dd.push(j*k);
        }
      }
      console.log(`dd: ${dd}`);
      d = dd;
    }
    let ans = 0;
    for (i of d) {
      if (i==x) {
        ans++;
      }
    }
    console.log(ans);
}

main("2 40\n3 1 8 4\n2 10 5");
main("3 200\n3 10 10 10\n3 10 10 10\n5 2 2 2 2 2");

// main(require("fs").readFileSync("/dev/stdin","utf8"));