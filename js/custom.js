$(document).ready(function () {
  if ($(window).scrollTop() > ($('#start').offset().top + 1000 - $(window).height())) {
    $('.to-top').addClass('fade-in');
    $('#nav-btn').css('bottom', '4rem');
  } else {
    $('.to-top').removeClass('fade-in');
    $('#nav-btn').css('bottom', '1rem');
  }
});

$(window).scroll(function () {
  // Show BACK TO TOP button based on element variable
  if ($(window).scrollTop() > ($('#start').offset().top + 300 - $(window).height())) {
    $('.to-top').addClass('fade-in');
    $('#nav-btn').css('bottom', '4rem');
  } else {
    $('.to-top').removeClass('fade-in');
    $('#nav-btn').css('bottom', '1rem');
  }
});
// Animate to-top button when reaching bottom of document
$(window).scroll(function () {
  if ($(window).scrollTop() + $(window).height() == $(document).height()) {
    $('#top-btn').css('bottom', "10rem");
  } else if ($(window).scrollTop() + $(window).height() != $(document).height()) {
    $('#top-btn').css('bottom', "1rem");
  }
});
/* :::::::::::::::::: SCROLL ANIMATION :::::::::::::::::: */
$(window).scroll(function () {
  $('.animate').each(function () {
    const halfScreenHeight = $(window).height() * 0.5;
    const imagePos = $(this).offset().top - halfScreenHeight;
    const imageHeight = $(this).height();
    const topOfWindow = $(window).scrollTop();
    // if element is greater than .5 of screen height - animate
    if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
      if ($(this).hasClass('hide')) {
        $(this).addClass("fade-in");
        $(this).removeClass("hide");
      }
      if ($(this).hasClass('square')) {
        $(this).addClass("rotate");
      }
    } else {
      //take away class
      return
    }
  });
  $('.animate').each(function () {
    const thirdScreenHeight = $(window).height() * 0.65;
    imagePos = $(this).offset().top - thirdScreenHeight;
    imageHeight = $(this).height();
    topOfWindow = $(window).scrollTop();
    console.log(imageHeight, imagePos, topOfWindow)
    // if element is greater than .65 of screen height - animate
    if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
      if ($(this).hasClass('highlight-dark')) {
        $(this).addClass("stroke");
      }
      if ($(this).hasClass('highlight-text')) {
        $(this).addClass("white");
      }
      if ($(this).hasClass('fff')) {
        $(this).addClass("expand");
      }
    } else {
      //take away class
      return
    }


  });
  // When page ready - Add fade in/out with scroll when screen less than 1200px - Else keep hidden
  // $(document).ready(function () {
  //   $('nav nav #hamburger ~ label ~ label').hide();
  //   if ($(window).width() < 1200) {
  //     clearTimeout($.data(this, 'scrollTimer'));
  //     $.data(this, 'scrollTimer', setTimeout(function () {
  //       $('nav nav #hamburger ~ label ~ label').fadeIn();
  //     }, 200));
  //   } else {
  //     $('nav nav #hamburger ~ label ~ label').hide();
  //   }
  //   // if orientation changes to landscape change menu position
  //   if (window.matchMedia("(orientation: landscape)").matches) {
  //     $('nav nav #hamburger ~ label ~ label').css('grid-column', '11/13');
  //   } else {
  //     $('nav nav #hamburger ~ label ~ label').css('grid-column', '10/13');
  //   }
  // });
  // When screen is resized - Add fade in/out with scroll when screen less than 1200px - Else keep hidden
  // $(window).resize(function () {
  //   $('nav nav #hamburger ~ label ~ label').hide();
  //   if ($(window).width() < 1200) {
  //     clearTimeout($.data(this, 'scrollTimer'));
  //     $.data(this, 'scrollTimer', setTimeout(function () {
  //       $('nav nav #hamburger ~ label ~ label').fadeIn();
  //     }, 600));
  //   } else {
  //     $('nav nav #hamburger ~ label ~ label').hide();
  //   }
  //   // if orientation changes to landscape change menu position
  //   if (window.matchMedia("(orientation: landscape)").matches) {
  //     $('nav nav #hamburger ~ label ~ label').css('grid-column', '11/13');
  //   } else {
  //     $('nav nav #hamburger ~ label ~ label').css('grid-column', '10/13');
  //   }
  // });




  // if (window.matchMedia("(orientation: portrait)").matches) {
  //   // you're in PORTRAIT mode
  //   console.log('PORTRAIT')
  // }

  // if (window.matchMedia("(orientation: landscape)").matches) {
  //   // you're in LANDSCAPE mode
  //   console.log('LANDSCAPE')
  // }


});
/* :::::::::::::::::: end SCROLL ANIMATION :::::::::::::::::: */



