//Игра "Угадай число"

function tryGuess() {
    const guessNumber = Math.floor(Math.random() * 100) + 1;
    let answerUser;
    while (answerUser != guessNumber) {
        let answerUser = prompt('Угадайте число от 1 до 100');
        {
            if (guessNumber < answerUser) {
                alert('Неверно. Загаданное число меньше')
            } else if (guessNumber > answerUser) {
                alert('Загаданное число больше');
            } else {
                alert('Молодец! Угадал');
                break;
            }
        }
    }
}

//Игра "Простая арифметика"

function easySum() {
    const firstNumber = Math.floor(Math.random() * 10);
    const secondNumber = Math.floor(Math.random() * 10);
    const signs = ['+', '-', '*', '/'];
    const randomIndex = Math.floor(Math.random() * signs.length);
    console.log(firstNumber + signs[randomIndex] + secondNumber);
    switch (signs[randomIndex]) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
    };
    const userAnswer = prompt(`Чему равно ${firstNumber + signs[randomIndex] + secondNumber}`)
    if (userAnswer == result) {
        alert('Верно');
    } else {
        alert('Неверно')
    }

}

//Игра "Переверни текст"

function turnTextOver(){
    userAnswer = prompt('Введите слово или текст');
    let splitText = userAnswer.split('');
    let reversText = splitText.reverse();
    let joinText = reversText.join('');
    alert(joinText);
}


// Игра "простая Викторина"

function easyQuiz(){
    const quiz = [
        {
            question: "Какого цвета небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];
    let i=0;
    let n = 0;
    for (i = 0; i < quiz.length; i++){
        let userAnsw = prompt(`Ответьте на вопрос:${quiz[i].question}: ${quiz[i].options}`);
        if (userAnsw == quiz[i].correctAnswer){
            n++;
        } 
    }
    alert(`Количество правильных ответов: ${n}`); 
};

//Камень, ножницы, бумага

function stoneScissorsPaper(){
    const arr = ['камень','ножницы','бумага'];
    let i = Math.floor(Math.random() * 3);
    let userAnswer = prompt('Выберете: 1.Камень 2.Ножницы 3.Бумага');
    if (userAnswer.toLowerCase() === arr[i].toLowerCase()){
        alert('Ничья') 
    } else if (userAnswer.toLowerCase()==='камень' && arr[i].toLowerCase()==='бумага'){
        alert('Проигрыш');
    } else if (userAnswer.toLowerCase()==='бумага' && arr[i].toLowerCase()==='ножницы'){
        alert('Проигрыш');  
    } else if (userAnswer.toLowerCase()==='ножницы' && arr[i].toLowerCase()==='камень'){
            alert('Проигрыш');
    } else{
        alert('Победа');
    }
    alert(`Выбор компьютера был: ${arr[i]}`);
    };
