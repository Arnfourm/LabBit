const formPhoto = document.getElementById("photowork");

formPhoto.addEventListener("submit", async (event) => {
    event.preventDefault();

    const response = await fetch("/postPhoto", {
        method: "POST",
        body: FormData
    });

    const result = await response.json();

    const resultBlock = document.getElementById("formResultPrint");

    const photoName = document.createElement("p");
    photoName.textContent = result.data.photoName;

    const photoDate = document.createElement("p");
    photoDate.textContent = result.data.photoDate;

    const photoImg = document.createElement("img");
    photoImg.src = result.imageUrl;

    resultBlock.appendChild(photoName);
    resultBlock.appendChild(photoDate);
    resultBlock.appendChild(photoDate);
});