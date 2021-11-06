// Скрипт содержит данные относящиеся к игроку.

let player = {
    right_answer: 0,
    mistakes: 0,
    userAnsweres: [],

    userSay() {
        let choose = (prompt("Ваш ответ ? (введите ответ или 'q' для выхода)")).toLowerCase();
        this.userAnsweres.push(choose);
        return choose;
    },

    /**
     * Обнуляет счётчики и очищает массив с ответами игрока.
     */
    resetUserProgress() {
        this.right_answer = 0;
        this.mistakes = 0;
        this.userAnsweres = [];
    }
};