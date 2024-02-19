var elem = document.querySelectorAll(".elem");

elem.forEach(function (val) {
    var img = val.childNodes[3]
    val.addEventListener("mouseenter",function (dets) {
        img.style.opacity = 1;
    })
    val.addEventListener("mouseleave",function () {
        img.style.opacity = 0;
    })
    val.addEventListener("mousemove",function (dets) {
        img.style.left = dets.x + "px";
    })
})