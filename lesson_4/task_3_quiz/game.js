"use strict";

let game = {
    /**
     * Инициализация игры. Приветствие пользователя. Подтверждение начала игры.
     */
    init(){
        let message = 'Предлагаем Вам сыграть в викторину!\nДля победы необходимо ответить на пять вопросов\n';
        console.log(message)
        let get_ready = confirm("Начнем?");
        if (get_ready) {
            game.run();
        } else {
            console.log("Ну чтож, попробуем в другой раз...\nДо свидания!");
        }
    },

    /**
     * Метод выбирает случайный вопрос из списка
     * @returns {number} - индекс вопроса в массиве. 
     */
    getRandomQuestion() {
        // Если индекс вопроса уже использован воспользуемся циклом и попытаемся вычислить еще раз.
        let index_of_question= null;
        do {
            index_of_question = Math.round(Math.random() * (question.length-1));
        } while (used_questions.includes(index_of_question));
        // Если получен индекс неиспользованного вопроса добавляем его в список использованных и возвращаем значение.
        used_questions.push(index_of_question);
        return index_of_question;
    },

    /**
     * Запуск игры. Агрегация функций и методов.
     */
    run(){
        // Основной цикл игры.
        while (true){
            // Количество вопросов задается в цикле.
            let i = 0;
            while (i < 5){
                console.log("Новый вопрос:");
                // Выбор случайного вопроса.
                let j = game.getRandomQuestion();
                // Новый объект "вопрос-ответы".
                let newQuestion = new QuestionBlock(question[j], answer[j], wrong_answer[j][0], wrong_answer[j][1], wrong_answer[j][2]);
                // Вывод вопроса и вариантов ответа в консоль.
                newQuestion.showNewQuestion();
                // Здесь предусмотрен выход из викторины по запросу игрока.
                if (analiser.whatPlayerDo(newQuestion) != "q") {
                   console.clear();
                   i++;
                   continue;
                };
                console.clear();
                alert("Игра завершена по Вашему запросу.");
                break;
            };

            console.log("Игра окончена.");
            console.log("Правильных ответов - " + player.right_answer);
            console.log("Количество ошибок - " + player.mistakes)

            // Запрос у пользователя на повтор игры.
            let lets_repeat = confirm("Хотите сыграть ещё раз?");
            if (lets_repeat){
                console.clear();
                player.resetUserProgress();
                continue;
            } else {
                break;
            }   
        }
        console.log("До свидания!")
    },

};

game.init();