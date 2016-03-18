var gitRepo = require('./../js/github-request.js').gitRepo;

$(document).ready(function(){
  $('#getName').submit(function(event){
    event.preventDefault();
    $('#form').hide();
    $('#repo').show();
    var gitName = $('#name').val();
    gitRepo(gitName);
  });
});
