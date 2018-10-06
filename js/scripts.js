const binaryErrorMessage = 'Please enter a binary number (one that uses only 0 and 1)'
const ternaryErrorMessage = 'Please enter a ternary number (one that uses only 0, 1, and 2)'
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
  let notTernary = /[^012]/;
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
  $('#number_form').submit(function(event) {
    event.preventDefault();
    let userInput = parseInt($('#user_input').val());
    let typeOfNumber = $("input:radio[name=typeradio]:checked").val();
    if (typeOfNumber === 'binary') {
      if (checkBinary(userInput) === true) {
        $('.error_message').text(binaryErrorMessage);
      } else {
        $('.error_message').empty();
        let converted = convertBinary(userInput);
        $('.converter_output').text('The binary number ' + userInput + ' is equal to ' + converted + ' as a decimal number.' )
      }
    } else if (typeOfNumber === 'ternary') {
      if(checkTernary(userInput) === true) {
        $('.error_message').text(ternaryErrorMessage);
      } else {
        $('.error_message').empty();
        let converted = convertTernary(userInput);
        $('.converter_output').text('The ternary number ' + userInput + ' is equal to ' + converted + ' as a decimal number.' )
      }
    }
  });
});
