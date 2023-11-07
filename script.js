var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function(details) {
    var rectanglelocation = rect.getBoundingClientRect();
    var insidereactval = details.clientX - rectanglelocation.left;

    if (insidereactval < rectanglelocation.width / 2) {
        var redcolor = gsap.utils.mapRange(0, rectanglelocation.width / 2, 255, 0, insidereactval);
        gsap.to(rect, {
            backgroundColor: `rgb(${redcolor},0,0)`,
            ease: Power4,
        })
    } else {
        var bluecolor = gsap.utils.mapRange(rectanglelocation.width / 2, rectanglelocation.width, 0, 255, insidereactval);
        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${bluecolor})`,
            ease: Power4,
        })
    }
});