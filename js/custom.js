// let navLinks = document.querySelectorAll(".navbar-light .navbar-nav .nav-link");
// for (let i = 0; i < navLinks.length; i++) {
//   navLinks[i].style.color = "#DDD3C0";
// }


// window.onscroll = function () { scrollDown() };

// function scrollDown() {
//   if (document.body.scrollTop > 515 || document.documentElement.scrollTop > 515) {
//     document.querySelector(".navbar").style.backgroundColor = "#8A9D91";
//     // document.querySelector(".navbar").style.backgroundImage = "linear-gradient(to bottom right, #a8beb0 , #8A9D91)";
//     document.querySelector(".navbar").style.boxShadow = "box-shadow: 0 5px 25px 5px rgb(70, 70, 70)";
//     document.querySelector(".navbar").style.transition = "transition: all 1s ease-in";
//     for (let i = 0; i < navLinks.length; i++) {
//       navLinks[i].style.color = "initial";
//     }

//   } else {
//     document.querySelector(".navbar").style.backgroundColor = "rgba(0, 0, 0, .35)";
//     document.querySelector(".navbar").style.backgroundImage = "none";
//     document.querySelector(".navbar").style.boxShadow = "none";
//     document.querySelector(".navbar").style.transition = "transition: all 1s ease-in";
//     for (let i = 0; i < navLinks.length; i++) {
//       navLinks[i].style.color = "#DDD3C0";
//     }

//   }
// }




// function scrollUp() {
//   if ((document.body.scrollTop < 700 || document.documentElement.scrollTop < 700) &&
//     (document.body.scrollTop > 680 || document.documentElement.scrollTop > 680))  {
//     document.querySelector(".navbar").style.transition = "transition: all 1s ease-in";
//   }
// }


/* :::::::::::::::::: FAQs :::::::::::::::::: */
// $('.faq-question a').click(function (event) {
// });


let accInput = document.querySelectorAll('.accordions2 input');
let accPanel = document.querySelectorAll('.accordions2 label');
let accContent = document.querySelectorAll('.accordions2 .accordion-content');
// loop through all accordion labels
for (let i = 0; i < accPanel.length; i++) {
  // when an accordion label is clicked do following
  accPanel[i].addEventListener('click', function () {
    console.clear();
    console.log(accPanel[i].previousElementSibling.checked)

    // loop through all accordion content
    for (let j = 0; j < accContent.length; j++) {
      // remove all accordion content as a RESET
      // accContent[j].previousElementSibling.previousElementSibling.checked = 'false';
      // console.log(accContent[j].previousElementSibling.previousElementSibling.checked)
      accContent[j].classList.remove('show');

      // if this is already showing when clicked
      if (this.previousElementSibling.checked) {
        // hide this accordion's content
        this.nextElementSibling.classList.add('show');
        // console.log(this.previousElementSibling.checked, 'is checked')
      }
      
      if (accContent[j].classList.contains('show')) {
        accContent[j].classList.add('arrow');
      }


      
      // else {
        // this.nextElementSibling.classList.remove('show');
        // accContent[j].classList.add('hide');

      // }


    }





  })
}



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
