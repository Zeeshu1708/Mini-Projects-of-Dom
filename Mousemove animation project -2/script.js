window.addEventListener("mousemove",function(e) {
    const rect = this.document.querySelector("#rectangle")
    var rectPosition = gsap.utils.mapRange(0, this.window.innerWidth + rect.getBoundingClientRect().width/2 + 100, 100 + rect.getBoundingClientRect().width/2, (this.window.innerWidth + rect.getBoundingClientRect().width/2)-100, e.clientX);
    // console.log(e.clientX); 
    rect.style.left = rectPosition + "px";
})