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

//Объект MAP
let mapBlock = new Map();

document.getElementById("MAPadd").addEventListener("click", function (event) {
    event.preventDefault();
    mapBlock.set(document.getElementById("keyInput").value, document.getElementById("valueInput").value);
    document.getElementById("MapResult").textContent = "Значение добавилось успешно!";
});

document.getElementById("MAPcheck").addEventListener("click", function (event) {
    event.preventDefault();
    if (!mapBlock.has(document.getElementById("keyWork").value)) {
        document.getElementById("MapResult").textContent = "Значения под таким ключом нет((";
    } else {
        document.getElementById("MapResult").textContent = "Значение под таким ключом существует!";
    }
});

document.getElementById("MAPdelete").addEventListener("click", function (event) {
    event.preventDefault();
    if (mapBlock.has(document.getElementById("keyWork").value)) {
        mapBlock.delete(document.getElementById("keyWork").value);
        document.getElementById("MapResult").textContent = "Значение удалено успешно!";
    } else {
        document.getElementById("MapResult").textContent = "Такого значения и не было!";
    }
});

document.getElementById("MAPget").addEventListener("click", function (event) {
    event.preventDefault();
    if (mapBlock.has(document.getElementById("keyWork").value)) {
        keyToGet = document.getElementById("keyWork").value;
        valueToGet = mapBlock.get(keyToGet);
        document.getElementById("MapResult").textContent = `Значение под ключом ${keyToGet}: ${valueToGet}`;
    } else {
        document.getElementById("MapResult").textContent = "Такого значения и не было!";
    }
});

document.getElementById("MAPclear").addEventListener("click", function (event) {
    event.preventDefault();
    mapBlock.clear();
    document.getElementById("MapResult").textContent = "Список полностью очищен!";
});

document.getElementById("MAPgetAll").addEventListener("click", function (event) {
    event.preventDefault();
    let result = "";
    for (let [k, v] of mapBlock) {
        result += `${k}: ${v},  `;
    }
    document.getElementById("MapResult").textContent = result;
});

document.getElementById("CreateMass").addEventListener("click", function (event) {
    event.preventDefault();

    const mass = Array.from(mapBlock);
    const result = mass.map(([key, value]) => `${key} = ${value} `);
    document.getElementById("MapResult").textContent = result;
});

document.getElementById("MAPLength").addEventListener("click", function (event) {
    event.preventDefault();

    const mass = Array.from(mapBlock);
    const result = mass.map(([key, value]) => `${value.length} `);
    document.getElementById("MapResult").textContent = result;
});

//Объект SET
let setBlock = new Set();

document.getElementById("SETadd").addEventListener("click", function (event) {
    event.preventDefault();
    setBlock.add(document.getElementById("valueWork").value);
    alert("Значение добавилось успешно!");
});

document.getElementById("SETcheck").addEventListener("click", function (event) {
    event.preventDefault();
    if (!setBlock.has(document.getElementById("valueWork").value)) {
        alert("Такого значения в множестве нет((");
    } else {
        alert("Такое значение в множестве есть!");
    }
});

document.getElementById("SETdelete").addEventListener("click", function (event) {
    event.preventDefault();
    if (setBlock.has(document.getElementById("valueWork").value)) {
        setBlock.delete(document.getElementById("valueWork").value);
        alert("Значение удалено успешно!");
    } else {
        alert("Такого значения и не было!");
    }
});

document.getElementById("SETclear").addEventListener("click", function (event) {
    event.preventDefault();
    setBlock.clear();
    alert("Список полностью очищен!");
});

document.getElementById("SETgetAll").addEventListener("click", function (event) {
    event.preventDefault();
    let result = "";
    setBlock.forEach((value, valueAgain, set) => {
        result += `${value}\n`;
    });
    alert(result);
});

document.getElementById("SETmulty").addEventListener("click", function (event) {
    event.preventDefault();

    const massSet = Array.from(setBlock);
    const massSetNumbers = massSet.filter((item) => Number.isInteger(parseInt(item)));
    alert(massSetNumbers);
});

document.getElementById("SETSumm").addEventListener("click", function (event) {
    event.preventDefault();

    const massSet = Array.from(setBlock)
        .filter((item) => Number.isInteger(parseInt(item)))
        .map((item) => parseInt(item));
    const resultSumm = massSet.reduce((sum, current) => sum + current, 0);
    alert(resultSumm);

    alert(Object.getOwnPropertyDescriptor(setBlock, "asd"));
});

//Объект Date
const date = new Date();

document.getElementById("time").textContent = date.toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
});

// Дескрипторы
let descripterTask = {};

document.getElementById("DescriptorAdd").addEventListener("click", function (event) {
    event.preventDefault();

    const propertyToUse = document.getElementById("DescriptorPropertyInput").value;
    const valueToUse = document.getElementById("DescriptorValueInput").value;
    Object.defineProperty(descripterTask, propertyToUse, {
        value: valueToUse,
        writable: true,
        enumerable: true,
        configurable: true,
    });
    alert("Успешно! Свойство записано/перезаписано!");
});

document.getElementById("DescriptorChange").addEventListener("click", function (event) {
    event.preventDefault();

    const propertyToUse = document.getElementById("DescriptorPropertyInput").value;
    const valueToUse = document.getElementById("DescriptorValueInput").value;
    descripterTask[propertyToUse] = valueToUse;
    alert("Успешно! Свойство переназначено!");
});

document.getElementById("DescriptorWritable").addEventListener("click", function (event) {
    event.preventDefault();

    const propertyToUse = document.getElementById("DescriptorPropertyOtherActionInput").value;
    Object.defineProperty(descripterTask, propertyToUse, {
        writable: false,
    });
    alert("Успешно! Теперь нельзя перезаписать значение!");
});

document.getElementById("DescriptorEnumerable").addEventListener("click", function (event) {
    event.preventDefault();

    const propertyToUse = document.getElementById("DescriptorPropertyOtherActionInput").value;
    Object.defineProperty(descripterTask, propertyToUse, {
        enumerable: false,
    });
    alert("Успешно! Теперь свойство не видно при перечислении!");
});

document.getElementById("DescriptorConfigurate").addEventListener("click", function (event) {
    event.preventDefault();

    const propertyToUse = document.getElementById("DescriptorPropertyOtherActionInput").value;
    Object.defineProperty(descripterTask, propertyToUse, {
        configurable: false,
    });
    alert("Успешно! Теперь свойство нельзя перезаписать даже в конфигураторе!");
});

document.getElementById("DescriptorShowAll").addEventListener("click", function (event) {
    event.preventDefault();

    let resultDescriptor = "";
    for (let key in descripterTask) {
        resultDescriptor += `${key}: ${descripterTask[key]}\n`;
    }

    alert(resultDescriptor);
});

//Прокси
const target = {
    watch: "Apple watch series 10",
    cost: 600,
};

const handler = {
    get: function (target, prop) {
        alert(`Название: ${prop}. Позиция: ${target[prop]}`);
    },
    set: function (target, prop, value) {
        alert(`Перезаписано свойство ${prop} со значение ${value}`);
        target[prop] = value;
    },
};

const proxy = new Proxy(target, handler);

document.getElementById("ProxyGetButton").addEventListener("click", function (event) {
    event.preventDefault();

    proxy.watch;
});

document.getElementById("ProxyActionValueButton").addEventListener("click", function (event) {
    event.preventDefault();

    proxy.cost = document.getElementById("ProxyActionValueInput").value;
});
