let renderer = {
    
    // Содержит информацию об игровом поле.
    map: "",

    /**
     * Метод формирует игровое поле и положение игрока
     */
    render() {
        for (let row = 0; row < config.rowsCount; row++) {
            for (let col = 0; col < config.colsCount; col++){
                if (player.y === row && player.x === col) {
                    this.map += "o "
                } else {
                    this.map += "x ";       
                };
            };
            this.map += "\n";
        }
        console.log(this.map);
    },

    /**
     * Метод очищает игровое поле.
     */
    clear() {
        // Очистка консоли.
        console.clear();
        // Очистка карты.
        this.map = "";
    },
};