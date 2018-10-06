const errorMessage = 'Please enter a binary number (one that uses only 0 and 1)'

let checkBinary = function(number) {
  let notBinary = /[^01]/;
  if (notBinary.test(number) === true) {
    return true
  }
  else if (notBinary.test(number) === false) {
    return false
  }
}

let convertBinary = function(binaryNumber) {
  let binaryArray = Array.from(binaryNumber.toString()).map(Number);
  console.log(binaryArray);
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
      convertBinary(userBinary);
      console.log(userBinary);
    }
  });
});
