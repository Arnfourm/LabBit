export function changeButtonColor(){
    const button = document.body.querySelectorAll(".buttonToChange");

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("mouseover", function () {
            button[i].classList.add("changebackground");
        });
        button[i].addEventListener("mouseout", function () {
            button[i].classList.remove("changebackground");
        });
    };
};