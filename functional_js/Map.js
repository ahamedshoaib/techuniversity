function doubleAll(numbers) {
    var result = numbers.map(function(x) {return x*2;})
    return result
}

module.exports = doubleAll

console.log("given array return array where evry element is doubled: ", doubleAll([1, 2, 3]).toString() === [2, 4, 6].toString());