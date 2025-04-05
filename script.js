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

gsap.from(".content", {
    scrollTrigger: {
        trigger: ".page2",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 2,
    ease: "power3.out"
  });
  
gsap.from(".comic-sayee", {
    scrollTrigger: {
        trigger: ".page2",
        start: "top 80%",
    },
    x: 100,
    opacity: 0,
    duration: 2,
    delay: 0.5,
    ease: "power3.out"
  });
  document.addEventListener("DOMContentLoaded", () => {
    const sparkleContainer = document.querySelector(".sparkle-background");
    const numSparkles = 80;

    for (let i = 0; i < numSparkles; i++) {
      const sparkle = document.createElement("div");
      sparkle.classList.add("sparkle");

      // 🎲 Random size between 3px and 10px
      const size = Math.random() * 7 + 3;
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;

      // 🎲 Random position
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;

      // 🎲 Random opacity
      const startOpacity = Math.random() * 0.5 + 0.3;
      sparkle.style.opacity = startOpacity;

      sparkleContainer.appendChild(sparkle);

      // ✨ Floating motion
      gsap.to(sparkle, {
        y: `-=${10 + Math.random() * 10}`,
        repeat: -1,
        yoyo: true,
        duration: 2 + Math.random() * 2,
        ease: "sine.inOut"
      });

      // 💫 Twinkle effect
      gsap.to(sparkle, {
        opacity: Math.random() * 0.4 + 0.4,
        repeat: -1,
        yoyo: true,
        duration: 1.5 + Math.random() * 2,
        ease: "sine.inOut"
      });
    }
  });