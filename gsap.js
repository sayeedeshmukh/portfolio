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

gsap.to("#page2 h1", {
    transform: "translateX(-80%)",
    duration: 1,
    scrollTrigger: {
        scroller: "body",
        trigger: "#page2",
        start: "top 10%",
        end: "top -130%",
        scrub: 3,
        pin: true
    }
});

var cursor = document.querySelector("#cursor");
document.body.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        ease: "back.out(3)"
    });
});

gsap.to(".card-container .svgs", {
    rotate: 720,
    scrollTrigger: {
        scroller: "body",
        trigger: ".card-container",
        scrub: 3
    }
});

var cards = document.querySelectorAll(".cards");

// Store original rotation values from CSS
cards.forEach(card => {
    let originalRotation = getComputedStyle(card).rotate || "0deg";
    card.dataset.originalRotation = originalRotation; // Store in data attribute

    card.addEventListener("mouseenter", function () {
        gsap.to(card, {
            duration: 1,
            rotate: 180
        });

        let img = card.querySelector("img");
        if (img) {
            gsap.to(img, {
                duration: 1,
                rotate: -180
            });
        }
    });

    card.addEventListener("mouseleave", function () {
        gsap.to(card, {
            duration: 1,
            rotate: card.dataset.originalRotation // Reset to original rotation
        });

        let img = card.querySelector("img");
        if (img) {
            gsap.to(img, {
                duration: 1,
                rotate: 0
            });
        }
    });
});
