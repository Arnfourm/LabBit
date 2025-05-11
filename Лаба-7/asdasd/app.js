"use strict";

const divResponse = document.getElementById("response");
const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(myForm);

    const response = await fetch("/user", {
        method: "POST",
        body: formData,
    });

    const data = await response.json();

    divResponse.innerHTML = `
        <p>${data.message}</p>
        <p>Ваша картинка:</p>
        <img src="${data.imageDataUrl}"/>
    `;
});

