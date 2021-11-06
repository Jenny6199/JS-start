//Скрипт содержит объекты и методы относящиеся к вопросам викторины.

class QuestionBlock {
    /**
     * Конструктор класса QuestionBlock 
     * @param {stirng} question - вопрос.
     * @param {string} answer - правильный ответ.
     * @param {string} wrong_1 - ошибочный вариант.
     * @param {string} wrong_2 - ошибочный вариант.
     * @param {string} wrong_3 - ошибочный вариант.
     */
    constructor(question, answer, wrong_1, wrong_2, wrong_3){
        this.question = question;
        this.right_answer = answer;
        this.wrong_1 = wrong_1;
        this.wrong_2 = wrong_2;
        this.wrong_3 = wrong_3;
    }

    /**
     * Метод выводит на экран вопрос и возможные варианты овета.
     * 
     */
    showNewQuestion() {
        console.log("Вопрос: " + this.question);
        console.log(this.wrong_1);
        console.log(this.wrong_2);
        console.log(this.wrong_3);
        console.log(this.right_answer)
    }

};

    
let question = [
    "Сколько месяцев в году?",
    "Какого цвета снег?",
    "Сколько пальцев на руке?",
    "Кто от бабушки ушел и от дедушки ушел?",
    "Во что превращается вода при замерзании?"
];

let answer = [
    "12",
    "белый",
    "5",
    "колобок",
    "лёд"
];

let wrong_answer = [
    ["10", "16", "9"],
    ["красный", "желтый", "розовый"],
    ["7", "10", "4"],
    ["поводок", "дурачок","волчок"],
    ["cвет", "грязь", "камень"]
];