$(document).ready(function() {
  // Hides the "no JS?" message
  $('#nojs').css('display', 'none');
  pictureWindowUp = true;
  // Sliding picture window
  $('.menu-item').hover(function() {
    if (pictureWindowUp) {
      switch($(this).attr('id')) {
        case 'about-link':
          $('#picwindow').animate({backgroundPosition:'-350px'}, 100);
          break;
        case 'nav-projects':
          $('#picwindow').animate({backgroundPosition:'-700px'}, 100);
          break;
        case 'nav-more':
          $('#picwindow').animate({backgroundPosition:'-1050px'}, 100);
          break;
        case 'contact-link':
          $('#picwindow').animate({backgroundPosition:'-1400px'}, 100);
          break;
      }
    }
  });
  // Option menus for Projects and More
  $('.with-options').hover(function() {
    $(this).children('.options-list').slideDown('fast');
  }, function() {
    $(this).children('.options-list').slideUp('fast');
  });
  // Navigation for sections
  currentSectionId = "";
  $('.menu-link').click(function() {
    clickedSectionId = '#' + $(this).attr('id').replace('link', 'section');
    if (clickedSectionId !== currentSectionId) { 
      // don't slide for initial section choice; it looks weird
      if (pictureWindowUp) {
        $('#picwindow').hide();
        pictureWindowUp = false;
        $(clickedSectionId).show();
      }
      else { // after that, slideUp/Down combination gives nice layer effect
        $('section').slideUp('fast');
        $(clickedSectionId).slideDown('fast');
        currentSectionId = clickedSectionId;
      }
    }
  });
});
