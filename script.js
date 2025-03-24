var tl = gsap.timeline();

tl.from("h2", {
    opacity: 0,
    y: -30,
    duration: 1
});

tl.from("a", {
    opacity: 0,
    y: -30,
    duration: 1,
    stagger: 0.2
});

tl.from("#page1 h1", {
    y: 900,
    duration: 1,
    stagger: 0.2
});

var cursor = document.querySelector("#cursor");
document.body.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        ease: "back.out(3)"
    });
});

gsap.from(".page2", {
    duration: 2,
    opacity:0,
    scrollTrigger: {
        scroller: "body",
        trigger: "#page2",
        start: "top 5%",
        end: "top -150%",
        scrub: 3,
        }
});
