const repeatString = function(stringToBeRepeated, timesToBeRepeated) {
    let stringRepeatedFinal = '';

    while(timesToBeRepeated > 0){
        stringRepeatedFinal += stringToBeRepeated;
        --timesToBeRepeated;
    };

    if(timesToBeRepeated < 0){
        return "ERROR";
    }

    return stringRepeatedFinal;

};

// Do not edit below this line
module.exports = repeatString;
