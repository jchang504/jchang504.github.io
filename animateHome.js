$(document).ready(function() {
  // Hides the "no JS?" message
  $('#nojs').css('display', 'none');
  pictureWindowUp = true;
  // Sliding picture window
  $('.menu-item').hover(function() {
    if (pictureWindowUp) {
      switch($(this).attr('id')) {
        case 'about-link':
          $('#picwindow').stop(true).animate({backgroundPosition:'-350px'}, 100);
          break;
        case 'nav-projects':
          $('#picwindow').stop(true).animate({backgroundPosition:'-700px'}, 100);
          break;
        case 'nav-more':
          $('#picwindow').stop(true).animate({backgroundPosition:'-1050px'}, 100);
          break;
        case 'contact-link':
          $('#picwindow').stop(true).animate({backgroundPosition:'-1400px'}, 100);
          break;
      }
    }
  });
  // Option menus for Projects and More
  $('.with-options').hover(function() {
    $(this).children('.options-list').stop().slideDown('fast');
  }, function() {
    $(this).children('.options-list').stop().slideUp('fast');
  });
  // Navigation for sections
  currentSectionId = "";
  $('.menu-link, .in-section-menu-link').click(function() {
    clickedSectionId = '#' + $(this).attr('id').replace('link', 'section');
    if (clickedSectionId !== currentSectionId) { 
      // In order to avoid "squishing" the circular #picwindow div, which looks
      // bad, we instead slideUp its containing div (like a shade, hence name)
      if (pictureWindowUp) {
        $('#picwindowshade').slideUp('fast');
        pictureWindowUp = false;
        $(clickedSectionId).slideDown('fast');
        currentSectionId = clickedSectionId;
      }
      else { // slideUp/Down combination gives nice layer effect
        $('section').slideUp('fast');
        $(clickedSectionId).slideDown('fast');
        currentSectionId = clickedSectionId;
      }
    }
  });
});
