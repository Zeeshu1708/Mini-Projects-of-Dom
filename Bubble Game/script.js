var timer = 60;
var score = 0;
var hitValue = 0;
var timerInterval = "";


function showBubble() {
    var bubble = "";
    for (let i = 0; i <= 101; i++) {
        var num = Math.floor(Math.random() * 10);
        bubble += `<div class="bubble">${num}</div>`
    }
    document.querySelector("#pbot").innerHTML = bubble;
}

function setTimer() {
    timerInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").innerText = timer;
        }
        else{
            clearInterval(timerInterval);
            document.querySelector("#pbot").innerHTML = `<h1>Game Over ! <br/> Your Final Score is : ${score}</h1> `;
        }
    }, 1000);
}

function setHitVal() {
    hitValue = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").innerText = hitValue;
}

function setScoreVal() {
    score += 10;
    document.querySelector("#scoreval").innerText = score;
}

document.querySelector("#pbot").addEventListener("click",function(detail) {
    var targetNum = Number(detail.target.innerText);
    console.log(String(targetNum));
    if (targetNum === hitValue) {
        setScoreVal();
        showBubble();
        setHitVal();
    }
    else if (String(targetNum) === String(NaN)){
        setScoreVal();
        showBubble();
        setHitVal();
    }
    else{
        document.querySelector("#pbot").innerHTML = `<h1>You clicked on wrong Number ! <br/> Your Final Score is : ${score} </h1>  `;
        clearInterval(timerInterval);
    }
})

setHitVal();
setTimer();
showBubble();
