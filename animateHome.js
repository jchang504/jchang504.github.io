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
  // via menu and in-section links
  currentSectionId = "";
  $('.menu-link, .in-section-menu-link').click(function() {
    sectionId = '#' + $(this).attr('id').replace('link', 'section');
    goToSection(sectionId);
  });
  // via menu sublinks
  $('.menu-sublink').click(function() {
    sublinkId = $(this).attr('id');
    sectionId = '#' + sublinkId.substring(0, sublinkId.indexOf('-')) + '-section';
    goToSection(sectionId);
    subsectionId = '#' + sublinkId.substring(sublinkId.indexOf('-')+1) + '-subsection';
    // wait until section slide is done before going to subsection
    $('section').promise().done(function() {
      $(window).scrollTop($(subsectionId).offset().top);
    });
  });

  // Goes to the indicated section
  var goToSection = function(sectionId) {
    if (sectionId !== currentSectionId) { 
      // In order to avoid "squishing" the circular #picwindow div, which looks
      // bad, we instead slideUp its containing div (like a shade, hence name)
      if (pictureWindowUp) {
        $('#picwindowshade').slideUp('fast');
        pictureWindowUp = false;
        $(sectionId).slideDown('fast');
        currentSectionId = sectionId;
      }
      else { // slideUp/Down combination gives nice layer effect
        $('section').slideUp('fast');
        $(sectionId).slideDown('fast');
        currentSectionId = sectionId;
      }
    }
  }
});
