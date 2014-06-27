$(document).ready(function() {
  // Hides the "no JS?" message
  $('#nojs').css('display', 'none');
  // Sliding picture window
  $('.menu-item').hover(function() {
    switch($(this).attr('id')) {
      case 'about':
        $('#picwindow').animate({backgroundPosition:'-350px'}, 100);
        break;
      case 'projects':
        $('#picwindow').animate({backgroundPosition:'-700px'}, 100);
        break;
      case 'more':
        $('#picwindow').animate({backgroundPosition:'-1050px'}, 100);
        break;
      case 'contact':
        $('#picwindow').animate({backgroundPosition:'-1400px'}, 100);
        break;
    }
  });
  // Option menus for Projects and More
  $('.with-options').hover(function() {
    $(this).children('.options-list').slideDown('fast');
  }, function() {
    $(this).children('.options-list').slideUp('fast');
  });
});
