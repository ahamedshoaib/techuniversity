let userArray = process.argv.slice(2);

function destructure(array) {
    let data = {};
    [, data.username, data.email] = array;
    console.log(data); // {username: "jdoe", email: "john@doe.com"}
    return data;
}
module.exports = destructure;
destructure(userArray);


