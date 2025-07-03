const repeatString = function(word, num) {
    if(num < 0){
        return "ERROR";
    }
    let newStr = ""
    for(let i = 0; i < num; i++){
        newStr += word;
    }
    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
