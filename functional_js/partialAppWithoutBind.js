function logger(namespace) {
    return function(...args) {
        console.log(namespace, ...args);
        // console.log.apply(console, [namespace].concat(args) );
        return [namespace].concat(args).join(' ');
    };
}

module.exports = logger;

let warn = logger('WARN:');
// console.log(warn('warning', 'warning'));

console.log('call warn("abc") return "WARN: abc"', warn('abc') === 'WARN: abc');
console.log('call warn("") return "WARN: abc"', warn('') === 'WARN: ');
console.log('call warn("abc", "def") return "WARN: abc def"',
    warn('abc', 'def') === 'WARN: abc def');

