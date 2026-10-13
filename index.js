
const datejs = require('datejs');

function combineUsers(...args) {
    // Step 2: Initialize the return object
    const combinedObject = {
        users: []
    };

    //  3 and 4 Loop through args and merge the arrays
    for (const userArray of args) {
        combinedObject.users = [
            ...combinedObject.users,
            ...userArray
        ];
    }
//  5 get today's date
    combinedObject.merge_date = Date.today().toString('M/d/yyyy');

// 6 return the object
  return combinedObject}




module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};