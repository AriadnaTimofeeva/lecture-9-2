/*
Задание4:
У вас есть функция greet, которая принимает имя 
и выводит приветственное сообщение. 
Напишите, как вы могли бы использовать методы call, apply, и bind 
для вызова этой функции с контекстом объекта person.
const person = { name: 'Alice' };  
*/

function greet(greeting) {
    console.log(`${greeting}, my name is ${this.name}!`);
  }
  
  const person = { name: 'Alice' };
      
  // через call:
  greet.call(person, 'Hello'); 
  
  // через apply:
  greet.apply(person, ['Hi']); 
  
  // через bind:
  const greetAlice = greet.bind(person);
  greetAlice('Greetings'); 
  