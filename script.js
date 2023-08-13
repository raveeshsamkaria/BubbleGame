var timer = 60;
function runTimer() {
    var timerInt = setInterval(function() {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        } else {
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}
runTimer();

function makeBubble() {
    var clutter = "";    
    for (var i = 1; i <=168; i++) {
        var num = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${num}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}
makeBubble();

var hitNum = 0;
function getNewHit() {
    hitNum = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitNum;
}
getNewHit();

var score = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function(details) {
    var clickedNum = Number(details.target.textContent);
    if (clickedNum === hitNum) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});