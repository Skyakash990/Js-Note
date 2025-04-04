// let a=8;

// console.log(--a);
// console.log(a--);
// console.log(a);
// var a=10;
// var a=1;
// console.log(a);
// let b=33;
// let b=22;
// const w=35;
// const w=66;

//////////////////////////////////////////////-------------->STRINGIFY - PARSE

// let jsonString = '{"name":"Akash","age":"21"}';
// let obj=JSON.parse(jsonString);
// console.log(obj);

// let object={name:"Akash",age:21};
// let string1=JSON.stringify(object);
// console.log(string1);

///////////////////////-------------------------------->DIFFERENCE LET VAR CONST BASIS ON SCOPE

// on the basis of scope->var(function scope),let(block scope), const(block scope)

// on the basis of declaring->function scope declaring,block scope pe declare, 

// class car{
//     constructor(model,price,color,year){
//         this.m=model;
//         this.price=price;
//         this.color=color;
//         this.r=year;
//     }
//     get carInfo(){
//         return `${this.model} ${this.price} ${this.color} ${this.year}`;
//     }
// }
// let obj= new car("Porce","30lac","black",2000);
// console.log(obj);



///////////////////////-------------------------------->CLASSES


// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//     get name(){
//       return this.name;
//     }
//     get age(){
//       return this.age;
//     }
  
//     set age(age) {
//      return this.age = age;
//     }
//   }
///////////////////////-------------------------------->CLASSES AND OBJECTS
//   class Student extends Person {
//     study(){
//       console.log(`${this.name} is studying`);
//     }
//   }
  
//   class Teacher extends Person {
//     teach(){
//       console.log(`${this.name} is teaching`);
//     }
//   }
  
//   const person = new Person("John", 25);
//   console.log(person.name);
  
//   person.age=30;
//   console.log(person.age);
  
//   const student = new Student("Alice", 22);
//   student.study(); 
  
//   const teacher = new Teacher("Bob", 40);
//   teacher.teach(); 
  
//your JS code here. If required.

// const student = {
//   name: "John",
// };

// const myObj = { name: "John", age: 25, city: "New York" };
// Object.prototype.getKeys=function(){
//   return Object.keys(this);
// }

// // function getKeys(obj) {
// // }

// console.log(myObj.getKeys()); 
  
  



///////////////////////-------------------------------->CLASSES IN JS
// class Car{
// 	constructor(make,model){
// 		this.make=make;
// 		this.model=model;
// 	}
// }
// Car.prototype.getMakeModel=function(){
//     return `${this.make} ${this.model}`;
// }


// class SportsCar extends Car{
// 	constructor(make,model,topSpeed){
// 		super(make,model);
// 		this.topSpeed=topSpeed;
// 	}
// }
// SportsCar.prototype.getTopSpeed=function(){
//     return this.topSpeed;
// }






//   // Do not change the code below this line
//   window.Person = Person;
//   window.Student = Student;
//   window.Teacher = Teacher;
  

// document.querySelector(".title")
// document.querySelector("#heading")
// document.querySelector(h1)

// console.log(document.querySelectorAll(".div>.list1>.item"));
// const obj=[
//   {
//   name:"akash",
//   age:21,
//   },
//   {
//     name:"nirav",
//     age:24,
//   },
//   {
//     name:"bhargav",
//     age:22,
//   }

// ]
///////////////////////-------------------------------->DOM
// let index=0;
// function crtStudent(){
//   // let btn=document.getElementById("bt");
//   let cont = document.querySelector(".container");
//   if(index < obj.length){
//     let student=obj[index];
//     // obj.forEach(student => {
//       let studcont=document.createElement("div");
//     cont.appendChild(studcont)
    
//     studcont.style.display="flex ";
//     studcont.style.alignItems="center";
//     studcont.style.gap="10px";
    
//     let name=document.createElement("p");
//     name.textContent=`Name:${student.name}`;
//     name.classList.add("red");

//     let age=document.createElement("span");
//     age.textContent=`Age:${student.age}`;
//     age.classList.add("red");
//     studcont.append(name,age);
//     index++;
//     // });
//   }
// }
///////////////////////-------------------------------->EVENTS KEYUP-DOWN 
// let inp=document.getElementById("uname");

// inp.addEventListener("keydown",(e)=>{
//   // console.log("e.key",e.key);
//   console.log("e.key",e.code);
  
