const makeImportant = require('./defargs2.js');

test('given hw return hw!!', () => {
    expect(makeImportant('hw')).toBe('hw!!');
});

test('given hw, 4 return hw!!!!', () => {
    expect(makeImportant('hw', 4)).toBe('hw!!!!');
});

test('given hello return hello!!!!!', () => {
    expect(makeImportant('hello')).toBe('hello!!!!!');
});

test('given hello, 0 return hello', () => {
    expect(makeImportant('hello', 0)).toBe('hello');
});
