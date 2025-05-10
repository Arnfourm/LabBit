document.addEventListener("DOMContentLoaded", () => {
    const formElement = document.querySelector(".orderForm");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(formElement);
    
        const name = formData.get("name");
        const surname = formData.get("secondName");
        const thirdName = formData.get("thirdName");
        const address = formData.get("address");
    
        let hasError = false;
    
        const toCheck = [
            {param1: name, param2: "nameP"},
            {param1: surname, param2: "secondNameP"},
            {param1: thirdName, param2: "thirdNameP"}
        ]
    
        toCheck.forEach((item) => {
            checker(item.param1, (error) => {
                const element = document.getElementById(item.param2);
                if (error){
                    element.textContent = error.message;
                    element.classList.remove("hidden");
                    hasError = true;
                } else{
                    element.textContent = "";
                    element.classList.add("hidden");
                }
            });
        });
    
        if (hasError) {
            document.getElementById("validError").textContent = "Ошибка! Некоторые данные были введены неправильно";
            document.getElementById("validError").classList.remove("hidden");
            document.getElementById("validSuccess").classList.add("hidden");
        } else {
            document.getElementById("validSuccess").textContent = `Спасибо, ${name} ${surname} ${thirdName}!\nВаш заказ на адрес - ${address} в количестве ${quantity.value}шт будет исполнен в ближайшее время!`;
            document.getElementById("validSuccess").classList.remove("hidden");
            document.getElementById("validError").classList.add("hidden");
        };
    });
});

function checker(str, callback) {
    const regexStr = /^[A-Za-zА-Яа-яЁё]+$/;

    if (!regexStr.test(str)) {
        callback(new Error("Не должно быть цифр!"));
        return;
    }

    if (str.length > 50 || str.length < 3) {
        callback(new Error("От 3 до 50 символов!"));
        return;
    }

    callback(null, "Покупка прошла успешно!");
};