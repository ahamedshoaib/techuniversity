function upperCaser(input) {
    return input.toUpperCase();
}

module.exports = upperCaser;

console.log("given lower case string return uppercase string: ", upperCaser("lower case string") === "LOWER CASE STRING");