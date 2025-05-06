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

// Модальное окно
const dialog = document.querySelector(".dialogMain");
const html = document.querySelector("html");
const openModels = document.querySelectorAll(".openModel");
const priceHeader = document.querySelector(".priceHeader");
let price;

for (let i = 0; i < openModels.length; i++) {
    openModels[i].addEventListener("click", function () {
        dialog.showModal();
        html.classList.add("changehtml");
        if (openModels[i].getAttribute("data-price") > 0) {
            price = parseInt(openModels[i].getAttribute("data-price"));
        }
        priceHeader.textContent = `Цена: ${price.toLocaleString()}$`;
    });
}

document.querySelector("#closeModel").onclick = function () {
    dialog.close();
    html.classList.remove("changehtml");
};

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
    }
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

// Посчитать длину строки Unicode
const formUnicode = document.querySelector(".unicodeForm");

function calcUnicode(event) {
    event.preventDefault();
    const checker = /[\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/;
    const unicodeString = formUnicode.querySelector("#unicodeInput").value;

    let count = 0;
    for (let item of unicodeString.normalize()) {
        if (!checker.test(item)) {
            count++;
        }
    }
    document.querySelector(".unicodeResult").textContent = `Длина строки Unicode - ${count}`;
}

formUnicode.addEventListener("submit", calcUnicode);

//Поиск подстроки
const formStrFind = document.querySelector(".strFind");

function findStr(event) {
    event.preventDefault();

    const strToCheck = document.getElementById("toSearch").value;
    const strToFind = document.getElementById("toFind").value;
    const regex = new RegExp(strToFind, "g");
    const matches = strToCheck.match(regex);

    if (!matches) {
        document.querySelector(".checkResult").textContent = "Совпадения нет";
    } else {
        document.querySelector(".checkResult").textContent = `Найдено ${matches.length} совпадение(ий) - ${matches}`;
    }
}

formStrFind.addEventListener("submit", findStr);

//
class Product {
    constructor(img, name, price) {
        this.img = img;
        this.name = name;
        this.price = price;
    }

    render() {
        const productUnit = document.createElement("div");
        productUnit.classList.add("productUnit");
        productUnit.innerHTML = `
            <img src="${this.img}" alt="${this.name}">
            <p>${this.name}</p>
            <p>${this.price.toLocaleString()}$</p>
            <button class="buttonUnit buttonToChange openModel" data-price="${this.price}">Купить</button>
        `;
        return productUnit;
    }
}

const products = [new Product("imgs/appleulta.png", "Apple watch ultra 2", 700), new Product("imgs/rolexDayDate36.png", "Rolex Day-Date 36", 117250), new Product("imgs/KingSeiko.png", "King Seiko Automatic", 2000), new Product("imgs/PatekPhilippe.png", "Patek Philippe 5270/1R", 230000), new Product("imgs/rolexDateJust31.png", "Rolex DateJust 31", 51900), new Product("imgs/PatekPhilippeBlackWhite.png", "Patek Philippe 6300/400G", 9000000), new Product("imgs/appleseries10.png", "Apple watch series 10", 450), new Product("imgs/Jacob&Co.png", "Jacob&Co Palatial Classic", 16500)];

const productsList = document.querySelector(".productsList");

products.forEach((product) => {
    productsList.appendChild(product.render());
});
