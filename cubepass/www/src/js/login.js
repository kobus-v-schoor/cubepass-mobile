$(document).ready(function() {
  $('.warning').fadeOut(0);
});

function login(){
  var psswd = window.localStorage.getItem('user-password');

  if (psswd != $('#password').val()) {
    $('#btnLogin').removeClass("btn-positive").addClass("btn-negative").html("Decrypting...");
    $('#password').attr("disabled", "true");
    setTimeout(reset, 3000);
  }
};

function reset() {
  $('#password').val('').removeAttr('disabled');
  $('#btnLogin').removeClass("btn-negative").addClass("btn-positive").html("Login");
  $('.warning').fadeIn();
}