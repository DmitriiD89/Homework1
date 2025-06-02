//Задание 1
// const answ = 'js';
// console.log(answ.toUpperCase());

//Задание 2
// const mass = ['abc','def','abc','fgr'];
// const mass2 = [];
// const str = 'abc';
// function searchMassive(){
//     mass.forEach((element) => {
//        if (element.toLowerCase().includes(str.toLowerCase())){
//         mass2.push(element);
// }});
// }
// searchMassive();
// console.log(mass2);

//Задание 3

// const numb = 32.58884;
// console.log(Math.floor(numb));
// console.log(Math.ceil(numb));
// console.log(Math.round(numb));

//Задание 4

// const arr = [52,53,49,77,21,32];
// min = Math.min(...arr); 
// max = Math.max(...arr);
// console.log(min);
// console.log(max);

//Задание 5

// function randomNumber(){
//     let randomNumb = Math.floor(Math.random() * 10);
//     return randomNumb;
// }    
// console.log(randomNumber());
    
//Задание 6

// function convertationNumber(massNumber){
// const arr = [];
//     for (i=0; i<((massNumber/2) - 1); i++) {
//         arr.push(Math.floor(Math.random() * massNumber));
//     };
//     arr.push(massNumber);
//     return arr;
   
// }
// console.log(convertationNumber(10));

//Задание 7

// function twoNumbers(min,max){
//     a = Math.floor( min + ( max - min ) * Math.random());
//  return a;
// }
// console.log(twoNumbers(3,10));

//Задание 8

// let a = new Date();
// console.log(a);

//Задание 9

// let currentDate = new Date();
// currentDate.setDate(73);
// console.log(currentDate);

//Задание 10

// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
//     "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
//     "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
// let myDate = new Date();
// let fullDate = myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " это " + days[myDate.getDate()] + '.' + 'Время' + myDate.getHours() + ':' + myDate.getMinutes();
// console.log(fullDate);