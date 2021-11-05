"use strict";

// ES5

/**
 * Конструктор объекта типа Post.
 * @param {string} author - автор письма 
 * @param {string} text - содержание письма 
 * @param {string} date - дата 
 */
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date
};

// Создание метода в прототипе объектов типа Post.
Post.prototype.edit = function() { 
    this.text = prompt('Введите текст');
};

/**
 * Конструктор объекта типа AttachedPost
 * @param {string} author - автор письма 
 * @param {string} text - содержание письма
 * @param {string} date - дата
 */
function AttachedPost(author, text, date){
    Post.call(this, author, text, date);
    this.highlighted = false; 
};

// Наследуем прототип от Post (с его методами) и возвращаем
// ссылку на constructor объекту AttachedPost.
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

// Создание собственного метода объектов AttachedPost.
AttachedPost.prototype.makeTextHighlighted = function(){
    this.highlighted = true;
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
