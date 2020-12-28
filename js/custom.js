$(document).ready(function () {
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
});

$(document).ready(function () {
  if ($(window).scrollTop() > ($('#about').offset().top + 1000 - $(window).height())) {
    $('.to-top').addClass('fade-in');
    $('#nav-btn').css('bottom', '4rem');
  } else {
    $('.to-top').removeClass('fade-in');
    $('#nav-btn').css('bottom', '1rem');
  }
});

$(window).scroll(function () {
  // Show BACK TO TOP button based on element variable
  if ($(window).scrollTop() > ($('#about').offset().top + 300 - $(window).height())) {
    $('.to-top').addClass('fade-in');
    $('#nav-btn').css('bottom', '4rem');
  } else {
    $('.to-top').removeClass('fade-in');
    $('#nav-btn').css('bottom', '1rem');
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

  // $(window).scroll(function () {
  //   if ($(window).scrollTop() + $(window).height() == $(document).height()) {
  //    DO SOMETHING WHEN BOTTOM IS REACHED
  //   }
  // });
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
});
/* :::::::::::::::::: end SMOOTH SCROLL :::::::::::::::::: */


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


/* :::::::::::::::::: TESTIMONIALS - READ MORE :::::::::::::::::: */
// window size when ready
$(document).ready(function () {
  if ($(window).width() >= 768) { // for tablet and larger
    $('a.prev').css('left', '23rem');
    $('a.next').css('right', '23rem');

    $('.testimonial-item .read-more').on('click', function () {
      $(this).parents('.front').hide(); // hide partial quote
      $(this).parents('.front').next().css('display', 'block');
      // show().delay(800).fadeIn(400); // show full quote
    });
    $('.testimonial-item .read-less').on('click', function () {
      $(this).parents('.back').hide(); // hide partial quote
      $(this).parents('.back').prev().css('display', 'block');
      // $(this).parent().prev().find('.quotes').fadeIn();
      // $(this).next().next().hide();
    });    
  } else { // for mobile
    $('a.prev').css('left', '-1rem');
    $('a.next').css('right', '-1rem');
    $('.testimonial-item .read-more').on('click', function () {
      $(this).parents('.front').hide(); // hide partial quote
      $(this).parents('.front').next().css('display', 'block');
        // show().delay(800).fadeIn(400); // show full quote
      $('a.prev').css('left', '-4rem');
      $('a.next').css('right', '-4rem');
    });
    $('.testimonial-item .read-less').on('click', function () {
      console.log($(this));
      $(this).parents('.back').hide(); // hide partial quote
      $(this).parents('.back').prev().css('display', 'block');
      // $(this).parent().prev().find('.quotes').fadeIn();
      // $(this).next().next().hide();
      $('a.prev').css('left', '-1rem');
      $('a.next').css('right', '-1rem');
    });    
  }
});
// resized window
$(window).resize(function () {
  if ($(window).width() >= 768) { // for tablet and larger
    $('a.prev').css('left', '23rem');
    $('a.next').css('right', '23rem');

    $('.testimonial-item .read-more').on('click', function () {
      $(this).parents('.front').hide(); // hide partial quote
      $(this).parents('.front').next().css('display', 'block');
      // show().delay(800).fadeIn(400); // show full quote
      $('a.prev').css('left', '23rem');
      $('a.next').css('right', '23rem');

    });
    $('.testimonial-item .read-less').on('click', function () {
      console.log($(this));
      $(this).parents('.back').hide(); // hide partial quote
      $(this).parents('.back').prev().css('display', 'block');
      // $(this).parent().prev().find('.quotes').fadeIn();
      // $(this).next().next().hide();
      $('a.prev').css('left', '23rem');
      $('a.next').css('right', '23rem');

    });    
  } else { // for mobile
    $('a.prev').css('left', '-1rem');
    $('a.next').css('right', '-1rem');

    $('.testimonial-item .read-more').on('click', function () {
      $(this).parents('.front').hide(); // hide partial quote
      $(this).parents('.front').next().css('display', 'block');
      // show().delay(800).fadeIn(400); // show full quote
      $('a.prev').css('left', '-4rem');
      $('a.next').css('right', '-4rem');
    });
    $('.testimonial-item .read-less').on('click', function () {
      console.log($(this));
      $(this).parents('.back').hide(); // hide partial quote
      $(this).parents('.back').prev().css('display', 'block');
      // $(this).parent().prev().find('.quotes').fadeIn();
      // $(this).next().next().hide();
      $('a.prev').css('left', '-1rem');
      $('a.next').css('right', '-1rem');
    });    
  }
});
/* :::::::::::::::::: end TESTIMONIALS - READ MORE :::::::::::::::::: */


/* :::::::::::::::::: CAROUSEL - FOR TESTIMONIALS :::::::::::::::::: */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}
/* :::::::::::::::::: end CAROUSEL - FOR TESTIMONIALS :::::::::::::::::: */

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

