"use strict";

// Содержит методы анализа ответов игрока.
let analiser = {
    whatPlayerDo(newQuestion) {
        let get_answer = player.userSay();
        if (get_answer.toLowerCase() == "q"){
            return get_answer;
        } 
        if (get_answer == newQuestion.right_answer){
            alert('Правильный ответ!');
            player.right_answer++;
        } else {
            alert('Вы ошиблись. Правильный ответ - ' + newQuestion.right_answer);
            player.mistakes++;
        }
        // Сохраняем историю заданных вопросов.
        player.userLog.push(newQuestion);
        return;
    }
}