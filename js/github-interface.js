var apiKey = require('./../.env').apiKey;
var time = require('./../js/time.js').time;
$(document).ready(function(){
  $('#getName').submit(function(event){
    event.preventDefault();
    $('#form').hide();
    $('#repo').show();
    event.preventDefault();
    var gitName = $('#name').val();
    var displayName = gitName.toUpperCase();
    $.get('https://api.github.com/users/' + gitName + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('#picture').append('<img src='+ response[0].owner.avatar_url+'>');
    $('.githubName').append("<h2>" + displayName + "</h2>");
    $.get('https://api.github.com/users/' + gitName + '/followers?access_token=' + apiKey).then(function(follower){
      console.log(follower);
      $.get('https://api.github.com/users/' + gitName + '/following?access_token=' + apiKey).then(function(following){
        console.log(following);
      $('.githubName').append("<p>Followers: " + follower.length + " || Following: " + following.length + "</p>");
      });
    });
    for(var i = 0; i < response.length; i++)
    {
      $('.repo').prepend('<ul><li> Created: ' + time(response[i].created_at) + '</li></ul>');
      $('.repo').prepend('<ul><li> Description: ' + response[i].description + '</li></ul>');
      $('.repo').prepend('<li><a href="https://github.com/' + gitName + '/'+response[i].name + '">' + response[i].full_name + '</a></li>');
    }
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  });
});