/* :::::::::::::::::: INSTAFEED - DYNAMIC DISPLAY OF INSTAGRAM FEED :::::::::::::::::: */
var feed = new Instafeed({
  get: 'user',
  userId: '212506693815055',
  resolution: 'standard_resolution',
  limit: 12,
  target: 'instafeed',
  accessToken: 'IGQVJXVElBS21mcE9vZAHJxcFNmSHZA6ejZAiNzNON2FoV2o1RV9vWWxoZADJNa1psZA2NnQTZAVVWtDOS1WNm9EVDhsd2NLeVBJaDc0N1Ixc1RCR3VuUmttQ0VZAbG53TWV1blpGN0NYM3hYUC1yR0pGY2Y3egZDZD'
});
feed.run();
/* :::::::::::::::::: end INSTAFEED - DYNAMIC DISPLAY OF INSTAGRAM FEED :::::::::::::::::: */


/* :::::::::::::::::: FACEBOOK ADD/SHARE :::::::::::::::::: */
  window.fbAsyncInit = function () {
    FB.init({
      appId: '1051014145379075',
      xfbml: true,
      version: 'v9.0'
    });
      FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
/* :::::::::::::::::: end FACEBOOK ADD/SHARE :::::::::::::::::: */












let faqQuestion = document.querySelectorAll('.faq-question');
let faqAnswer = document.querySelectorAll('.faq-answer');

for (let i = 0; i < faqQuestion.length; i++) {
  faqQuestion[i].firstElementChild.addEventListener('click', function () {
    event.preventDefault();
    // console.log(this.nextElementSibling.classList)
    // console.log(faqQuestion[i].firstElementChild)
    // faqQuestion[i].lastElementChild.classList.add('up');
    // faqQuestion[i].lastElementChild.classList.remove('right');

    for (let x = 0; x < faqQuestion.length; x++) {
      console.log(faqQuestion[x].lastElementChild)
    }
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++')



    // faqQuestion[i].lastElementChild.classList.toggle('right');
    // this.nextElementSibling.classList.toggle('right');

    // this.nextElementSibling.classList.add('right');
    // if (this.nextElementSibling.classList.contains('right')) {
    //   this.nextElementSibling.classList.remove('right');
    // } else {
    //   this.nextElementSibling.classList.add('right');
    // }
    // this.nextElementSibling.classList.add('right');
    for (let y = 0; y < faqQuestion.length; y++) {
      console.log(faqQuestion[y].lastElementChild)
    }
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++')

    for (let j = 0; j < faqQuestion.length; j++) {
      faqQuestion[j].lastElementChild.classList.remove('right');
    }

    this.nextElementSibling.classList.add('right');

    for (let k = 0; k < faqAnswer.length; k++) {

      if (!this.parentElement.nextElementSibling.classList.contains('show')) {
        faqAnswer[k].classList.remove('show');
        faqAnswer[k].classList.add('hide');
      }

      !this.parentElement.nextElementSibling.classList.contains('show') ?
        this.nextElementSibling.classList.add('right') :
        this.nextElementSibling.classList.remove('right')

    }

    this.parentElement.nextElementSibling.classList.toggle('show');
    !this.parentElement.nextElementSibling.classList.contains('show') ? this.parentElement.nextElementSibling.classList.add('hide') : this.parentElement.nextElementSibling.classList.remove('hide')

  }); 
}
/* :::::::::::::::::: end FAQs :::::::::::::::::: */






/* :::::::::::::::::: TESTIMONIALS - READ MORE :::::::::::::::::: */
const summary = document.querySelectorAll('.summary');
const readMore = document.querySelectorAll('.read-more');
const readMoreBtn = document.querySelectorAll('.read-more span');

for (let i = 0; i < summary.length; i++) {
  // summary[i].lastElementChild;
  console.log(summary[i].lastChild);
  let summaryText = summary[i].lastChild;
  let ellipses = summaryText.nodeValue.split(' ').pop();
  ellipses += "...";
  console.log(ellipses);
}

for (let i = 0; i < readMoreBtn.length; i++) {
  readMore[i].addEventListener('click', function () {
    console.log(this.firstElementChild);
    console.log(this.previousElementSibling);
    
    if (this.previousElementSibling.style.height === 'initial') {
      this.previousElementSibling.style.height = '120px';
      this.firstElementChild.classList.remove('up');
    } else {
      this.previousElementSibling.style.height = 'initial';
      this.firstElementChild.classList.add('up');
    }
    
    // if (this.firstElementChild.style.transform = 'rotate(45deg') {
    //   this.previousElementSibling.style.height = 'initial';
      
    //     this.firstElementChild.style.transform = 'rotate(-135deg)'
    //     this.style.marginTop = "1rem";
    //     this.style.marginBottom = "0";
    // } else {
    //   this.previousElementSibling.style.height = '125px';

    //   this.firstElementChild.style.transform = 'rotate(45deg)'
    //   this.style.marginTop = "0";
    //   this.style.marginBottom = "1rem";
    //   this.previousElementSibling.style.height = 'initial';

    // }
    // this.firstElementChild.style.transform = 'rotate(45deg)' ?
    //   this.firstElementChild.style.transform = 'rotate(-135deg)' :
    //   this.firstElementChild.stye.transform = 'rotate(45deg)';

    // this.style.marginTop = "1rem";
    // this.style.marginBottom = "0";
    // this.firstElementChild.classList.toggle('up');
  });
}
/* :::::::::::::::::: end FAQS :::::::::::::::::: */
