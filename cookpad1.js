// inputのパース。出力は下記のイメージ
// const cargoes = [
//     {id: 1, weight: 50},
//     {id: 2, weight: 30},
//     {id: 3, weight: 40},
//     {id: 4, weight: 10}
// ];
function parse(input) {
    input = input.split(" ");

    let cargoes = [];
    for(let data of input) {
        const splited = data.split(":");
        const id = Number(splited[0]);
        const weight = Number(splited[1]);

        const cargo = { id: id, weight: weight };
        cargoes.push(cargo);
    }

    return cargoes;
}

function main(input) {
    // inputのパース
    const cargoes = parse(input);

    // できるだけ均等になるようにトラックに荷物を積む（積載量が一番小さいトラックに積み込む）
    let track1 = [];
    let track2 = [];
    let track3 = [];
    for(let i = 0; i < cargoes.length; i++) {
        const cargo = cargoes[i];

        const weight1 = track1.reduce((prev, current) => prev + current["weight"], 0);
        const weight2 = track2.reduce((prev, current) => prev + current["weight"], 0);
        const weight3 = track3.reduce((prev, current) => prev + current["weight"], 0);

        if(weight1 <= weight2 && weight1 <= weight3) {
            track1.push(cargo);
        } else if(weight2 < weight1 && weight2 <= weight3) {
            track2.push(cargo);
        } else {
            track3.push(cargo);
        }
    }

    // console.log(track1);
    // console.log(track2);
    // console.log(track3);
}

main("1:50 2:30 3:40 4:10");