let args = process.argv.slice(2);

function minimum(args) {
    let min = Math.min(...args);
    console.log(`The minimum of [${args}] is ${min}`);
    return min;
}

minimum(args);
module.exports = minimum;
