function getShortMessages(messages) {
    return messages.filter( function(obj) {
        if (obj.message.length < 50 ) {
            return true;
        }
    }).map(function(obj) {
        return obj.message;
    });
}

module.exports = getShortMessages;

console.log("given array of single message object with message shorter than 50 chars, return message in an array: ", JSON.stringify(getShortMessages([{message: "abcd efgh"}])) === JSON.stringify(["abcd efgh"]));
console.log("given array of multiple message object with message shorter than 50 chars, return messages in an array: ", JSON.stringify(getShortMessages([{message: "abcd efgh"}, {message: "xyz"}])) === JSON.stringify(["abcd efgh", "xyz"]));

console.log("given array of multiple message object with message larger than 50 chars, return messages less than 50 chars in an array: ", JSON.stringify(getShortMessages([{message: "abcd efghxxxxxxsfgsfshjsgbfsduawgdsgdjgsjhdgshfgshfgsdefefuguydgyf sd syfaffafgyjshsfsfjvsfvchvscjhevcyevcevcyevcyefgshfg"}, {message: "xyz"}])) === JSON.stringify(["xyz"]));
