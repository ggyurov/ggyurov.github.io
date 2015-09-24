$("#contact").submit(function(e){
  e.preventDefault();
  var name = $("#name").val();
  var email = $("#email").val();
  var text = $("#text").val();
  var dataString = 'name=' + name + '&email=' + email + '&text=' + text;
  function isValidEmail(emailAddress) {
    var pattern = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm);
    return pattern.test(emailAddress);
  };
 
  if (isValidEmail(email) && (text.length > 50) && (name.length > 1)){
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