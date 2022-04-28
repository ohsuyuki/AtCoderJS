function main(input) {
    input = input.split("\n");
    const dic = input[0];
    const N = Number(input[1]);
    const people = input.slice(2);

    // rhsの方が前にくるべきときにtrueを返す
    const compare = function (lhs, rhs) {
        let min = Math.min(lhs.length, rhs.length);
        for(let i = 0; i < min; i++) {
            if(lhs[i] === rhs[i]) {
                continue;
            }

            let lhsIndex = dic.indexOf(lhs[i]);
            let rhsIndex = dic.indexOf(rhs[i]);

            return lhsIndex - rhsIndex;
        }

        return lhs.length - rhs.length;
        // for(let i = 0; i < lhs.length; i++) {
        //     if(rhs.length < i) {
        //         return true;
        //     }

        //     let lhsIndex = dic.indexOf(lhs[i]);
        //     let rhsIndex = dic.indexOf(rhs[i]);

        //     if(rhsIndex === lhsIndex) {
        //         continue;
        //     }

        //     return rhsIndex < lhsIndex;
        // }

        // return false;
    }

    for(var i = 0; i < people.length; i++){
        //後ろから前に向かって小さい値を浮かび上がらせるfor文
        for(var j = people.length-1; j>i ; j-- ){
            if(compare(people[j-1], people[j]) > 0) {
                let tmp = people[j-1];
                people[j-1] = people[j];
                people[j] = tmp;
            }
        }
    }
    // people.sort(compare);
    // for(let i = 0; i < people.length - 1; i++) {
    //     for(let j = people.length - 1; i < j; j--) {
    //         if(compare(people[j-1], people[j])) {
    //             let tmp = people[j-1];
    //             people[j-1] = people[j];
    //             people[j] = tmp;
    //         }

    //         // console.log(people);
    //     }
    // }

    for(let i = 0; i < people.length; i++) {
        console.log(people[i]);
    }
}

// main(`bacdefghijklmnopqrstuvwxzy
// 4
// abx
// bzz
// bzy
// caa`);

// main(`zyxwvutsrqponmlkjihgfedcba
// 5
// a
// ab
// abc
// ac
// b`);

main(require("fs").readFileSync("/dev/stdin", "utf8"));