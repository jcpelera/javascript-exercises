const sumAll = function(int1, int2) {
    if(int1 < 0 || int2 < 0 || !Number.isInteger(int1)|| !Number.isInteger(int2)){
        return "ERROR";
    }
    let sum = 0;
    if(int1 < int2){
        for(let i = int1; i <= int2; i++){
            sum += i;
        }
        } else {
            for(let i = int2; i <= int1; i++){
            sum += i;
        }
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
