"use strict"; 
 
//ES6
// Создание класса Product
class Product {
    /**
     * Конструктор класса Product.
     * @param {string} name - наименование продукта 
     * @param {number} price - цена продукта
     */
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    // Создание методов класса.
    make25PercentDiscount() {
        this.price = this.price - (this.price / 100 * 25);
    }
};



// Создание объектов типа Product
const position_1 = new Product('валенки', 3000);
const position_2 = new Product('галоши', 1000);

// Использование объекта и метода.
console.log(position_1);
position_1.make25PercentDiscount();
console.log(position_1);
