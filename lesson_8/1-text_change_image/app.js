'use strict';
// Сохраняем в переменную ссылку на коллекцию кнопок.
let buttons = document.querySelectorAll('button');
// Каждой кнопке добавляем обработчик события по 'клику'
buttons.forEach(product_button => {
    product_button.addEventListener('click', handleClick, true);
})

/**
 * Функция обрабатывает клик по кнопке в карточке товара и попеременно вызывает
 * функции для показа или скрытия текста о товаре.
 * @param {MouseEvent} clickedButtonEvent 
 */
function handleClick(event) {
    // Получаем ссылку на объект из события.
    const cardNode = event.target.parentNode
    // Cоздаем объект
    const card = {
        wrap: cardNode, 
        img: cardNode.querySelector('img'),
        productName: cardNode.querySelector('.productName'),
        button: cardNode.querySelector('button'),
    };
    // Получаем текст на кнопке
    let button_text = card.button.textContent;
    if (button_text == 'Подробнее') { 
        showMoreText(card);
    } else if (button_text == "Отмена") {
        hideMoreText(card);
    }
}

/**
 * Функция скрывает текст с описанием товара.
 * @param {Object} card 
 */
function hideMoreText(card) {
    card.img.style.display = 'block'
    let moreText = card.wrap.querySelector('.desc');
    card.wrap.removeChild(moreText);
    card.button.textContent = 'Подробнее';
}

/**
 * Функция показывает текст с описанием товара.
 * @param {Object} card 
 */
function showMoreText(card) {
    card.img.style.display = 'none';
    let moreText = 'Более подробное описание товара, пожалуйста ознакомтесь';
    card.productName.insertAdjacentHTML('afterend', `<div class="desc">${moreText}</div>`);
    card.button.textContent = 'Отмена';
}
