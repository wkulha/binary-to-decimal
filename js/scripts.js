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

//User logic
$(document).ready(function() {
  $('#binary_form').submit(function(event) {
    event.preventDefault();
    let userBinary = parseInt($('#user_input').val());
    if (checkBinary(userBinary) === true) {
      $('.error_message').text(errorMessage);
    } else {
      console.log(userBinary);
    }
  });
});
