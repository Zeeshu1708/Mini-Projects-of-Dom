var rect = document.querySelector("#rectangle");

rect.addEventListener("mousemove", function(elem){
    var rectLocation = rect.getBoundingClientRect();
    insideRectVal = Math.round( elem.clientX - rectLocation.left);
    // console.log(insideRectVal);
    
    if (insideRectVal < rectLocation.width/2) {
        var redColor = gsap.utils.mapRange(0, rectLocation.width/2, 255, 0, insideRectVal);
        rect.style.backgroundColor = `rgb(${redColor},0,0)`
    }
    else{
        var blueColor = gsap.utils.mapRange(rectLocation.width/2, rectLocation.width, 0, 255, insideRectVal);
        rect.style.backgroundColor = `rgb(0,0,${blueColor})`
    }
})

rect.addEventListener("mouseleave", function(){
    rect.style.backgroundColor = 'white';

})