function countWords(inputWords) {
    return inputWords.reduce(function(result, item, index, array) {
        if (result[item]) {
            result[item] += 1;
        } else {
            result[item] = 1;
        }
        return result;
    }, {});
}

module.exports = countWords;

console.log('returns right freequency for valid input',
 JSON.stringify(countWords(['a', 'a', 'b'])) === JSON.stringify({a: 2, b: 1}) );
