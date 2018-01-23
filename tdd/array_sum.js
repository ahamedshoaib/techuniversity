function validate(num) {
    if (typeof(num) === 'number' && isFinite(num)) {
        return true;
    }
    console.log("element not valid: " , num)
    return false;
}

function sum(a, b) {
    if (validate(a) && validate(b)) {
        return a + b;
    }
    return null;
}

function addArray(A, B) {
    if (!Array.isArray(A) || !Array.isArray(B)) {
        console.log("not an array")
        return null;
    }

    if (A.length != B.length) {
        console.log("unequal length")
        return null;
    }
    var C = [];
    var length = A.length;
    for(var i = 0; i < length; ++i) {
        let s;
        if (s = sum(A[i],B[i])) {
            C.push(s);
        }
        else {
            return null
        }
    }
    return C;
}

console.log("Testing validate: should return true for number: ", validate(1) === true);
console.log("Testing validate: should return false for Nan: ", validate(NaN) === false);
console.log("Testing validate: should return false for Infinity: ", validate(Infinity) === false);
console.log("Testing validate: should return false for string: ", validate("a") === false);

console.log("Testing sum: should return sum for +ve numbers: ", sum(1, 2) === 3);
console.log("Testing sum: should return sum for -ve numbers: ", sum(-1, 2) === 1);
console.log("Testing sum: should return null for invalid entry: ", sum(1, Infinity) === null);

console.log("Testing addArray: add arrays of equal length with valid elements: ", JSON.stringify([2, 4, 6]) === JSON.stringify(addArray([1, 2, 3], [1, 2, 3])));
console.log("Testing addArray: should fail for unequal lengths: ", null === addArray([1, 2, 3], [1, 2, 3 , 4]));
console.log("Testing addArray: should fail for invalid input: ", null === addArray([1, 2, NaN], [1, 2, 3]));
console.log("Testing addArray: sum of empty arrays should be empty: ", JSON.stringify([]) === JSON.stringify(addArray([], [])));
console.log("Testing addArray: sum of not arrays should fail: ", null === addArray([1, 2, 3], "assad"));
