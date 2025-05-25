console.log('Hello World!');
console.error('This is an error message.');
console.warn('This is a warning message. ');
// string, number, boolean, null, undefined
const name = 'Yllka'
const age = 18
const isStudent = true
const x =null
const y = undefined
console.log( name, age, isStudent, x, y)
// Concatination
console.log('My name is ' + name  +  'and I am '  +   age   +   'years old.');
// Template literals
console.log(`My name is ${name} and I am ${age} years old.`);
// or
const hello = `My name is ${name} and I am ${age} years old.`;
console.log(hello);

const s = 'Hello World';
console.log(s.length); //length of the string 
console.log(s.toUpperCase()); //convert to uppercase
console.log(s.toLowerCase()); //Convert to lowercase
console.log(s.substring(0, 5).toUpperCase()); //fillon nga index-i i pare i fjales dhe mabron tek i 5-ti ne kete rast H=1 E=2 L=3 L=4
//  O=5 space=6... dhe e shkruan me shkronja te medha per shkak te  toUpperCase

//Arrays - variables that hold multiple values
const fruits = ['Apple', 'Banana','Orange', 'Mango'];
console.log(fruits [0]);//Accessing the first element of the array - Apple
console.log(fruits [1]);//Accessing the second element of the array - Banana ...
fruits[4] = 'Pineapple'; //Adding a new element to the array by specifying the index
console.log(fruits); // ['Apple' 'Banana', 'Orange', 'Mango', 'Pineapple']
fruits.push('Grapes'); //Adding a new element to the end of the array if we dont want to specify the index
fruits.unshift('Strawberry'); //Adding a new element to the beginning of the array
console.log(fruits); // ['Strawberry', 'Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Grapes']
fruits.pop();//Removing the last element of the array
fruits.shift();//Removing the first element of the array
fruits.splice(1, 2);//Removing elements from the array starting from index 1 and removing 2 elements
console.log(fruits); // ['Strawberry' , 'Mango', 'Pineapple', 'Grapes']
fruits.splice(1, 0, 'kiwi', 'Peach'); //Adding new elements to the array starting from index 1 and removing 0 elements
console.log(Array .isArray(fruits)); //checking if the variable is an array
console.log(fruits.indexOf('Mango')); //Finding thr index of an element in the array 
//object literals
const person = {
    firstName: 'Yllka',
    lastName: 'Shehu',
    age: 18,
    isStudent: true,
    hobbies: ['reading', 'coding', 'traveling'],
    address:{
        city: 'Prishtina',
        country: 'Kosova',
    }

}
console.log(person); //Printing the object
console.log(person. firstName); //Accessing the first name of the person
console.log(person.hobbies [1]); //Accessing the second hobby of the person

//for in loop 
for(let i=0; i<10; i++){
console.log(i); //Printing the numbers from 0 to 9
console.log('For loop number:${i}'); //printing the sentence (for loop)with the number 
}
//While
let i = 0;
while(i < 10){
    console.log('While loop number:${i}'); //printing the sentence (while loop)with the number 
    i++;
}
//if else statement 
const b = 9
if(b == 10){
    console.log('b is equal to 10,'); //checking if b is equal to 10
} else if(b > 10) {
    console.log('b is greater than 10'); //checking if b is greater than 10
}
 else {
    console.log('b is less than 10'); //checking if b is less than 10
}
const d =4 
const e = 100
if(d > 5 || e > 10) {                // ||-or operator &&-and operator ?-then operator :-else operator
    console.log('d is more than 5 or e is more than 10') 
}
