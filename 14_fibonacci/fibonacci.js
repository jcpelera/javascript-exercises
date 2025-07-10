const fibonacci = function(num) {
    let sequence;
    if (num < 0){
        return 'OOPS';
    } else if (typeof num !== 'number'){
        sequence = parseInt(num);
    }
    if (num === 0 || sequence === 0){
        return 0;
    }
    let prev = 0;
    let curr = 1;
    let ahead;

    for (let i = 0; i < num - 1; i++){
        ahead = prev + curr;
        prev = curr;
        curr = ahead;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
