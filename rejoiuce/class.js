

function cursorEffect() {
    var page1Contain = document.querySelector("#page1-content");
    var cursor = document.querySelector("#cursor");
    
    page1Contain.addEventListener("mousemove", function(dets){
        gsap.to(cursor,{
            x:dets.x,
            y:dets.y,
        })
       
    })
    page1Contain.addEventListener("mouseenter", function(){
        gsap.to(cursor,{
           scale:1,
           opacity:1,
        })
       
    })
    page1Contain.addEventListener("mouseleave", function(){
        gsap.to(cursor,{
            scale:0,
            opacity:0,
        })
       
    })
    
}
cursorEffect();


var swiper = new Swiper(".mySwiper", {
    slidePerView:1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
    delay: 20000,
    disableOnInteraction: true,
  },
});





