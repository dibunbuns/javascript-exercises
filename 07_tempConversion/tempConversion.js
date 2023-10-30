const convertToCelsius = function (temp) {
  let celsius = (temp - 32) * (5 / 9);
  let fixed = celsius.toFixed(1);
  let roundedCelsius = parseFloat(fixed);
  return roundedCelsius;
};
const convertToFahrenheit = function (temp) {
  let fahrenheit = temp * (9 / 5) + 32;
  let fixed = fahrenheit.toFixed(1);
  let roundedFahrenheit = parseFloat(fixed);
  return roundedFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
