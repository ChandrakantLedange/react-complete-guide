//----- variables ------
//var,let and const

var name = "Smith";
name = "John";
console.log(name);

let name2 = "Doe";
name2 = "Ganesh";
console.log(name2);

// const name3 = "Ana";
// name3 = "Ana joe"; //Type error assignment to constant variable
// console.log(name3);

//----- Function and arrow function------
//Normal function
function greeting(name) {
  console.log("Good morning", name);
}
greeting("Mahesh");

//Arrow function
const message = (name) => {
  console.log("Good afternoon", name);
};
message("chandu");

//if the argument is only one then code will be shorten
const greetMsg = (name) => console.log("Good evening", name);
greetMsg("Ganesh");

//---- Exports and imports -----
// the any file/function/method/object exports with default keyword
//we can import those with giving any name
//Ex.
// function mul(){
//     console.log("logic goes here")
// }
// export default mul;
// const sum=()=>{
//     console.log("some logic")
// }
// export default sum;

//import mul from '/path/mul.js'
//import multiplication from '/path/mul.js'
//import add from '/path/sum.js'
//import addition from '/path/sum.js'

//but the those are exported without default keyword
//we have to use same/exact name which we have given

//Ex.
// function mul(){
//     console.log("logic goes here")
// }
// export  mul;
// const sum=()=>{
//     console.log("some logic")
// }
// export sum;

//import {mul} from '/path/mul.js'
//import {mul as multiplication} from '/path/mul.js'/
//import {add} from '/path/sum.js'

// ----- class in javsacript -----
// class Parent {
//   constructor() {
//     this.name = "Jitendra";
//   }
//   printMyName() {
//     console.log(this.name);
//   }
// }

// class Child extends Parent {
//   constructor() {
//     super();
//     this.age = 22;
//   }
//   printAge() {
//     console.log(this.age);
//   }
// }

// const child = new Child();
// child.printMyName(); //jitendra
// child.printAge(); //22

// ---- classes, properties and methods without this keyword using ES7 features ---
//Notice that there is no this, constructor and super in below
class Parent {
  name = "Jitendra";
  printMyName = () => {
    console.log(this.name);
  };
}

class Child extends Parent {
  age = 22;
  printAge = () => {
    console.log(this.age);
  };
}

const child = new Child();
child.printMyName(); //jitendra
child.printAge(); //22

// --- Spread and Rest operator ---
//Both are denoted by ...
//Spread -> Used to split up  array elements or object properties
const number = [1, 2, 3];
const newNumbers = [...number, 4];
console.log(newNumbers);

const obj = {
  name: "kiran",
};
const newObj = {
  ...obj,
  age: 23,
};

console.log(newObj);

//Rest -> used to merge a list of function arguments into an array
//here we can apply any array method on arguments
const filterNum = (...args) => {
  return args.filter((ele) => ele > 20);
};

console.log(filterNum(10, 20, 30, 40));

//---- Destructuring ---
//Easily extract array elements or object properties and store them in variables.
//Array
const arr = [100, 200, 300, 400];
[num1, num2] = arr; //100,200
// [num1, , num2] = arr;//300
console.log(num1);
console.log(num2);

//below example will not work in normal js
// const personObj = {
//   name: "tinu",
//   age: 20,
//   gender: "Male",
// };
// {name} = personObj;
// console.log(name)//tinu
// console.log(age)//undefined

//---- Primitive and Reference Types ----
//Primitive types - number,string,boolean..
let myAge = 42;

let myNewAge = myAge;
myAge = 43;
console.log(myNewAge);

//Reference type - array , object.
const perObj = {
  name: "Chinmay",
};

const newPerObj = perObj;
perObj.name = "chandrakant";
console.log(newPerObj);

//-- Array Methods ---
//Map - this method is used to do the manupulation with each array item and returns new array.
const numArr = [1, 2, 3];
const doubledArray = number.map((num) => {
  return num * 2;
});
console.log(doubledArray); //[2,4,6]

//-- for more array methods "https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8199160#questions"

//Exercise
//A function takes array as an argument and return array of an object
//input - [1,2,3]
//expected output - [{val:1},{val:2},{val:3}]

function transformIntObj(arr) {
  return arr.map((num) => {
    return { val: num };
  });
}
let input = [1, 2, 3];
console.log(transformIntObj(input));
