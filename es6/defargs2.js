function makeImportant(string, num = string.length) {
    return string + '!'.repeat(num);
}

module.exports = makeImportant;