/* :::::::::::::::::: SMOOTH SCROLL :::::::::::::::::: */
// when nav link clicked
$('.scroll').on('click', function () {
  let offset = 0;
  let target = this.hash;
  //if data-offset found in anchor tag, move to determined position 
  if ($(this).data('offset') != undefined) offset = $(this).data('offset');
  $('html, body').animate({
    'scrollTop': $(target).offset().top - offset //calculate new position
  }, 1500, 'swing', function () { // length of duration (1.5 seconds) with 'swing' effect
    window.location.hash = target; // show hash target in URL for accessibility
  });
  if ($(window).width() <= 1200) { // for mobile
    $('nav .menu').css('display', 'none');
    $('nav #hamburger ~ label').prop('checked', '');
  }
});
/* :::::::::::::::::: end SMOOTH SCROLL :::::::::::::::::: */


/* :::::::::::::::::: MOBILE NAVIGATION BEHAVIOR :::::::::::::::::: */
// window size when ready
$(document).ready(function () {
  if ($(window).width() <= 1200) { // for mobile
    // when hamburger clicked close menu
    $('nav .menu i').on('click', function () {
      $('nav .menu').css('display', 'none');
      $('nav #hamburger ~ label').prop('checked', '');
    });
    // when hamburger clicked open menu
    $('nav #hamburger ~ label').on('click', function () {
      $('nav .menu').css('display', 'flex');
    });
    // when to-top button clicked move to top of document
    $('.to-top').on('click', function () {
      $('.to-top').removeClass('fade-in');
      $('#nav-btn').css('bottom', '1rem');
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
  } else { // for tablet and larger
    // when to-top button clicked move to top of document
    $('.to-top').on('click', function () {
      $('.to-top').removeClass('fade-in');
      $('#nav-btn').css('bottom', '1rem');
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
  }
});
// resized window
$(window).resize(function () {
  if ($(window).width() <= 1200) { // for mobile
    // when hamburger clicked close menu
    $('nav .menu i').on('click', function () {
      $('nav .menu').css('display', 'none');
      $('nav #hamburger ~ label').prop('checked', '');
    });
    // when hamburger clicked open menu
    $('nav #hamburger ~ label').on('click', function () {
      $('nav .menu').css('display', 'flex');
    });
    // when to-top button clicked move to top of document
    $('.to-top').on('click', function () {
      $('.to-top').removeClass('fade-in');
      $('#nav-btn').css('bottom', '1rem');
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
  } else { // for tablet and larger
    // when to-top button clicked move to top of document
    $('.to-top').on('click', function () {
      $('.to-top').removeClass('fade-in');
      $('#nav-btn').css('bottom', '1rem');
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
  }
});
/* :::::::::::::::::: end MOBILE NAVIGATION BEHAVIOR :::::::::::::::::: */









/* :::::::::::::::::: ACCORDION TABBED BEHAVIOR :::::::::::::::::: */
// by default, have first tabbed accordion item selected and showing content
$('.accordions.tabbed .accordion-item:first-child label').addClass('select');

const accInput = $('.accordions.tabbed input');
const accPanel = $('.accordions.tabbed label');
const accContent = $('.accordions.tabbed .accordion-content');

// when accordion clicked
for (let i = 0; i < accInput.length; i++) {
  accInput[i].addEventListener('click', function () {

    if ($(this).parent().parent().hasClass('tabbed')) {
      $(this).parent().parent().each(function () {
        $('label', $(this)).each(function () {
          $(this).removeClass('select');
        })
        $('.accordion-content', $(this)).each(function () {
          $(this).removeClass('show');
        })
      });
      $(this).next().addClass('select');
      $(this).next().next().addClass('show');
    }

    // hide content and unselect all accordion items
    // for (let j = 0; j < accContent.length; j++) {
    //   accContent[j].classList.remove('show');
    //   accPanel[j].classList.remove('select');
    // }
    // clicked accordion item is selected and shows it's content
    // this.nextElementSibling.classList.add('select');
    // this.nextElementSibling.nextElementSibling.classList.add('show');
  })
}

// on screen size change under 1024px - remove tabbed functionality - else add
$(document).ready(function () {
  if ($(window).width() >= 1024) {
    $('.accordions .accordion-content').addClass('hide');
  } else {
    $('.accordions .accordion-content').removeClass('hide');
    $('.accordions .accordion-content:first-child').removeClass('show');
  }
});
$(window).resize(function () {
  if ($(window).width() >= 1024) {
    $('.accordions .accordion-content').addClass('hide');
  } else {
    $('.accordions .accordion-content').removeClass('hide');
    $('.accordions .accordion-content:first-child').removeClass('show');
  }
});
/* :::::::::::::::::: end ACCORDION BEHAVIOR :::::::::::::::::: */


/* :::::::::::::::::: BROWSER DETECTION :::::::::::::::::: */
const DetectBrowser = function () {
  var isIE = false || !!document.documentMode;
  if (isIE) {
    window.location.assign("http://nataliacorrea.com/not-supported");
  } else {
    return
  }
};

DetectBrowser();
/* :::::::::::::::::: end BROWSER DETECTION :::::::::::::::::: */


