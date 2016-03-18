var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $('#getName').submit(function(event){
    event.preventDefault();
    var name = $('#name').val();
    $.get('https://api.github.com/users/' + name + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('.repo').append('<li><img src='+ response[0].owner.avatar_url+'></li>');
    for(var i = 0; i < response.length; i++)
    {
      $('.repo').append('<li><a href="https://github.com/'+name+'/'+response[i].name +'">'+response[i].full_name+ '</a></li>');
    }
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  });
});
