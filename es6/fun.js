input = process.argv.slice(2);

function fun(input) {
    let inputs = input;


    let result = inputs.map((x) => x.charAt(0))
        .reduce((accumulator, currentValue) => accumulator + currentValue);

    console.log(`[${inputs}] becomes "${result}"`);

    return result;
}

fun(input);
module.exports = fun;
