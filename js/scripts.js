const errorMessage = 'Please enter a binary number (one that uses only 0 and 1)'

//Function to Check if a number is binary.
let checkBinary = function(number) {
  let notBinary = /[^01]/;
  if (notBinary.test(number) === true) {
    return true
  }
  else if (notBinary.test(number) === false) {
    return false
  }
}

//Function to check if a number is ternary.
let checkTernary = function(number) {
  let notBinary = /[^012]/;
  if (notTernary.test(number) === true) {
    return true
  }
  else if (notTernary.test(number) === false) {
    return false
  }
}

//Function to convert Ternary Number to decimal number.
let convertBinary = function(binaryNumber) {
  let binaryArray = Array.from(binaryNumber.toString()).map(Number);
  let arrayToAdd = []
  let lengthPower = (binaryArray.length - 1)
  for (let currentPower = lengthPower, currentIndex = 0; currentPower >= 0; currentPower -= 1, currentIndex +=1) {
    let currentNumber = binaryArray[currentIndex] * Math.pow(2, currentPower);
    (arrayToAdd).push(currentNumber);
  }
  let converted = arrayToAdd.reduce(function(sum, number) {
    return sum + number;
  }, 0)
  return converted;
}

//Function to convert Ternary number into a decimal number
let convertTernary = function(ternaryNumber) {
  let ternaryArray = Array.from(ternaryNumber.toString()).map(Number);
  let arrayToAdd = []
  let lengthPower = (ternaryArray.length - 1)
  for (let currentPower = lengthPower, currentIndex = 0; currentPower >= 0; currentPower -= 1, currentIndex +=1) {
    let currentNumber = ternaryArray[currentIndex] * Math.pow(3, currentPower);
    (arrayToAdd).push(currentNumber);
  }
  let converted = arrayToAdd.reduce(function(sum, number) {
    return sum + number;
  }, 0)
  return converted;
}

//User logic
$(document).ready(function() {
  $('#binary_form').submit(function(event) {
    event.preventDefault();
    let userBinary = parseInt($('#user_input').val());
    if (checkBinary(userBinary) === true) {
      $('.error_message').text(errorMessage);
    } else {
      $('.error_message').empty();
      let converted = convertBinary(userBinary);
      $('.converter_output').text('The binary number ' + userBinary + ' is equal to ' + converted + ' as a decimal number.' )
    }
  });
});
