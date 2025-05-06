// Смена цвета кнопки при наведении
const button = document.body.querySelector(".buttonToChange");

button.addEventListener("mouseover", function () {
    button.classList.add("changebackground");
});
button.addEventListener("mouseout", function () {
    button.classList.remove("changebackground");
});

// Модальное окно
const dialog = document.querySelector(".dialogMain");
const html = document.querySelector("html");

document.querySelector("#openModel").onclick = function () {
    dialog.showModal();
    html.classList.add("changehtml");
};

document.querySelector("#closeModel").onclick = function () {
    dialog.close();
    html.classList.remove("changehtml");
};

//Изменения цены
const formElement = document.querySelector(".orderForm");
const quantity = document.querySelector("#quantity");
const promo = document.querySelector("#promo");
const priceHeader = document.querySelector(".priceHeader");
const price = parseInt(
    document.querySelector(".priceHeader").getAttribute("data-price")
);
const promoList = {
    "10procentSaleWOW": 0.9,
    "15yearShop": 0.85,
};

function updatePrice() {
    let quantityVal = 1;
    if (quantity.value > 1) {
        quantityVal = quantity.value;
    }
    let discount = 1;
    if (promo.value in promoList) {
        discount = promoList[promo.value];
    }
    let finalPrice = price * quantityVal * discount;
    priceHeader.textContent = `Цена: ${finalPrice.toLocaleString()}$ (${quantityVal} шт, скидка ${Math.round(
        (1 - discount) * 100
    )}%)`;
}

quantity.addEventListener("input", updatePrice);
promo.addEventListener("input", updatePrice);

// Отправка формы
formElement.addEventListener("submit", () => {
    const formData = new FormData(formElement);

    const name = formData.get("name");
    const surname = formData.get("secondName");
    const thirdName = formData.get("thirdName");
    const address = formData.get("address");

    alert(
        `Спасибо, ${name} ${surname} ${thirdName}!\nВаш заказ на адрес - ${address} в количестве ${quantity.value}шт будет исполнен в ближайшее время!`
    );
});
