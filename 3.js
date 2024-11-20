/*
Задание3:
Что будет выведено в консоль? 
В случае, если происходит потеря контекста, то какое решение будет верным?
*/

//до - будет выводиться undefined:
const obj = { 
    name: 'Object', 
    getName: function () { 
     return this.name; 
    } 
   }; 
   
   const getName = obj.getName; 
   console.log(getName());

// после - будет выводиться Object:
// решение = добавить bind() для привязки:
const getName1 = obj.getName.bind(obj);
console.log(getName1()); 


 