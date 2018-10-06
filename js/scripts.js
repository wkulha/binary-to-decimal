let notBinary = /[^01]/;

let checkBinary = function(number) {
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
    console.log(checkBinary(userBinary));
  });
});
