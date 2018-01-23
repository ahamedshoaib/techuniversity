function average(...params) {
    let result = 0;
    params.forEach(function(value) {
        result += value;
    });
    return result/params.length | 0;
}

module.exports = average;