// })
///////////////////////-------------------------------->EVENT BUBBLING-CAPTURING
//widndow is clicked
//body is clicked
//document is clicked
// document.querySelector("#grand-parent").addEventListener("click",()=>{
//   console.log("gp is clicked");
// },true);//capture event
// document.querySelector("#grand-parent").addEventListener("click",()=>{
//   console.log("parent is clicked");
// },false);//bubble
// document.querySelector("#grand-parent").addEventListener("click",()=>{
//   console.log("child is clicked");
// },true);//capture
// document.querySelector("body").addEventListener("click",()=>{
//   console.log("body is clicked");
// },true);//capture
// document.addEventListener("click",()=>{
//   console.log("document is clicked");
// });
// window.addEventListener("click",()=>{
//   console.log("window is clicked");
// },true);

//window is clicked
//body is clicked
//gp is clicked
//child is clicked
//parent is clicked
//document is clicked

// const getSumBtn = document.createElement("button");
// getSumBtn.append("Get Total Price");
// document.body.appendChild(getSumBtn);

// const getSum = () => {
// //Add your code here
// 	let sum=0;
// 	let price=document.querySelectorAll(".price");
// 	price.forEach(pr=>{
// 		let total=pr+sum;
// 		sum++;
// 	})
// 	let ttl=document.createElement("p");
// 	ttl.innerText=total;
// 	document.body.appendChild(ttl);
	
  
// };

// getSumBtn.addEventListener("click", getSum);
// console.log(this.name);

// let obje={
//   name:"harsh", 
//   printName:function(age){
//     console.log(this.name,age);
//   }
// }
// console.log(this.name);
// const name1={
//   name:"Akash",
// }

// obje.printName(24);
// obje.printName.call(name1,21);
// obje.printName(25);


// class Dog{
//   constructor(name,breed){
//     this.name=name;
//     this.breed=breed;
//   }
//   get fullName(){
//     return `${this.name} ${this.breed}`;
//   }
//   set fullName(name){
//     let arr=name.split(" ");
//     this.name=arr[0];
//     this.breed=arr[1];
//   }
// }
// const dog=new Dog("dog1","Jerman");
// console.log(dog);

// console.log("Start");
// setTimeout(()=>{
//   console.log("setTimeout 1");
// },10000);
// console.log("Middle");
// setTimeout(()=>{
//   console.log("setTimeout 2");
  
// },5000);
// console.log("end");













// BFE.DEV ///////////////////////----------------->
// let mapTypeToName = new Map([
//   [Map, 'map'],
//   [Array, 'array'],
//   [ArrayBuffer, 'arraybuffer'],
//   [Set, 'set'],
//   [Date, 'date'],
//   [Function, 'function'],
//   [Number, 'number'],
//   [String, 'string'],
//   [Boolean, 'boolean']
// ]);
// function detectType(data) {
//   if (typeof data !== 'object') {
//     return typeof data;
//   } else {
//     if (data === null) return 'null';
//     for ([type, name] of mapTypeToName) {
//      if (data instanceof type) return name;
//     }
//     return 'object';
//   }
// }
// console.log(detectType(1)); // 'number'
// console.log(detectType(new Map())) // 'map'
// console.log(detectType([])) // 'array'
// console.log(detectType(null)) // 'null'

///////////////////////-----------------> SET TIMEOUT

// let timeoutIds = [];

// timeoutIds.push(setTimeout(() => console.log("To1"), 10000));
// timeoutIds.push(setTimeout(() => console.log("To2"), 10000));
// timeoutIds.push(setTimeout(() => console.log("To3"), 10000));

// function clearAllTimeouts() {
//   timeoutIds.forEach(id => clearTimeout(id));
//   timeoutIds = []; // Reset the array after clearing
//   console.log("All Cleared");
// }

// // Call the function to clear all timeouts
// clearAllTimeouts();





// Insertion sort

// function insertionSort(arr){
//   for(let i=0;i<arr.length;i++){
//     for(let j=0;j<i;j++){
//       const insert=arr[i];
//       const curr=arr[j];
//       if(curr>insert){
//         [arr[i],arr[j]]=[arr[j],arr[i]];
//       }
//     }
//   }
//   return arr;
// }
// let arr1=[22,13,43,11,23];

// console.log(insertionSort(arr1));

///////////////////////----------------->PROMISES IN JS

