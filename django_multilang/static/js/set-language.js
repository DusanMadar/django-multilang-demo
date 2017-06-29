$(document).ready(function() {
  $('#lang-selector a').click(function(e) {
    e.preventDefault();

    var $form = $('#lang-selector form');
    var nextLang = $(this).attr('data-code');
    $('input[name="language"]', $form).val(nextLang);
    $form.submit();
  });
});
