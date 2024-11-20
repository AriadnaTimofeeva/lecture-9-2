/*
Задание1:
Напишите функцию sum, которая принимает любое количество 
чисел и возвращает их сумму, используя объект arguments.
*/

function sum() {
    let total = 0; 
    // Используем объект arguments для итерации по переданным параметрам
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total; 
}


console.log(sum(1, 2.5, 1/3)); 
