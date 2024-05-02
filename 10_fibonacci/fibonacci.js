const fibonacci = function(position) {
    if(position < 0){
        return "OOPS";
    }
    position = +position; // if string, now its a number

    let initialFibo = [0, 1];

    if(position === 0 || position === 1){
        return initialFibo[position];
    }

    const fiboSequence = buildFibo(initialFibo, position);

    return fiboSequence[position];
};

/* 
> This is a function I tried to build with .reduce array function, I was trying to explore it, see if it could work like that.
> It works. But it makes an extra fibonacci calculation, I did not pretty much understand why. By logic, it seems like its something to do with .reduce(). 
> Since, after thinking a bit, it appears to not make sense using reduce to do this, I created another function.

function buildFibo(initialFibo, position){
    return Array.from({ length: position}).reduce((initialFibo) => {
        let currentIndex = initialFibo.length;

        const nextFibo = initialFibo[currentIndex - 2] + initialFibo[currentIndex - 1];
        console.log('initial fibo:', initialFibo);
        console.log('current index', currentIndex);
        console.log('next fibo:', nextFibo);

        return [...initialFibo, nextFibo]
    }
    , initialFibo);
}
*/

function buildFibo(initialFibo, position) {
    fiboArray = initialFibo;

    for (let i = 2; i <= position; i++) {
        const nextFibo = fiboArray[i - 2] + fiboArray[i - 1];
        fiboArray.push(nextFibo);
    }

    return fiboArray;
}

// Do not edit below this line
module.exports = fibonacci;
