const reverseString = function(stringToBeReversed) {
    let reversedString = '';

    for (let i = 0; i < stringToBeReversed.length; i++){
        reversedString += stringToBeReversed[(stringToBeReversed.length-1)-i];
    };

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
