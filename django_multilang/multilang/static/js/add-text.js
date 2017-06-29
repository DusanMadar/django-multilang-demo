$(document).ready(function() {
  var $lastLink = $('a').last();
  $lastLink.after('<p>' + gettext('Translated text inserted by JS') + '</p>');
});
