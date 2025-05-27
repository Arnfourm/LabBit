const formPhoto = document.getElementById("photoWorkForm");

formPhoto.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(formPhoto)

    const response = await fetch("/postPhoto", {
        method: "POST",
        body: formData
    });

    const result = await response.json();

    const resultBlock = document.getElementById("formResultPrint");
    resultBlock.innerHTML = "";

    const photoName = document.createElement("p");
    photoName.textContent = "Название картинки: " + result.data.photoName;
    
    const photoDate = document.createElement("p");
    photoDate.textContent = "Дата фотографии: " + result.data.photoDate;

    const photoImg = document.createElement("img");
    photoImg.src = result.imageUrl;
    photoImg.classList.add("classInnterHtmlImg");

    resultBlock.appendChild(photoName);
    resultBlock.appendChild(photoDate);
    resultBlock.appendChild(photoImg);
});