//PROMISE:it is an proxy value that will eventually come after operation
// promise state->resolve(fulfilled), reject(failure), pending(not clear),settle()

// let promise=new Promise((resolve,reject)=>{
//   resolve(44);
//   // reject("rejected");
// }).then((res)=>{
//   console.log(res);
// });

// console.log(promise);

// console.log("start");
// const p = () =>
//   new Promise((resolve,reject)=>{
//   console.log(1);
//   reject("fail");
// })
// console.log("middle");
// p().then((res)=>{
//   console.log(res);
// }).finally(()=>{
//   console.log("finally");
// }).catch((err)=>{
//   console.log("error occured" + err);
  
// })

// console.log("end");

// setTimeout(()=>{
//   console.log("st1");
  
// },0);



// let p=new Promise((resolve,reject)=>{
//   resolve("success");
// }).then((res)=>{
//   console.log(res);  
// })//promise goes to microtask so microtasc first executes after setTimeout execute



///////////////////////----------------->REST OPERATOR
// const sum = (...numbers) => {
//     return numbers.reduce((acc, num) => acc + num, 0);
// };

// console.log(sum(1, 2, 3,4,5,6,7,8,9)); 



///////////////////////----------------->SPREAD OPERATOR
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5];
// console.log(arr2);



///////////////////////----------------->MAP
// const map = new Map();
// map.set('name', 'John');
// map.set('age', 30);

// console.log(map);






// const p1 =new Promise((resolve,reject)=>{
//     resolve(1);
// })
// const p2 =new Promise((resolve,reject)=>{
//     resolve(2);
// })
// const p3 =new Promise((resolve,reject)=>{
//     resolve(3);
// })
// const p4 =new Promise((resolve,reject)=>{
//     resolve(4);
//     p2.then((res)=>console.log(res)).then(()=>{
//         p3.then((res)=>console.log(res));
//     })
// });
// p1.then((res)=>console.log(res));
// p4.then((res)=>console.log(res));







///////////////////////----------------->PROMISE


// console.log("Akash Nandoliya")
// const p1= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promse resolved value 1");
//     },5000);
// })
// const p2= new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//             resolve("promse resolved value 2");
//       },10000);
// })
// async function handlePromise(){
//       console.log("helo world");
//       const val1=await p1;
//       console.log("hello javascript");
//       console.log(val1);
//       const val2=await p2;         //here that is not wait for 10s because that is resolved o first await
//       console.log("hello async javascript");
//       console.log(val2);    
// }
// handlePromise();
// console.log("Akash Nandoliya")
// console.log(Promise.prototype);

// hello world
// hello javascript -5 delay
// promise resolved value 1
// hello async javascript -10s delay
// promise resolved value 2

// const data=fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())//if here i console that return me promise
//       .then(json => console.log(json)) // here i get actual data
// console.log(data);





















// function parent(){
// }
// parent.prototype.greet=
// function(){
//     console.log(this.name);
    
// }
// function child(name){
//     this.name=name;
// }
// child.prototype=Object.create(parent.prototype);

// var childObj=new child('alice');
// console.log(childObj);

// childObj.greet();


// function Person(name) {
//     this.name = name;
// }

// Person.prototype.greet = function() {
//     console.log(`Hello, my name is ${this.name}.`);
// }

// function Student(name, major) {
//     Person.call(this, name);
//     this.major = major;
//     function akash(){
//         console.log("akki");
        
