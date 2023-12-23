function init() {
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
init()
var crsr = document.querySelector("#cursor");
var main = document.querySelector("#main");
document.addEventListener("mousemove", (dets) => {
    crsr.style.left = dets.x + 20 + "px";
    crsr.style.top = dets.y + 20 + "px";
})
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "#main",
        start: "top 27%",
        end: "top 0",
        scrub:3,
    }
})
tl.to("#page1 h1",{
    x: -50,
    duration:1,
},"s")
tl.to("#page1 h2",{
    x: 50,
    duration:1,
}, "s")
tl.to("#page1 video", {
    width: "90%",
    duration:1
}, "s")
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "#main",
        start: "top -102%",
        end: "top -130%",
        scrub:3,
    }
})
var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "#main",
        start: "top -400%",
        end: "top -410%",
        scrub:3,
    }
})
tl2.to("#main", {
    backgroundColor:"#fff"
})
tl3.to("#page3-p4-left h1", {
    x: 0,
    duration:5
})
tl3.to("#page3-p4-right", {
    opacity: 1,
    scale: 1,
    duration:2,
    delay:-1
})
var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "#main",
        start: "top -475%",
        end: "top -500%",
        scrub:3,
    }
})
tl4.to("#main", {
    backgroundColor: "#0f0d0d",
    color:"#fff"
})
tl4.to("#page3", {
    borderBottom:"1px solid white"
})
var box = document.querySelectorAll(".p5-elem");
box.forEach((elem) => {
    var image = elem.getAttribute("image");
    elem.addEventListener("mouseenter", () => {
        crsr.style.width = "250px";
        crsr.style.height = "300px";
        crsr.style.borderRadius = "0";
        crsr.style.backgroundImage = `url(${image})`;
        crsr.style.zIndex = 15;

    })
    elem.addEventListener("mouseleave", () => {
        crsr.style.width = "17px";
        crsr.style.height = "17px";
        crsr.style.borderRadius = "50%";
        crsr.style.backgroundImage = "none";
    })
})
var tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "#main",
        start: "top -680%",
        end: "top -695%",
        scrub:3,
    }
})
tl5.to("#main", {
    backgroundColor: "#fff",
    color:"#0f0d0d"
})
tl5.to("#page6", {
    color:"#0f0d0d"
})
tl5.to("#p6-left h1", {
    x: 0,
    duration:15
})
tl5.to("#page5", {
    borderBottom:"1px solid #0f0d0d",
    borderTop:"1px solid #0f0d0d"
})
tl5.to(".p5-elem", {
    borderBottom:"1px solid #0f0d0d",
    borderTop:"1px solid #0f0d0d"
})
tl5.to("#p6-right", {
    scale: 1,
    opacity: 1,
    duration:1
})