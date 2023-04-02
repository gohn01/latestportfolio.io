// side menu
function openNav(){
    document.getElementById("side-menu").style.width = "100%";
    document.getElementById("content-area").style.marginLeft = "100%";
    document.querySelector(".about").style.display="none";
    document.querySelector(".closebtn").style.display="block";
    document.querySelector(".closebtn").style.transform="rotate(-90deg)";
    document.querySelector(".closebtn").style.zIndex="100";
}
function closeNav(){
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("content-area").style.marginLeft = "0";
    document.querySelector(".about").style.display="block";
    document.querySelector(".closebtn").style.display="none";
}

// scrollreveal
    ScrollReveal({
        reset: true,
        distance:'60px',
        duration: 2500,
        delay: 400
    });

    ScrollReveal().reveal('.about, .closebtn', { delay: 4000, origin: 'left'});
    ScrollReveal().reveal('.alexis', { delay: 2000, origin: 'top' });
    ScrollReveal().reveal('.developer', { delay: 3000, origin: 'bottom' });
    // ScrollReveal().reveal('.about-menu', { delay: 500, origin: 'right' });
    // ScrollReveal().reveal('.aboutMe', { delay: 1500, origin: 'top' });
    // ScrollReveal().reveal('.coding', { delay: 1500, origin: 'top' });


// preloader

const tll = gsap.timeline({
    paused: "true"
});
tll.to("#percent, #bar",{
    duration:.2,
    opacity: 0,
    zIndex: -1
});
tll.to("#preloader",{
    duration: .8,
    width: "0%"
});

let width = 1;
let bar = document.getElementById("barconfrm");
let id;
function move(){
    id = setInterval(frame,10);

}
function frame(){
    if(width>=100){
        clearInterval(id);
        tll.play();
    }
    else{
        width++;
        bar.style.width = width + "%";
        document.getElementById("percent").innerHTML = width + "%";
    }
}


// coding skills
// const tlls = gsap.timeline({
//   paused: "true"
// });
// tlls.to("#skills-percent",{
//   duration:.6,
//   opacity: 0,
//   zIndex: -1
// });
// tlls.to("#skills",{
//   duration: .8,
//   width: "0%"
// });

// let widths = 1;
// let html = document.getElementById("html-bar");
// let ids;
// function move(){
//   ids = setInterval(frame,10);

// }
// function frame(){
//   if(width>=70){
//       clearInterval(ids);
//       tll.play();
//   }
//   else{
//       width++;
//       html.style.widths = widths + "%";
//       document.getElementById("skills-percent").innerHTML = width + "%";
//   }
// }



const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
  