//     }
//     akash();
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.greet = function() {
//     console.log(`Hello, my name is ${this.name} and I'm a ${this.major} major.`);
// }

// const person = new Person('Alice');
// const student = new Student('Bob', 'Computer Science');

// console.log(person);
// console.log(student);


// person.greet();
// student.greet();


///////////////////////----------------->REACT

//REACT HOOKS
//1)useState
//2)useEffect
//2)useContex
////////////////////////////////---------------------> OBJECT METHODs
// const car={
//     Brand:"Toyota",
//     Year:"2020",
//     getDetails:function(){
//         console.log("Brand:"+ this.Brand + " Year:" + this.Year);
//     }
// }
// // car.getDetails();
// function objectDetails(obj){
//     console.log(Object.entries(obj));
// }
// objectDetails(car);

// Object.assign(target, ...sources);-----------------------
// Use Cases:
// ✅ Merging objects
// ✅ Cloning objects
// ✅ Adding new properties to an object


// const target = { a: 1 };
// const source = { b: 2, c: 3 };

// Object.assign(target, source);

// console.log(target); // { a: 1, b: 2, c: 3 }

// Object.defineProperty(obj, propertyName, descriptor);----------------------------

// obj → The object where the property will be added.
// propertyName → The name of the property.
// descriptor → Defines characteristics like writable, enumerable, configurable, and value.

// const person = {};

// Object.defineProperty(person, 'name', {
//   value: 'Alice',
//   writable: false, // Cannot modify
//   enumerable: true, // Can be listed in loops
//   configurable: false // Cannot be deleted
// });

// console.log(person.name); // Alice

// person.name = 'Bob'; // Will not change because writable is false
// console.log(person.name); // Alice


// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     this.getDetails=function(){
//         return `Name:${this.name} and age:${this.age}`;
//     }
// }
// const person1 = new Person("Akash",21);
// console.log(person1.getDetails());

/////////////////////////////////////////------------------------->CONSTRUCTOE EXAMPLE

// // Parent Constructor Function
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// // Adding a method to Person prototype
// Person.prototype.getDetails = function() {
//     return `Name: ${this.name}, Age: ${this.age}`;
// };

// // Child Constructor Function
// function Employee(name, age, jobTitle, salary) {
//     // Call the Parent constructor (Person)
//     Person.call(this, name, age);
//     this.jobTitle = jobTitle;
//     this.salary = salary;
// }

// // Inherit from Person prototype
// Employee.prototype = Object.create(Person.prototype);

// // Fix the constructor reference (because it was lost)
// Employee.prototype.constructor = Employee;

// // Adding a method to Employee prototype
// Employee.prototype.getJobDetails = function() {
//     return `Job Title: ${this.jobTitle}, Salary: ${this.salary}`;
// };

// // Creating instances
// const person1 = new Person("Alice", 25);
// console.log(person1.getDetails()); // Name: Alice, Age: 25

// const emp1 = new Employee("Bob", 30, "Software Engineer", 70000);
// console.log(emp1.getDetails()); // Name: Bob, Age: 30 (inherited from Person)
// console.log(emp1.getJobDetails()); // Job Title: Software Engineer, Salary: 70000

// console.log(emp1.constructor === Employee); // true
// console.log(person1.constructor === Person); // true

//////////////////////////////----------------------------->PROMISE

// function fetchUserData() {
//     return new Promise(resolve => setTimeout(() => resolve("User Data"), 1000));
// }

// function fetchPosts() {
//     return new Promise(resolve => setTimeout(() => resolve("User Posts"), 1500));
// }

// Promise.all([fetchUserData(), fetchPosts()])
//     .then(results => {
//         console.log("All data fetched:", results);
//     })
//     .catch(error => console.log("Error fetching data:", error));


// Simulating API Calls
// function fetchUserProfile() {
//     return new Promise(resolve => setTimeout(() => resolve({ name: "Alice", age: 30 }), 1000));
// }

// function fetchUserPosts() {
//     return new Promise((_, reject) => setTimeout(() => reject("Failed to load posts"), 1500));
// }

// function fetchUserComments() {
//     return new Promise(resolve => setTimeout(() => resolve(["Great post!", "Nice article"]), 500));
// }

// // Fetch All Data
// Promise.allSettled([fetchUserProfile(), fetchUserPosts(), fetchUserComments()])
//     .then(results => {
//         const profile = results[0].status === "fulfilled" ? results[0].value : "No Profile Data";
//         const posts = results[1].status === "fulfilled" ? results[1].value : "Posts unavailable";
//         const comments = results[2].status === "fulfilled" ? results[2].value : "Comments unavailable";

//         console.log("User Profile:", profile);
//         console.log("User Posts:", posts);
//         console.log("User Comments:", comments);
//     });


// function fibonacci(n){
//     while(n>0){
//        return fibonacci(n-1)+(n-2);
//     }
// }
// console.log(fibonacci(8));

// function zigzag(numRows,s){
//     let rows=[];
//     for(let i=0;i<numRows;i++){
//         rows[i]="";
//     }
//     console.log(rows);
//     let index=0;
//     let direction=0;

//     for(let i=0;i<s.length;i++){
//         rows[index]+=s[i];
//         if(index==0) direction=1;
//         if(index==numRows-1) direction=-1; 
//         index=index+direction;
//     }
//     console.log(rows);
// }
// console.log(zigzag(4,"ABCDED"));

