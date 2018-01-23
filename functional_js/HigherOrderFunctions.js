function repeat(operation, num) {
    if (num > 0) {
        repeat(operation, num - 1);
        operation();
    }
}

module.exports = repeat;

//console.log("given function and number n execute function n number of times: ", repeat(fun, 8))