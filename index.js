//onloading animation
function loadingAnimation(){
    gsap.from("#page1 h1",{
        opacity:0,
        y:200,
        delay:0.5,
        duration: 0.7,
        stagger:0.2 
    })
    gsap.from("#page1 #video-container #video",{
        opacity:0,
        y:200,
        delay:0.9,
        duration: 1.5,
    })
}
loadingAnimation();

//video animation
function videoAnimation() {
  const videoContainer = document.querySelector("#video-container");
  const playBtn = document.querySelector("#play"); 

  videoContainer.addEventListener("mouseenter", function () {
    gsap.to(playBtn, {
      scale: 1,
      opacity: 1,
    });
  });

  videoContainer.addEventListener("mouseleave", function () {
    gsap.to(playBtn, {
      scale: 0,
      opacity: 0,
    });
  });

  document.addEventListener("mousemove", function (mousePosition) {
    gsap.to(playBtn, {
      left: mousePosition.x-30,
      top: mousePosition.y-30,
    });
  });
}
videoAnimation();

