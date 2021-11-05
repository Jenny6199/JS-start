"use strict";
        
// Создание функции-конструктора для объекта Product
/**
 * Конструктор объекта Product
 * @param {string} - name, наименование продукта,
 * @param {number} - price, цена продукта.
 */
function Product(name, price){
    this.name = name;
    this.price = price;
};

// Создание методов для объекта Product в его прототипе.
Product.prototype.make25PercentDiscount = function() {
        this.price = this.price - (this.price/100*25);
};


// Создание объектов типа Product
const tovar_1 = new Product('пылесос', 25000);
const tovar_2 = new Product('шкаф', 18000);

// Использование объекта и метода.
console.log(tovar_1);
tovar_1.make25PercentDiscount();
console.log(tovar_1);
