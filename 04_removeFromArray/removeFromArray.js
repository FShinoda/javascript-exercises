const removeFromArray = function(arrayToBeModified, ...args) {
    // Doing without any built-in methods
    for(let i = 0; i < arrayToBeModified.length; i++){
        for(let j = 0; j < args.length; j++){
            if (arrayToBeModified[i] === args[j]){
                delete arrayToBeModified[i];
            }
        }
    }

    return filterArrayGaps(arrayToBeModified);
};

function filterArrayGaps(arrayToBeModified){
    let filteredArray = [];

    for (let i = 0; i < arrayToBeModified.length; i++){
        if (arrayToBeModified[i] !== undefined){
            filteredArray.push(arrayToBeModified[i]);
        }
    }

    return filteredArray;
}

removeFromArray([1, 2, 3, 4], 3)

// Do not edit below this line
module.exports = removeFromArray;
