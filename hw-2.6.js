//Задание 1
// const num = [1,5,4,10,0,3];
// for (let index = 0; index < num.length; index++) {
//     if (num[index] === 10){
//         console.log(num[index]);
//         break;
//     }
// 
// }


//Задание 2
// const num = [1,5,4,10,0,3];
// for (let index = 0; index < num.length; index++) {
//     if (num[index] === 4){
//         console.log(index);
        
//     }
    
// }

// Задание 3

// const numbs = [1,3,5,10,20];
// let joinedNumbs = numbs.join(' ');
// console.log(joinedNumbs);

// Задание 4
// let mass = [];
// for (let i = 0; i < 3; i++) {
//     const massive = []
//     for (let i=0; i<3; i++){
//         massive.push(1);
//     }
//     mass.push(massive);
// }
// console.log(mass);

//Задание 5

// const mass = [1,1,1];
// let i = 0;
// for( i=0; i<3; i++ ){

//     mass.push(2);
// }
// console.log(mass);
   

//Задание 6

// const massive = [9,8,7,'a',6,5];
// massive.sort((a,b)=>a-b);
// const mass = massive.filter(Number);
// console.log(mass);

// Задание 7
// let a = +prompt('Угадай число');
// const num = [9,8,7,6,5];
// if (num.includes(a)){
//     alert('Угадал');
// } else {
//     alert('Не угадал');
// }

// Задание 8

// let text = 'abcdef';
// const arr = text.split('');
//  const result= arr.reverse();
//  let nameUs = result.join("");
// console.log(nameUs);

//Задание 9

// const arr = [[1,2,3],[4,5,6]];
// const arr1 = [...arr[0],...arr[1]];

//     console.log(arr1);

//Задание 10

// const arr = [2,8,3,7,4,6,5,5,9];
// for (i=0; i<(arr.length - 1); i++){
//     let sum = arr[i] + arr[i+1]
// console.log(sum);
// }

//Задание 11

// const arr = [2,3,4,5,6];
// const arr2 = arr.map(arr => arr ** 2);
//   console.log(arr2);

//Задание 12
// const arr = ['cvdv','dfbfdg','dfbf'];
// function transform(){
//    return arr.map(i => i.length);
// }
//     console.log(transform());

//Задание 13

// const numbs = [2,5,6,7,-1,-3,6];
// function negativeNumbs(){
//     return numbs.filter(numbs => numbs<0);
// }
// console.log(negativeNumbs());

//Задание 14


// const massive = [];
// for (let i = 0; i < 10; i++) {
//     const arr = Math.floor(Math.random()*10)
//     massive.push(arr);  
// }
// function newArr() {
//    return massive.filter(massive => (massive % 2) == 0);
// }

// console.log(newArr());

//Задание 15
// const massive = [];
// for (let i = 0; i < 6; i++) {
//     const arr = Math.floor(Math.random()*10);
//     massive.push(arr);  
// }
// console.log(massive);
// let sum = massive.reduce((total,number) => total + number,0);
// console.log(sum/6);

