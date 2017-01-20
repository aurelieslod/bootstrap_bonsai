



function send(){
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var message = document.getElementById('message');
  var submit = document.getElementById('submit');
  var error = document.getElementById('error');


  if((!/[\w\d]+/.test(name.value)) || (!/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(email.value)) || (!/[\w\d]+/.test(message.value))){
    error.innerHTML = 'Tous les champs ne sont pas remplis';
    if(!/[\w\d]+/.test(name.value)){
      name.style.backgroundColor = 'lightgrey';
    }else if(!/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(email.value)){
      email.style.backgroundColor = 'lightgrey';
    }else{
      message.style.backgroundColor = 'lightgrey';
    }
}else{
  error.innerHTML = 'Message envoyé';
  name.style.backgroundColor = 'white';
  email.style.backgroundColor = 'white';
  message.style.backgroundColor = 'white';

}
}

$('#question').click(function(){
  $('#answer').toggle();
});
