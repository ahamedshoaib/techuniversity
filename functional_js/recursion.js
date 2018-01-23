function reduce(arr, fn, initial) {
    if (arr.length > 0) {
        let result = fn(initial, arr[0]);
        result = reduce(arr.slice(1), fn, result);
        return result;
    }
    return initial;
}

function count(result, item, index, array) {
    if (result[item]) {
        result[item] += 1;
    } else {
        result[item] = 1;
    }
    return result;
}

module.exports = reduce;

let input = ['apple', 'apple', 'bananna'];
let output = {
    apple: 2,
    bananna: 1,
};

console.log('given fruits return object with count of fruits',
    JSON.stringify(reduce(input, count, {})) === JSON.stringify(output));

input = [];
output = {};

console.log('given fruits return object with count of fruits',
    JSON.stringify(reduce(input, count, {})) === JSON.stringify(output));
