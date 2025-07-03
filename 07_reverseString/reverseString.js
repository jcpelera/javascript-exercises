const reverseString = function(word) {
    let reverseArr = word.split('');
    let reverseWord = reverseArr.reverse();
    reverseWord = reverseWord.join('');
    return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
