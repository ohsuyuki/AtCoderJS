// _.reduce: reduce は コレクションのそれぞれの要素に対して iterator(accumulator, item) を繰り返し実行することで、コレクションを一つの値に "reduce" - まとめるものです。
// アキュムレータは一回前のイテレータ呼び出しの結果になっていなければなりません。
// もし初期値が渡されていなければ、コレクションの最初の値がアキュムレータとして使われます。

// アキュムレーター: 計算結果を保持するところ
// イテレーター: 順次処理するやつ


// var numbers = [1, 2, 3];
// var accumulate = function(result, int) {
//   return result + int;
// };
// var sum = reduce(numbers, accumulate, 0); // ---> 6
// console.log(sum);

var each = (collection, iteratee) => {
    // YOUR CODE HERE
    // ループを回してiteratee(各要素の値、キー（index）、コレクション)
    if (Array.isArray(collection)) {
        // 配列だったら
      for (let i = 0; i < collection.length; i++) {
        iteratee(collection[i], i, collection);
      }
    } else {
      // オブジェクトだったら
      for (let key in collection) {
        iteratee(collection[key], key, collection);
      }
    }
  };

// it('should pass every item of the array through the iterator if a memo is passed in', () => {
// const result = _.reduce([1, 2, 3], (memo, item) => {
//     return memo - item;
// }, 10);
// expect(result).toEqual(4);
// });

// var reduce = (collection, iterator, accumulator) => {

// };

const reduce = (collection, iterator, accumulator) => {
    // collectionからitemを一つずつとって、iterator(accumulator, item)
    // accumlatorはreturnがあるfunction

    // let result;
    // accumulator が undefined だったら、collection[0]を入れる
    let result = accumulator;

    each(collection, (item) => {
    //   result = iterator(accumulator, item);
      result = iterator(result, item);
    });

    console.log(result);
    console.log(" ");

    return result;
  };

const result = reduce([1, 2, 3], (memo, item) => {
    return memo - item;
}, 10);

console.log(result);

