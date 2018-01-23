function duckCount(...args) {
    return args.filter(function(duck) {
        return Object.prototype.hasOwnProperty.call(duck, 'quack');
    }).length;
}

module.exports = duckCount;

let duck = {quack: true};
let empty = {};
let notDuck = Object.create({quack: true});

console.log('given 1 duck return 1: ', 1 === duckCount(duck));
console.log('given 2 duck return 2: ', 2 === duckCount(duck, duck));
console.log('given 1 duck and 1 notduck return 1: ',
     1 === duckCount(duck, notDuck));
console.log('given 1 duck and empty return 1: ', 1 === duckCount(duck, empty));
