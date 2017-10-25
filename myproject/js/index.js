$(document).ready(function(){
  $('.login-button').click(function(){
    $('.modal-login').css('display', 'block');
  });

  $('.modal-close').click(function(){
    $('.modal-login').css('display', 'none');
  });
});
