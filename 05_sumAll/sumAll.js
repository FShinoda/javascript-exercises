const sumAll = function(floor, ceil) {
    if (typeof floor != "number" || typeof ceil != "number" || floor < 0 || ceil < 0) {
        return "ERROR";
    };
    
    if(ceil < floor){
        let auxExchange = ceil;
        ceil = floor;
        floor = auxExchange;
    };


    let sumTotal = 0;

    for (let i = floor; i <= ceil; i++){
        sumTotal += i;
    }

    return sumTotal;
};

// Do not edit below this line
module.exports = sumAll;
