function logger(namespace) {
    return console.log.bind(null, namespace);
}

module.exports = logger;

// let warn = logger('WARN:');
// warn('danger');

console.log('call warn("abc") return "WARN: abc"', warn('abc') === 'WARN: abc');
console.log('call warn("") return "WARN: abc"', warn('') === 'WARN: ');
console.log('call warn("abc", "def") return "WARN: abc def"',
    warn('abc', 'def') === 'WARN: abc def');
