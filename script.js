var timeline = gsap.timeline();
var video = document.querySelector("video");
function time() {
    setInterval(function(){
        video.innerHTML = "<video autoplay></video>";
    }, 150)
}
timeline
    .from("h1",{
        delay: 0.8,
        duration: 1,
        opacity: 0,
        y: -100,
        stagger: 0.4,
        onStart:time()
    })
    
