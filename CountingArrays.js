function main(input) {
  input = input.split("\n");
  const N = Number(input[0]);
 
  let arrays = new Set();
  for(let i = 1; i <= N; i++) {
    const current = input[i];
    arrays.add(current);
  }
  // let arrays = [];
  // for(let i = 1; i <= N; i++) {
  //   const current = input[i];

  //   if(arrays.length === 0) {
  //     arrays.push(current);
  //     continue;
  //   }

  //   let isDuplicate = false;
  //   for(let j = 0; j<arrays.length; j++) {
  //     const prev = arrays[j];

  //     if(prev.length < current.length) {
  //       continue;
  //     } else if(prev.length === current.length) {
  //       if(prev === current) {
  //         isDuplicate = true;
  //         break;
  //       } else {
  //         continue;
  //       }
  //     } else {
  //       break;
  //     }
  //   }

  //   if(!isDuplicate) {
  //     arrays.push(current);
  //   }
  // }

  // console.log(arrays.length);  
  console.log(arrays.size);
}

main(`4
2 1 2
2 1 1
2 2 1
2 1 2
`);
main(`5
1 1
1 1
1 2
2 1 1
3 1 1 1`
);
main(`1
1 1`);
// main(require("fs").readFileSync("/dev/stdin", "utf8"));