// Скрипт содержит данные относящиеся к игроку.
"use strict";

let player = {
    right_answer: 0,
    mistakes: 0,
    userLog: [],
    userAnsweres: [],

    userSay() {
        let choose = (prompt("Ваш ответ ? (введите ответ или 'q' для выхода)"));
        // Если пользователь отказался от ввода ответа (нажал "отмена").
        if (choose == null) {
            choose = "нет ответа";
        };
        this.userAnsweres.push(choose);
        return choose;
    },

    /**
     * Обнуляет счётчики, очищает массивы с ответами игрока и историей заданных вопросов.
     */
    resetUserProgress() {
        this.right_answer = 0;
        this.mistakes = 0;
        this.userAnsweres = [];
        this.userLog = [];
        used_questions = [];
    }
};