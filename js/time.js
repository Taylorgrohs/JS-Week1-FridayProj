exports.time = function(time) {
  var alteredTime = time.replace(/t/i, ' ');
  alteredTime = alteredTime.replace(/z/i, ' ');

  return(moment(alteredTime).fromNow());
};
