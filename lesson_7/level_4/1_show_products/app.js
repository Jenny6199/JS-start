"use strict";
/* 
Разметка товара:

<div class="product">
    <div>${здесь_название_товара}</div>
    <img src="${здесь путь до картинки}" alt="">
    <div>${здесь_цена}</div>
    <a href="https://example.com/producs/${здесь_id_товара}">Подробнее</a>
</div>
*/


let aim_block = document.querySelector('.products');
let buttons = document.querySelectorAll('button');
let markup = null;

buttons.forEach(button =>{
    button.addEventListener('click', clickHandler, false);
})

const products = {
    phones: [
        {
            id: 1,
            name: "Смартфон 1",
            price: "23,99 р.",
            imageUrl: "https://picsum.photos/seed/1/200",
        },
        {
            id: 2,
            name: "Смартфон 2",
            price: "11,99 р.",
            imageUrl: "https://picsum.photos/seed/2/200",
        },
        {
            id: 3,
            name: "Смартфон 3",
            price: "22,99 р.",
            imageUrl: "https://picsum.photos/seed/3/200",
        },
    ],

    tablets: [
        {
            id: 4,
            name: "Планшет 4",
            price: "99,99 р.",
            imageUrl: "https://picsum.photos/seed/4/200",
        },
        {
            id: 5,
            name: "Планшет 5",
            price: "44,99 р.",
            imageUrl: "https://picsum.photos/seed/5/200",
        },
    ],

    tv: [
        {
            id: 6,
            name: "Телевизор 6",
            price: "199,99 р.",
            imageUrl: "https://picsum.photos/seed/6/200",
        },
        {
            id: 7,
            name: "Телевизор 7",
            price: "244,99 р.",
            imageUrl: "https://picsum.photos/seed/7/200",
        },
        {
            id: 8,
            name: "Телевизор 8",
            price: "399,99 р.",
            imageUrl: "https://picsum.photos/seed/8/200",
        },
        {
            id: 9,
            name: "Телевизор 9",
            price: "444,99 р.",
            imageUrl: "https://picsum.photos/seed/9/200",
        },
    ],
};


/**
 * Эта функция должна вызываться при клике по кнопкам.
 * @param {MouseEvent} event
 */
function clickHandler(event) {
    //вам нужно очищать содержимое .products
    aim_block.innerHTML =  '';
    //в showCategory надо передать строку с типом категории, тип берите
    //из атрибута data-type у кнопки, по которой кликнули.
    let product_type = event.target.dataset.type;
    showCategory(product_type);
}

/**
 * Функция берет товары (объекты) из соответствующего массива phones,
 * tablets или tv. Генерирует разметку, используя getProductMarkup
 * и вставляет в .products
 * @param {string} category сюда должно прилетать значение атрибута data-type у кнопки,
 * по которой кликнули.
 */
function showCategory(category) {
    let choosed_category_items = products[category];
    choosed_category_items.forEach(item =>{
        aim_block.innerHTML += getProductMarkup(item);
    })
}


/* В комментариях к следующей функции было нагромождение параметров
передаваемого объекта. Вместо этого я передаю в функцию объект,
а к параметрам обращаюсь с помощью шаблонного литерала.
Надеюсь это не будет считаться отступлением от ТЗ.
*/

/**
 * Функция обеспечивает добавление разметки с карточкой товара на страницу.
 * @param {Object} product объект со сведениями о продукте.
 */
function getProductMarkup(product) {
    let markup = `
        <div class = "product">
            <div>${product.name}</div>
            <img src="${product.imageUrl}" alt="img_not_found">
            <div>${product.price}</div>
            <a href="${product.id}">Подробнее</a>
        </div>   `
    return markup
}

// Протестировано - всё работает :)
