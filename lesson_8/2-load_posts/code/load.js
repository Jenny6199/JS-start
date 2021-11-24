'use strict';

/*  
Ссылка на целевой блок. В начале он находится в пределах viewport,
затем будет методично вымещаться из него вниз вставляющимися постами.
В дальнейшем, при прокрутке, как только граница блока будет достигать 
зоны viewport произойдет вставка нового поста.
*/
let scrollCheck = document.querySelector('.scrollCheck');

/**
 * Инициализация. Заполнение страницы постами.
 */
function init() {
    // Рекурсивный вызов init позволяет не обращаться к циклу.
    if (window.innerHeight === document.body.offsetHeight) {
        insertPost();
        init();
    }
}

/**
 * Функция вставляет один пост на страницу.
 */
 function insertPost() {
    scrollCheck.insertAdjacentHTML('beforebegin', getPostMarkup());
}

/**
 * Функция возвращает html-разметку для одного поста.
 * @returns {string} html-разметка одного поста
 */
function getPostMarkup() {
    let num = Date.now();
    return `<div class="post">
        <img src="https://picsum.photos/200/300?random=${num}">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sapiente suscipit aut? Veniam perspiciatis esse nesciunt ipsum numquam harum velit cumque libero provident voluptatibus iste, alias minus mollitia magni beatae dolor sunt accusantium quidem ipsa exercitationem repellendus reiciendis eaque? Iusto veritatis harum illo tenetur quam explicabo temporibus eum odit, reprehenderit unde maxime sequi incidunt atque beatae accusamus vero officiis dignissimos quasi libero ex ducimus labore asperiores iure. Unde id pariatur eius! Reiciendis similique aperiam quo consequuntur explicabo, enim, reprehenderit aspernatur, vel magni dolor voluptatem maiores quis quam odit deserunt eaque nemo autem optio? Reprehenderit cupiditate nisi nostrum exercitationem adipisci, repudiandae odio ab temporibus dolores, sunt repellat inventore ad fugiat praesentium debitis ipsam deleniti eius eligendi, nobis delectus doloremque mollitia? Quisquam sapiente similique officia officiis laudantium deserunt accusantium alias perspiciatis dolore illum. Rem blanditiis, optio exercitationem ipsam hic laudantium accusamus officiis iste sequi totam ullam, quam sunt eos a commodi modi excepturi! Ex earum deserunt possimus hic inventore sint impedit numquam veritatis harum tempore aut, velit quae maxime aliquid optio consequuntur quam dignissimos explicabo nam fugit temporibus iste aspernatur quisquam. In fugiat aut qui eaque? Aliquam consectetur minus ipsum numquam. Rerum illum illo sit repellat expedita doloribus excepturi nobis nihil! Ratione asperiores reprehenderit velit natus, sunt est, non suscipit impedit culpa dolore molestiae commodi. Dolorem reprehenderit eius, hic similique vel ullam eum eveniet asperiores aspernatur dicta neque nostrum nam quo! Dolorum fugit nobis id cum laborum magnam. Qui dolor, consectetur provident et ea quae dolore necessitatibus assumenda beatae hic odit molestias saepe mollitia! Suscipit quae molestias iure at laboriosam, similique necessitatibus ipsam dolores perspiciatis! Soluta atque vero at, sit fugiat vitae nulla sapiente accusantium, quas maxime nesciunt tempora sed reprehenderit ut. Illum, tenetur ipsam corporis reiciendis similique harum sequi quas voluptate tempore, perferendis dolore, suscipit est incidunt expedita rerum quo. Consectetur ab placeat libero tempora. Beatae soluta nihil dolore? Laboriosam itaque iste hic modi, natus adipisci totam porro voluptatibus asperiores amet consequatur quidem quasi maxime repellat error delectus sapiente. Repellendus, totam, illo rerum non enim assumenda corporis fuga molestias quibusdam recusandae a amet accusantium at, velit adipisci quas mollitia eligendi alias est voluptatum temporibus beatae molestiae? Dolores pariatur quisquam excepturi hic dignissimos illum voluptas, asperiores deserunt quos a quod culpa autem nemo veniam molestiae maiores fuga provident quam quibusdam tenetur repellat necessitatibus deleniti. Earum itaque similique magni suscipit voluptatum, soluta voluptate ratione quis vero nesciunt pariatur perferendis, odit quaerat, doloribus quia.
    </div>`;
}

/* 
Первоначально запускаем init. Так как вызов происходит рекурсивно 
- страница заполняется постами полностью. (При данном размере - 3 поста)
Затем вызов insertPost обеспечивает обработчик события.
insertPost каждый раз добавляет один пост.
Разметку для insertPost обеспечивает функция getPostMarkup.
Убрал из нее counter и воспользовался текущим временем (его уже не повторить).
Таким образом как только целевой блок поднимается до границы области видимости
вставляется еще один пост.
*/
init();
document.addEventListener('scroll', function(event) {
    if (scrollCheck.getBoundingClientRect().top <= window.innerHeight) {
        insertPost();
    }
});
// Все работает.