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
const priceHeader = document.querySelector(".priceHeader");


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

//Объекты
let productList = [];

function Product(id, name, price, imgPath) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imgPath = imgPath;
}

productList.push(
    new Product(1, "Apple watch ulta 2", 700, "imgs/appleulta.png"),
    new Product(2, "Rolex Day-Date 36", 117250, "imgs/rolexDayDate36.png"),
    new Product(3, "King Seiko Automatic", 2000, "imgs/KingSeiko.png"),
    new Product(4, "Paket Philippe 5270/1R", 230000, "imgs/PatekPhilippe.png"),
    new Product(5, "Rolex DateJust 31", 51900, "imgs/rolexDateJust31.png"),
    new Product(6, "Patek Philippe 6300/400G", 9000000, "imgs/PatekPhilippeBlackWhite.png"),
    new Product(7, "Apple watch series 10", 450, "imgs/appleseries10.png"),
    new Product(8, "Jacob&Co Palatial Classic", 16500, "imgs/Jacob&Co.png")
);

//Работа с объектами
Product.prototype.changePrice = function(newPrice){
    this.price = newPrice;
}

Product.prototype.changeName = function(newName){
    this.name = newName;
}                                                

document.getElementById("PriceChanger").addEventListener("click", function(event){
    event.preventDefault();
    
    const tempId = parseInt(document.getElementById("idObjectValueInput").value);
    const tempPrice = parseFloat(document.getElementById("priceObjectValueInput").value);
    
    productList[tempId].changePrice(tempPrice);

    const productUnits = document.querySelectorAll(".productUnit");
    productUnits[tempId].querySelector("p:nth-child(3)").textContent = `${productList[tempId].price}$`;
});

document.getElementById("NameChanger").addEventListener("click", function(event){
    event.preventDefault();
    
    const tempId = parseInt(document.getElementById("idObjectValueInput").value);
    const tempName = document.getElementById("nameObjectValueInput").value;

    productList[tempId].changeName(tempName);

    const productUnits = document.querySelectorAll(".productUnit");
    productUnits[tempId].querySelector("p:nth-child(2)").textContent = `${productList[tempId].name}`;
});

//Генерация html
const productListContainer = document.querySelector(".productsList");

productList.forEach((product) => {
    const productUnit = document.createElement("div");
    productUnit.classList.add("productUnit");

    const img = document.createElement("img");
    img.src = product.imgPath;

    const name = document.createElement("p");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = `${product.price}$`;

    const buyButton = document.createElement("button");
    buyButton.classList.add("buttonUnit", "buttonToChange", "openModel");
    buyButton.textContent = "Купить!";
    buyButton.dataset.price = product.price;

    buyButton.addEventListener("click", function () {
        dialog.showModal();
        html.classList.add("changehtml");
        priceHeader.textContent = `Цена: ${product.price.toLocaleString()}$`;
    });

    productUnit.appendChild(img);
    productUnit.appendChild(name);
    productUnit.appendChild(price);
    productUnit.appendChild(buyButton);

    productListContainer.appendChild(productUnit);
});