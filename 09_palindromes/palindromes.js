function removePunctuationWordBreaks(word){
    // Ponctuations
    const ponctuations = ['.', ',', ';', '!', '?'];
    ponctuations.forEach(p => {
        word = word.replaceAll(p, ''); 
    });

    // Blank Spaces
    word = word.replaceAll(' ', '');

    return word;
};

function reverseString(word) {
    const reversed = word.split('').reverse().join('');
    return reversed;
}

const palindromes = function(word) {
    word = word.toLowerCase();
    word = removePunctuationWordBreaks(word);

    return word == reverseString(word) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
