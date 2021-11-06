let game = {
    run(){
        while (true){
            // Цикл из пяти вопросов.
            let i = 0;
            while (i < 5){
                console.log("Новый вопрос:");
                let newQuestion = new QuestionBlock(question[i], answer[i], wrong_answer[i][0], wrong_answer[i][1], wrong_answer[i][2]);
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
            console.log("Ваши ответы - " + player.userAnsweres);
            console.log("Правильных ответов - " + player.right_answer);

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
};

game.init();