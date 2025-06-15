//Задание 1

// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
//  ];
 
//  // Допишите колбэк для sort, изучите, как работает колбэк, в документации
//  console.log(people.sort((a,b) => {
//     return a.age - b.age;
// }));

//задание 2

// function isPositive(num) {
//     // писать код тут
//     return num > 0;
//     }
//     function isMale(person) {
//     // писать код тут
//         return person.gender ==='male'
//     }
//     function filter(arr, ruleFunction) {
//     // писать код тут
//         const result = [];
//         let i;
//         for( i=0; i < arr.length; i++){
//             if (ruleFunction(arr[i])){ 
//                 result.push(arr[i])
//         }};
//         return result;
//     }
    
//     console.log(filter([3, -4, 1, 9], isPositive));
    
//     const people = [
//        {name: 'Глеб', gender: 'male'},
//        {name: 'Анна', gender: 'female'},
//        {name: 'Олег', gender: 'male'},
//        {name: 'Оксана', gender: 'female'}
//     ];
    
//     console.log(filter(people, isMale));

     //Задание 3
    // let timerId = setInterval(() => {
    //     console.log(new Date());
    // }, 3000);
    // setTimeout(() => {
    //     clearInterval(timerId); 
    //         console.log('Прошло 30 секунд');},
    //  30000);

     //Задание 4

    //  function delayForSecond(callback) {
    //     // Код писать можно только внутри этой функции
    //     setTimeout(callback,1000);    
    // }
    // delayForSecond(function () {
    //    console.log('Привет, Глеб!');
    // })

    //Задание 5

    // Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
//         if(cb) {  cb(); }
//     }, 1000)
// }

// // Функция sayHi выводит в консоль приветствие для указанного имени
// function sayHi (name) {
//     console.log(`Привет, ${name}!`);
// }

// Код выше менять нельзя

// Нужно изменить код ниже:
// delayForSecond(()=>sayHi('Глеб'));
  