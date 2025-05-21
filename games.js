//Игра 1

function tryGuess() {
    const guessNumber = Math.floor(Math.random() * 100) + 1;
    while (answerUser == guessNumber) {
        let answerUser = prompt('Угадайте число от 1 до 100');
        {
            if (guessNumber < answerUser) {
                alert('Неверно. Загаданное число меньше')
                
                } else if (guessNumber > User) {
                    alert('Загаданное число больше');
                } else {
                    alert('Молодец! Угадал')
                }
            }
        }
    }
