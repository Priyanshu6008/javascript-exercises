const convertToFahrenheit = function(a) {
  let f=(a*9/5)+32;
  return parseFloat(f.toFixed(1));
};

const convertToCelsius = function(b) {
  let c=(b-32)*5/9;
  
  return parseFloat(c.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
