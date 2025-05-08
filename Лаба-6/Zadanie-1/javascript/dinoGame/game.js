const dino = document.getElementById("dino");
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

const cactus = document.getElementById("cactus");

let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop > 290){
        document.getElementById("loseGame").textContent = "Потрачено";
        cactus.classList.remove("animate");
        isDead = true;
    };
}, 10);