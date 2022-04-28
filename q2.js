function keiryou(target, cups, count) {
    for(let cup of cups) {
        if(target < cup) {
            continue;
        }

        if(target === cup) {
            return ++count;
        }

        const result = keiryou(target - cup, cups, ++count);
        if(result !== -1) {
            return result;
        }
    }

    return -1;
}

function main(input) {
    const target = input[0];
    let cups = input.slice(1).map(Number);
    cups.sort((a, b) => b - a);

    const result = keiryou(target, cups, 0);

    console.log(result);
}

main(process.argv.slice(2));
