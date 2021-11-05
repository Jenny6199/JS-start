let mover = {
    /**
     * Получает направление от пользователя.
     * @returns {int} - возвращает направление движения.
     */
    getDirection() {
        const avalibleDirections = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            let direction = parseInt(prompt("Введите число (1- влево и вниз, 2-вниз, 3 вправо и вниз, 4-влево, 6-вправо, 7-влево и вверх, 8-вверх, 9-вправо и вверх), куда вы хотите переместить игрока. Отмена для выхода."));
            if (isNaN(direction)){
                return null;
            }
            if (!avalibleDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел 1, 2, 3, 4, 6, 7, 8 или 9');
                continue;
            };
            return direction;
        };
    },

    /**
     * Определяет позицию игрока в зависимости от полученного значения.
     * @param {int} direction Направление движения игрока.
     * @returns {{x: int, y: int}} Следующая позиция игрока. 
     */
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        // Добавлены варианты передвижения игрока по полю.
        // Добавлены ограничения передвижения игрока при достижении границ карты.
        switch (direction) {
            case 1:
                if (nextPosition.x != 0 && nextPosition.y != (config.rowsCount - 1)) {
                    nextPosition.y++;
                    nextPosition.x--;
                };
                break;
            case 2:
                if (nextPosition.y != config.colsCount - 1) {
                    nextPosition.y++;
                };
                break;
            case 3:
                if (nextPosition.x != (config.rowsCount - 1) && nextPosition.y != (config.colsCount - 1)) {
                    nextPosition.y++;
                    nextPosition.x++;                    
                };
                break;
            case 4:
                if (nextPosition.x != 0) {
                    nextPosition.x--;                    
                };
                break;
            case 6:
                if (nextPosition.x != (config.rowsCount - 1)) {
                    nextPosition.x++;                    
                };
                break;
            case 7:
                if (nextPosition.x != 0 && nextPosition.y != 0) {
                    nextPosition.y--;
                    nextPosition.x--;
                };
                break;
            case 8:
                if (nextPosition.y != 0) {
                    nextPosition.y--;                    
                };
                break;
            case 9:
                if (nextPosition.y != 0 && nextPosition.x != (config.rowsCount - 1)) {
                    nextPosition.y--;
                    nextPosition.x++;                    
                };
                break;
        }
    return nextPosition;
    },

};