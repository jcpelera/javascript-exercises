const convertToCelsius = function(temp) {
  let celcius = (temp - 32) * (5/9);
  if (celcius === 0){
    return 0;
  }
  return parseFloat(celcius.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let fahren = (temp *(9/5)) + 32;
  if(fahren === 0){
    return 0;
  }
  return parseFloat(fahren.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
