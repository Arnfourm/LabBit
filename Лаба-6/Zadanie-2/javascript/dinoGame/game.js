const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

let score = 0;
let passed = false;
let isDead = false;

function jump(){
    if (isDead){
        return;
    }

    if (dino.classList != "jump"){
        dino.classList.add("jump");

        setTimeout(function() {
            dino.classList.remove("jump");
        }, 900);
    };
};

document.addEventListener("keydown", function(event){
    if (event.key == " "){
        event.preventDefault();
        jump();
    };
});

setInterval(function() {
    const baseSpeed = 2;
    const minSpeed = 0.6;
    cactus.style.animationDuration = `${Math.max(minSpeed, baseSpeed - score * 0.05)}s`;

    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    
    if (cactusLeft < 0 && !passed && !isDead){
        score++;
        document.getElementById("scoreToChange").textContent = score;
        passed = true;
    };

    if (cactusLeft > 100){
        passed = false;
    }
    
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop > 290){
        document.getElementById("deadGameBlock").style.visibility = "visible";
        cactus.style.animation = "none";
        document.getElementById("dinoGame").style.backgroundColor = "#262626";
        isDead = true;
    };
}, 10);

document.getElementById("retryButtonGame").addEventListener("click", function() {
    document.getElementById("deadGameBlock").style.visibility = "hidden";
    cactus.classList.add("animate");
    document.getElementById("dinoGame").style.backgroundColor = "white";
    score = 0;
    passed = false;
    isDead = false;
    document.getElementById("scoreToChange").textContent = 0;
    cactus.style.animation = `block 2s infinite linear`;
});