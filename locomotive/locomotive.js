function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed",
  });
}
init();
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".images img",
    scroller: ".main",
    marker: true,
    start: "top 20%",
    end: "top 0",
    scrub: 3,
  },
});
tl.to(
  ".images img",
  {
    x: -100,
  },
  "anime"
);
tl.to(
  ".images img",
  {
    x: 300,
  },
  "anime"
);
tl.to(
  ".images2 img",
  {
    x: 100,
  },
  "anime"
);
tl.to(
  ".images2 img",
  {
    x: -300,
  },
  "anime"
);
