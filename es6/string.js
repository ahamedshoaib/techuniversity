let person = process.argv[2];

function print(person) {
    console.log(`Hello, ${person}!
Your name lowercased is "${person.toLowerCase()}".`);
}

module.exports = print;

print(person);
