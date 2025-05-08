const dino = document.getElementById("dino");

function jump(){
    if (dino.classList != "jump"){
        dino.classList.add("jump");

        setTimeout(function() {
            dino.classList.remove("jump");
        }, 300);
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

    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyPriority("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
        alert("=(");
    };
}, 10);