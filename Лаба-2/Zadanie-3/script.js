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

// Рекурсия
function factorial(num) {
    if (num !== 0) {
        return num * factorial(num - 1);
    }
    return 1;
}

document.getElementById("RecursiveCalc").addEventListener("click", function (event) {
    event.preventDefault();

    numberToCalc = parseInt(document.getElementById("RecursiveValueInput").value);
    alert(`Вычисленное число - ${factorial(numberToCalc)}`);
});

// Замкнутые функции
let miniCalculator;

function operationCalc(numToOperate) {
    return {
        get value() {
            return numToOperate;
        },
        multipli: function (operator) {
            numToOperate *= operator;
        },
        summ: function (operator) {
            numToOperate += operator;
        },
        divide: function (operator) {
            numToOperate /= operator;
        },
        remaind: function (operator) {
            numToOperate %= operator;
        },
    };
}

document.getElementById("NumWrite").addEventListener("click", function (event) {
    event.preventDefault();

    miniCalculator = operationCalc(parseInt(document.getElementById("closedNumInput").value));
    alert("Число успешно записано!");
});

document.getElementById("multyNum").addEventListener("click", function (event) {
    event.preventDefault();

    miniCalculator.multipli(parseInt(document.getElementById("numToOperationInput").value));
    alert(`Удача! Вы умножили число! Полученное число - ${miniCalculator.value}`);
});

document.getElementById("summNum").addEventListener("click", function (event) {
    event.preventDefault();

    miniCalculator.summ(parseInt(document.getElementById("numToOperationInput").value));
    alert(`Удача! Вы сложили число! Полученное число - ${miniCalculator.value}`);
});

document.getElementById("divideNum").addEventListener("click", function (event) {
    event.preventDefault();

    miniCalculator.divide(parseInt(document.getElementById("numToOperationInput").value));
    alert(`Удача! Вы раздлелили число! Полученное число - ${miniCalculator.value}`);
});

document.getElementById("remainderNum").addEventListener("click", function (event) {
    event.preventDefault();

    miniCalculator.remaind(parseInt(document.getElementById("numToOperationInput").value));
    alert(`Удача! Вы нашли остаток от числа! Полученное число - ${miniCalculator.value}`);
});
