"use strict";

/**
 * Объект игрока, здесь будут методы и свойства
 * связанные с положением игрока на поле.
 * @property {int} x - координата X.
 * @property {int} y - координата Y.
 */
const player = {
    x: 0,
    y: 0,

    /**
     * Обеспчивает передвижение игрока в заданном
     * направлении.
     * @param {{x: int, y:int}} nextPoint - следующая позиция игрока. 
     */
    move(nextPoint){
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    },
};

