export function renderProducts(productList){
    const productListContainer = document.querySelector(".productsList");

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
}

export function renderOrders(orderList){
    const orderListContainer = document.querySelector(".orderContainer");

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
}