var pageC = document.querySelector("#page-container");
var fix = document.querySelector("#fixed");

pageC.addEventListener("mouseenter", function () {
  fix.style.display = "block";
});
pageC.addEventListener("mouseleave", function () {
  fix.style.display = "none";
});

var elem = document.querySelectorAll("#elem1");
elem.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var b = e.getAttribute("data-type");
    fix.style.backgroundImage = `url(${b})`;
  });
});

function cursorEffect() {
  var page1Contain = document.querySelector(".swiper-events");
  var cursor = document.querySelector("#cursor");

  page1Contain.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });
  page1Contain.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });
  page1Contain.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}
cursorEffect();

const button = document.querySelector(".button");
const menu = document.querySelector(".menu");
// const page = document.querySelector(".page1");

button.addEventListener("click", () => {
  button.classList.toggle("-menu-open");
  menu.classList.toggle("-open");
});

const swiper = new Swiper(".swiper", {
  //enable hash navigation
  hashNavigation: true,
  lazy: true,
  spaceBetween: 40,
  slidesPerView: 4,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    840: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1240: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

// using "ratio" endpoints

var loader = document.getElementById("loader");
setTimeout(function () {
  loader.style.top = "-100%";
}, 3200);
