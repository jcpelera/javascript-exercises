const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((prev, curr) => prev + curr, 0);
};

const multiply = function(arr) {
return arr.reduce((prev, curr) => prev * curr, 1);
};

const power = function(a, b) {
	let result = 1;
  if (b === 0){
    return 1;
  }
  for(let i = 0; i < b; i++){
    result *= a;
  }
  return result;
};

const factorial = function(a) {
  if(a === 0){
    return 1
  }
  return a * factorial(a-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
