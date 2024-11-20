/*
Задание2:
Напишите функцию, которая принимает любое количество чисел 
и возвращает массив, содержащий только чётные числа. 
console.log(filterEvens(1, 2, 3, 4, 5, 6)); // [2, 4, 6] 
*/

function filterEvens(...numbers) {
    return numbers.filter(num => num % 2 === 0); 
  }
  
console.log(filterEvens(1, 2, 3, 4, 5, 6)); 

  