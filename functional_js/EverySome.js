function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        function isGoodUser(user) {
            function isPresentInGoodUsers(u) {
                if (u.id === user.id) {
                    return true;
                }
                return false;
            }

            if (goodUsers.some(isPresentInGoodUsers)) {
                return true;
            }

            return false;
        }

        return submittedUsers.every(isGoodUser);
    };
}


var goodUsers = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ]

  // `checkUsersValid` is the function you'll define
  var testAllValid = checkUsersValid(goodUsers)

  var a = testAllValid([
    { id: 2 },
    { id: 1 }
  ])
  // => true

  var b = testAllValid([
    { id: 2 },
    { id: 4 },
    { id: 1 }
  ])
  // => false

console.log(a,b)

module.exports = checkUsersValid;

//console.log("given valid users return true", checkUsersValid([{id:1},{id:2},{id:3}])([{id: 1},{id: 2}]));