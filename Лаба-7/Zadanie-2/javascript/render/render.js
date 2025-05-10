import { Watch, Accessory } from "./objectProduct.js";
import { Order } from "./objectOrders.js";
import { renderProducts, renderOrders } from "./htmlRender.js";

let productList = [];
let orderList = [];

productList.push(
    new Watch(1, "Apple watch ulta 2", 700, "imgs/appleulta.png"), 
    new Watch(2, "Rolex Day-Date 36", 117250, "imgs/rolexDayDate36.png"), 
    new Accessory(3, "118135 RHODIUM", 250, "imgs/RemeshokRolex.png"), 
    new Watch(4, "Paket Philippe 5270/1R", 230000, "imgs/PatekPhilippe.png"), 
    new Accessory(5, "Mademoiselle Prive H3567", 310, "imgs/RemeshokChannel.png"), 
    new Watch(6, "Patek Philippe 6300/400G", 9000000, "imgs/PatekPhilippeBlackWhite.png"), 
    new Watch(7, "Apple watch series 10", 450, "imgs/appleseries10.png"), 
    new Watch(8, "Jacob&Co Palatial Classic", 16500, "imgs/Jacob&Co.png")
);

orderList.push(
    new Order("Аноним", "Анонимов", "Anonim@gmail.com", "Город Анонимов, ул. Анонимная, д. Анон, кв. А", 2), 
    new Order("Виктор", "Викторов", "ViktorSupet@mail.ru", "Город Москва, улица Мира, д.4", 9), 
    new Order("Тестер", "Тестеров", "tester@top.com", "г.Тест, ул. Тестеров, д. -004", 5)
);

renderProducts(productList);
renderOrders(orderList);