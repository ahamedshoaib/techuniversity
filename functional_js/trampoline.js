// function repeat(operation, num) {
//     // Modify this so it doesn't cause a stack overflow!
//     if (num <= 0) return;
//     operation();
//     return function() {
//         repeat(operation, --num);
//     };
//   }


function fact(n) {
    if (n === 1) return 1;
    return function() {
        n * fact(n-1);
    };
}

function trampoline(fn) {
    // You probably want to implement a trampoline!
    while (typeof(fn) === 'function') {
        console.log("in while");
        fn = fn();
    }
    return fn;
  }

let a = trampoline(function() { 
    return fact(4); 
});

console.log(a);

// module.exports = function(operation, num) {
//     // You probably want to call your trampoline here!
//     return trampoline(repeat(operation, num));
// };


