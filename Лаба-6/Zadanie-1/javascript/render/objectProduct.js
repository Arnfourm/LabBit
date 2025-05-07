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

export class Watch extends Product {
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

export class Accessory extends Product {
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