$("#contact").submit(function(e){
  e.preventDefault();
  var name = $("#name").val();
  var email = $("#email").val();
  var text = $("#text").val();
  var dataString = 'name=' + name + '&email=' + email + '&text=' + text;
  function isValidEmail(emailAddress) {
    var pattern = new RegExp(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i);
    return pattern.test(emailAddress);
  };
 
  if (isValidEmail(email) && (text.length > 25) && (name.length > 1)){
    $.ajax({
    type: "POST",
    url: "mailer.php",
    data: dataString,
    success: function(){
      $('.success').fadeIn(1000);
      $('.ghost-btn').attr('disabled', true);
    }
    });
  } else{
    $('.error').fadeIn(1000);
  }
 
  return false;
});