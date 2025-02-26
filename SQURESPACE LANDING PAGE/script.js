var tl = gsap.timeline();

tl.from("#nav img, #nav h3, #nav button", {
  y: -100,
  duration: 1,
  delay: 0.6,
  opacity: 0,
  stagger: 0.4,
});
tl.from("#main h1", {
  y: 100,
  opacity: 0,
  delay: 0.2,
  stagger: 0.2,
});
tl.from("#main>img", {
  scale: 1,
  opacity: 0,
  stagger: 0.2,
});
tl.from("#main h4", {
  scale: 0,
  opacity: 0,
  stagger: 0.5,
});
tl.to("#main h4", {
  y: 40,
  repeat: -1,
  duration: 1,
  yoyo: true,
});
