//Класс продукты
let productList = [];

class Product {
    #id;
    #name;
    #price;
    #imgPath;

    constructor(id, name, price, imgPath) {
        this.#id = id;
        this.#name = name;
        this.#price = price;
        this.#imgPath = imgPath;
    }

    get getId() {
        return this.#id;
    }

    get getName() {
        return this.#name;
    }

    get getPrice() {
        return this.#price;
    }

    get getImgPath() {
        return this.#imgPath;
    }

    whatIsIt() {
        console.log("Здесь выводится тип продукта");
    }
}

class Watch extends Product {
    #type = "Часы";

    constructor(id, name, price, imgPath) {
        super(id, name, price, imgPath);
    }

    get getType() {
        return this.#type;
    }

    whatIsIt() {
        console.log("Вывелись часы");
    }
}

class Accessory extends Product {
    #type = "Аксессуар";

    constructor(id, name, price, imgPath) {
        super(id, name, price, imgPath);
    }

    get getType() {
        return this.#type;
    }

    whatIsIt() {
        console.log("Вывелся аксессуар");
    }
}

productList.push(new Watch(1, "Apple watch ulta 2", 700, "imgs/appleulta.png"), new Watch(2, "Rolex Day-Date 36", 117250, "imgs/rolexDayDate36.png"), new Accessory(3, "118135 RHODIUM", 250, "imgs/RemeshokRolex.png"), new Watch(4, "Paket Philippe 5270/1R", 230000, "imgs/PatekPhilippe.png"), new Accessory(5, "Mademoiselle Prive H3567", 310, "imgs/RemeshokChannel.png"), new Watch(6, "Patek Philippe 6300/400G", 9000000, "imgs/PatekPhilippeBlackWhite.png"), new Watch(7, "Apple watch series 10", 450, "imgs/appleseries10.png"), new Watch(8, "Jacob&Co Palatial Classic", 16500, "imgs/Jacob&Co.png"));

//Класс заказы
let orderList = [];

class Order {
    #name;
    #surname;
    #email;
    #address;
    #quantity;

    constructor(name, surname, email, address, quantity) {
        this.#name = name;
        this.#surname = surname;
        this.#email = email;
        this.#address = address;
        this.#quantity = quantity;
    }

    get getName() {
        return this.#name;
    }

    get getSurname() {
        return this.#surname;
    }

    get getEmail() {
        return this.#email;
    }

    get getAddress() {
        return this.#address;
    }

    get getQuantity() {
        return this.#quantity;
    }
}

orderList.push(new Order("Аноним", "Анонимов", "Anonim@gmail.com", "Город Анонимов, ул. Анонимная, д. Анон, кв. А", 2), new Order("Виктор", "Викторов", "ViktorSupet@mail.ru", "Город Москва, улица Мира, д.4", 9), new Order("Тестер", "Тестеров", "tester@top.com", "г.Тест, ул. Тестеров, д. -004", 5));

//Генерация html
const productListContainer = document.querySelector(".productsList");
const orderListContainer = document.querySelector(".orderContainer");

productList.forEach((product) => {
    const productUnit = document.createElement("div");
    productUnit.classList.add("productUnit");

    const imgProduct = document.createElement("img");
    imgProduct.src = product.getImgPath;

    const nameProduct = document.createElement("p");
    nameProduct.textContent = product.getName;

    const typeProduct = document.createElement("p");
    typeProduct.textContent = "Тип продукта: " + product.getType;

    const priceProduct = document.createElement("p");
    priceProduct.textContent = `${product.getPrice}$`;

    product.whatIsIt();

    const buyButtonProduct = document.createElement("button");
    buyButtonProduct.classList.add("buttonUnit", "buttonToChange", "openModel");
    buyButtonProduct.textContent = "Купить!";
    buyButtonProduct.dataset.price = product.price;

    productUnit.appendChild(imgProduct);
    productUnit.appendChild(nameProduct);
    productUnit.appendChild(typeProduct);
    productUnit.appendChild(priceProduct);
    productUnit.appendChild(buyButtonProduct);

    productListContainer.appendChild(productUnit);
});

orderList.forEach((order) => {
    const orderUnit = document.createElement("div");
    orderUnit.classList.add("orderRow");

    const nameOrder = document.createElement("p");
    nameOrder.textContent = order.getName;

    const surnameOrder = document.createElement("p");
    surnameOrder.textContent = order.getSurname;

    const emailOrder = document.createElement("p");
    emailOrder.textContent = order.getEmail;

    const addressOrder = document.createElement("p");
    addressOrder.textContent = order.getAddress;

    const quantityOrder = document.createElement("p");
    quantityOrder.textContent = order.getQuantity;

    orderUnit.appendChild(nameOrder);
    orderUnit.appendChild(surnameOrder);
    orderUnit.appendChild(emailOrder);
    orderUnit.appendChild(addressOrder);
    orderUnit.appendChild(quantityOrder);

    orderListContainer.appendChild(orderUnit);
});

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

// Слайдер1
const slider = document.getElementById("slider");
const slides = document.getElementById("slides");
const slideWidth = document.querySelector(".slide").offsetWidth;

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

prevButton.addEventListener("click", slidePrev);
nextButton.addEventListener("click", slideNext);

let counter = 0;

function slideNext() {
    counter++;
    if (counter >= slides.children.length) {
        counter = 0;
    }
    slides.style.transform = `translateX(${-counter * slideWidth}px)`;
}

function slidePrev() {
    counter--;
    if (counter < 0) {
        counter = slides.children.length - 1;
    }
    slides.style.transform = `translateX(${-counter * slideWidth}px)`;
}

setInterval(slideNext, 3000);

// Слайдер2
const imagesSlider2 = document.querySelectorAll('.slider_v2 img');
const prevSlider2 = document.getElementById('prev_v2');
const nextSlider2 = document.getElementById('next_v2');
let currentIndex = 0;

function showImage(index) {
    imagesSlider2[currentIndex].classList.remove('active');
    imagesSlider2[index].classList.add('active');
    currentIndex = index;
}

prevSlider2.addEventListener('click', function(){
    let index = currentIndex - 1;
    if (index < 0) {
        index = imagesSlider2.length - 1;
    }
    showImage(index);
});

nextSlider2.addEventListener('click', function(){
    let index = currentIndex + 1;
    if (index >= imagesSlider2.length) {
        index = 0;
    }
    showImage(index);
});

showImage(currentIndex);