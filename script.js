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
