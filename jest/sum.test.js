const sum = require('./sum');

test('add 2 positive numbers: given 3 and 4 return 7', function() {
    expect(sum(3,4)).toBe(7);
});

test('add 2 negetive numbers: given -3 and -4 return -7', function() {
    expect(sum(-3,-4)).toBe(-7);
});




