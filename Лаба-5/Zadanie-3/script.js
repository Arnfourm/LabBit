// Модальное окно
const dialog = document.querySelector(".dialogMain");
const html = document.querySelector("html");
const priceHeader = document.querySelector(".priceHeader");
const openModels = document.querySelectorAll(".openModel");

function openModelScript() {
    dialog.showModal();
    html.classList.add("changehtml");
    priceHeader.textContent = `Цена: ${price.toLocaleString()}$`;
}

for (let i = 0; i < openModels.length; i++) {
    openModels[i].addEventListener("click", openModelScript);
}

document.querySelector("#closeModel").addEventListener("click", function () {
    dialog.close();
    html.classList.remove("changehtml");
});

addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "b") {
        openModelScript();
    } else if (event.ctrlKey && event.key === "q") {
        window.close();
    }
});

//Изменения цены
const formElement = document.querySelector(".orderForm");
const quantity = document.querySelector("#quantity");
const promo = document.querySelector("#promo");

const promoList = {
    "10procentSaleWOW": 0.9,
    "15yearShop": 0.85,
};

function updatePrice() {
    let quantityVal = 1;
    const price = null;
    if (quantity.value > 1) {
        quantityVal = quantity.value;
    }
    let discount = promo.value in promoList ? promoList[promo.value] : 1;

    priceHeader.textContent = `Цена: ${createPrice(price, quantityVal, discount).toLocaleString()}$ (${quantityVal} шт, скидка ${Math.round((1 - discount) * 100)}%)`;
}

function createPrice(priceFunc, quantityFunc, discountFunc) {
    let finalPrice = priceFunc * quantityFunc * discountFunc;
    return finalPrice;
}

quantity.addEventListener("input", updatePrice);
promo.addEventListener("input", updatePrice);

// Отправка формы
formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(formElement);

    const name = formData.get("name");
    const surname = formData.get("secondName");
    const thirdName = formData.get("thirdName");
    const address = formData.get("address");

    if (!checker(name, "nameP") || !checker(surname, "secondNameP") || !checker(thirdName, "thirdNameP")) {
        document.getElementById("validError").textContent = "Ошибка! Некоторый данный были введены неправильно";
        document.getElementById("validError").classList.remove("hidden");
        document.getElementById("validSuccess").classList.add("hidden");
    } else {
        document.getElementById("validSuccess").textContent = `Спасибо, ${name} ${surname} ${thirdName}!\nВаш заказ на адрес - ${address} в количестве ${quantity.value}шт будет исполнен в ближайшее время!`;
        document.getElementById("validSuccess").classList.remove("hidden");
        document.getElementById("validError").classList.add("hidden");
    };
});

function checker(str, idEl) {
    const regexStr = /^[A-Za-zА-Яа-яЁё]+$/;

    if (!regexStr.test(str)) {
        document.getElementById(idEl).textContent = "Не должно быть цифр!";
        document.getElementById(idEl).classList.remove("hidden");
        return false;
    }

    if (str.length > 50 || str.length < 3) {
        document.getElementById(idEl).textContent = "От 3 до 50 символов!";
        document.getElementById(idEl).classList.remove("hidden");
        return false;
    }

    document.getElementById(idEl).textContent = "";
    return true;
}

// Смена цвета кнопки при наведении
const button = document.body.querySelectorAll(".buttonToChange");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("mouseover", function () {
        button[i].classList.add("changebackground");
    });
    button[i].addEventListener("mouseout", function () {
        button[i].classList.remove("changebackground");
    });
}

// Слайдер
const imagesSlider = document.querySelectorAll('.slider img');
const prevSlider = document.getElementById('prev');
const nextSlider = document.getElementById('next');
let currentIndex = 0;

function showImage(index) {
    imagesSlider[currentIndex].classList.remove('active');
    imagesSlider[index].classList.add('active');
    currentIndex = index;
}

prevSlider.addEventListener('click', function(){
    let index = currentIndex - 1;
    if (index < 0) {
        index = imagesSlider.length - 1;
    }
    showImage(index);
});

nextSlider.addEventListener('click', function(){
    let index = currentIndex + 1;
    if (index >= imagesSlider.length) {
        index = 0;
    }
    showImage(index);
});

showImage(currentIndex);