const palindromes = function (phrase) {
const cleanedString = phrase.replace(/[^\w\s]|_/g, '').replace(/\s/g, '').toLowerCase();
const reversedString = cleanedString.split('').reverse().join('');
if (cleanedString === reversedString){
    return true;
}else{
    return false;
}
};

// Do not edit below this line
module.exports = palindromes;
