"use strict";

let game = {
    /**
     * Запуск игры.
     */
    run() {
        while(true) {
            // Пользователь вводит направление следующего хода.
            const direction = mover.getDirection();
            if (direction === null) {
                console.log("Игра завершена.")
                return;
            };

            const nextPoint = mover.getNextPosition(direction);
            renderer.clear();
            player.move(nextPoint);
            renderer.render();
        };
    },
    
    /**
     * Инициализирует игру.
     */
    init() {
        console.log("Положение игрока в консоли отмечено символом 'o'.")
        renderer.render();
        console.log("Для начала игры введите game.run() и нажмите Enter.")
    },
};

game.init();