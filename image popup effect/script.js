// Throttling Function
const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
document.querySelector("#center").addEventListener("mousemove",
    throttleFunction((dets) => {
        let div = document.createElement("div");
        div.classList.add("cards");
        document.body.appendChild(div);
        div.style.left = dets.clientX + "px";
        div.style.top = dets.clientY + "px";

        let img = document.createElement("img");
        let imgArr = ["https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1608306448197-e83633f1261c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGV2ZWxvcGVyfGVufDB8MXwwfHx8MA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1678566154673-a728037f3f00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGV2ZWxvcGVyfGVufDB8MXwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1599837565318-67429bde7162?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRldmVsb3BlcnxlbnwwfDF8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRldmVsb3BlcnxlbnwwfDF8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1536148935331-408321065b18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRldmVsb3BlcnxlbnwwfDF8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1642697283420-194938fcc339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGRldmVsb3BlcnxlbnwwfDF8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1624313976899-0fd4989a2fcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGRldmVsb3BlcnxlbnwwfDF8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1618931692805-4c2c463eca05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGRldmVsb3BlcnxlbnwwfDF8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1625036437298-32345acbf717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGRldmVsb3BlcnxlbnwwfDF8MHx8fDA%3D"];

            // console.log();

        img.setAttribute("src", `${imgArr[Math.floor(Math.random() * 10)]}` );
        div.appendChild(img);

        gsap.to(img,{
            y: "0",
            ease: Power1,
            duration: .6
        });
        gsap.to(img,{
            y: "100%",
            delay: .9,
            ease: Power2,
            duration: .4
        });

        setInterval(() => {
            div.remove();
            img.remove();
        }, 2000);
    }, 530));

