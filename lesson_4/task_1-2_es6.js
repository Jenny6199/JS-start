"use strict";

// ES6

class Post {
    /**
     * Конструктор класса типа Post.
     * @param {string} author - автор письма 
     * @param {string} text - содержание письма 
     * @param {string} date - дата 
     */
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    // Создание метода класса типа Post.
    edit() {
        this.text = prompt('Введите текст');
    }
};


class AttachedPost extends Post {
    /**
     * Конструктор класса типа AttachedPost
     * @param {string} author - автор письма 
     * @param {string} text - содержание письма
     * @param {string} date - дата
     */
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    };

    // Создание собственного метода класса AttachedPost.
    makeTextHighlighted() {
        this.highlighted = true;
    };
};



// Создание объектов
const post_1 = new Post("Victor", "Lorem ipsum", "05.11.2021");
const a_post =  new AttachedPost("Maksim", "Hello world!", "10.10.2021");

// Проверка
console.log(post_1, a_post);
post_1.edit();
a_post.edit(); // Проверка унаследованного метода.
a_post.makeTextHighlighted(); // Проверка собственного метода.
console.log(post_1, a_post); // Вывод в консоль измененных объектов.
