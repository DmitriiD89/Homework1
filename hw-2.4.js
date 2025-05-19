let num = 56;


function tryGuess(){
    
    let answ = prompt('Угадайте число от 1 до 100');
    
    if (num<answ){
    alert('Неверно. Загаданное число меньше')
    } else if(num>answ){
    alert('Загаданное число больше');
    } else {
    alert('Молодец! Угадал')
    }
}

//Задание 1

// function smaller(a,b){
//     if (a >= b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(smaller (10,10));

//Задание 2

// function parity(a){
//     if ( a % 2 == 0 ){
//         return ('Число четное')
//     } else {
//         return ('Число нечетное')
//     }
// }
// console.log(parity(11));

//Задание 3

// function quatro (a) {
//     b= a**2;
//     console.log (b);
// }
// quatro (10);

// function quatroWithReturn(a) {
//     return (a**2);    
// }
// console.log(quatroWithReturn(5));

//Задание 4

// function question (){
//     age = Number(prompt('Сколько вам лет?'));
//     if (age < 0) {
//         alert ('Вы ввели неправильное значение');
//     } else if ( age < 12 ){
//         alert ('Привет друг');
//     } else {
//         alert ('Добро пожаловать');
//     }
// }
// console.log(question());

//Задание 5

// function examination(a,b) {
      
//     if ( (isNaN(a)) && (isNaN(b)) ){
//         return a * b;
//     } else {
//         console.log('Одно или оба значения не являются числом')
//     }

// }
// console.log(examination(3,4));

//Задание 6

// function cube() {
//     n = prompt('Введите число');
    
//     if ( isNaN(n)){
//         console.log('Переданный параметр не является числом');
//     } else {
//         m=n**3;
//         console.log(`${n} в кубе равняется ${m}`);
        
//     }
// }
// console.log(cube());

// Задание 7

const circle = {
    radius: 10,
    getArea(){
        return math.PI * this.radius * this.radius;
    },
    getPerimetr(){
        return 2 * Math.PI * this.radius;
    }
}
const circle2 = {
    radius: 8,  
    getArea(){
        return math.Pi * this.radius * this.radius;
    },
    getPerimetr(){
        return 2 * Math.PI * this.radius;
    }
}


