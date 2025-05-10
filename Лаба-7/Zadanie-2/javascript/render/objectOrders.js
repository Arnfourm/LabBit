export class Order {
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