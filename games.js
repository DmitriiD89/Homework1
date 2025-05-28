//Игра 1

// function tryGuess() {
//     const guessNumber = Math.floor(Math.random() * 100) + 1;
//     while (answerUser == guessNumber) {
//         let answerUser = prompt('Угадайте число от 1 до 100');
//         {
//             if (guessNumber < answerUser) {
//                 alert('Неверно. Загаданное число меньше')
                
//                 } else if (guessNumber > User) {
//                     alert('Загаданное число больше');
//                 } else {
//                     alert('Молодец! Угадал')
//                 }
//             }
//         }
//     }

    //Игра 2

    function easySum(){
        const firstNumber = Math.floor(Math.random() * 10);
        const secondNumber = Math.floor(Math.random() * 10);
        const signs = ['+', '-', '*', '/'];
        const randomIndex = Math.floor(Math.random() * signs.length);
        console.log(firstNumber + signs[randomIndex] + secondNumber);
        switch(signs[randomIndex]){
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
        if (userAnswer == result){
            prompt('Верно');
        } else {
            prompt('Неверно')
        }
          
    }
   