

//function generaly prototype

/*

function functionName(Parameter1, Paramater2, Parameters) {
  // running code line;
  return returningValue;
}

functionName(arguments1, arguments2, arguments); // invoking function


*/



//    FUNCTION DECLARATION / statment
//   Function declaration is Hoisted.

function square(num) {
  return (num*num);
}

//function declarated

square();  // invoke the function

console.log(square); // printing function structure

console.log(square()); // invoke the function without arguments: Printing Nan

console.log(square(5)); //invoke with arguments: printing 25
 ///////////////////////////////////////////////////////////////////////

// Analyzing hoisted functions

console.log(sum(5));         //  can invoke over declaration line
                            //
function sum(num) {        //Declaration a function
  return (num+num);
}
/////////////////////////////////////////////////////////////////////


// FUNCTION EXPRESSION (namely assigning the variable a function.)
// general structure
/*

const variableName = function functionName(parameters)
{
codes
}
*/

const variable = function div(p1,p2){ //assigning a variable
  return ( p1/p2 );
}
console.log(variable); //prints by function div(p1, p2)
console.log(variable());//invoking = prints Nan
console.log(variable(10,2));//correct usage = prints 5

// i will try call by function name

//console.log(div(10,2)); //prints = div is not defined, only can invoke by variable name

/*
Anonymous Function
But we can assing without function name and this will be anonymous function therefore called by anonymous function
*/

const sumboth = function(p1,p2){ // assigning without function name
  return p1+p2;
}

console.log(sumboth(15,15)); //prints 30
// Now, sumboth it happened FIRST CLASS FUNCTION
//Note: Function name is optional

//*******FIRST CLASS FUNCTION exp

const myArr = [6, "arin", function(){console.log("Array element")},9]

console.log(myArr[2]); // print function structure = like function myArr()
/*
prints=
myArr()
  arguments: null
  caller: null
  length: 0
  name: ""
  prototype: Object { … }
  <prototype>: function ()
  fonksiyonlar.js:85:9

*/

console.log(myArr[2]()); // invoke the first class function

const myObj = {
  age: 5,
  name: "arin",
  fonk:function(){console.log("Object element");}
}

console.log(myObj.fonk); //prints function structure
/*
func()
​  arguments: null
  caller: null
  length: 0
  name: "func"
  prototype: {…}
  constructor: function func()
  <prototype>: Object { … }
  <prototype>: function ()
  fonksiyonlar.js:95:9

*/
console.log(myObj.fonk());

// but we can create without name

const myObj2 = {
  age:5,
  name:"arin",
  fonk(){console.log("Object element without name")}
}
console.log(myObj2.fonk);
/*
fonk()
  length: 0
  name: "fonk"
  <prototype>: function ()
  fonksiyonlar.js:131:9
*/
console.log(myObj2.fonk()); //invoke

//these function can behavior like a variable

//lets try

console.log(10+(function(){return 10;})() ); //prints 20

//function expression is not HOISTED
// declare with const

//console.log(sumConst);
// Uncaught ReferenceError: can't access lexical declaration 'sumConst' before initialization

//console.log(sumConst());
//// Uncaught ReferenceError: can't access lexical declaration 'sumConst' before initialization

const sumConst = function(sum){
   return sum + sum;
}

//declare with var

console.log(sumVar);
//prints undefined

//console.log(sumVar());
// prints Uncaught TypeError: sumVar is not a function

console.log(sumVar);
//console.log(sumVar(5));
// prints Uncaught TypeError: sumVar is not a function

var sumVar = function(sum){
  return sum+sum;
}

//Note: the Function expression is not hoisted and we cant call over line of  declaring.

//firs class function

//bir fonksiyonu başka bir fonksiyona argüman olarak gönderme.

const getFunc = function(num, fonk){
  console.log(num + fonk()); // invoke point
}


getFunc(10,function(){return 5;}) //dont invoke the function, we send the by arguments

// return ifadesinde fonksiyonlarla çalışma

const myFonk = function (num) {

  return function toDouble(){
    console.log(num*2);
  }
}

console.log(myFonk);// prints fucntion structure
/*
myFonk(num)
​ arguments: null
​ caller: null
​ length: 1
​ name: "myFonk"
​ prototype: Object { … }
​ <prototype>: function ()
 fonksiyonlar.js:197:9
*/

console.log(myFonk());// prints, the structure of function inside the return statment
/*
toDouble()
​  arguments: null
​  caller: null
​  length: 0
​  name: "toDouble"
​  prototype: Object { … }
​  <prototype>: function ()
  fonksiyonlar.js:210:9
*/

console.log(myFonk(5)); // like above output

console.log(myFonk(5)()); // both invoke


// lets parse above structure

const result = myFonk(5);
console.log(result);
/*
  toDouble()
​  arguments: null
​  caller: null
​  length: 0
​  name: "toDouble"
  prototype: Object { … }
  <prototype>: function ()
  fonksiyonlar.js:229:9

*/

result2 = result(5);
console.log(result2); // prints 10



//  IIFE
// Immediatly Invocable Function Expression
// iief structure
/*

(function (arguments) {running codes})();

*/

const summer = function(){
  console.log(5+13);
}

// Şimdi bu fonksiyonu çalıştırırsak
summer(); // prints 18
// fonksiyonun içini görelim

console.log(summer);
/*
summer()
​  arguments: null
​  caller: null
​  length: 0
​  name: "summer"
  prototype: Object { … }
  <prototype>: function ()
  fonksiyonlar.js:264:9

*/

/*
Bu fonksiyonları isimsiz olarka oluşturabiliyoruz fakat bunları oluştururken
javascript engini fonksiyona bir isim bekler bu ismi beklememesi için
fonksiyonu round bracketler arasına yazarız.


function(){
  console.log(5+13);
}();

Uncaught SyntaxError: function statement requires a name

*/

(function(){
  console.log(5+13);
})();

//prints result


/*

Note:

Nesnelerin propertileri olur aynı zamanda fonksiyonlar da bir nesnedir.
*/

const sumend = function(){
  return 10+11;
}

console.log(sumend.name);// prints sumend
console.log(sumend.length); // prints 0. the zero is count of parameters












///
