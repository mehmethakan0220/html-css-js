
/*
nesne oluşturmanın amacı
birbiriyle alakalı verileri aynı yerde tutmaktır.
Nesne yapısı

const nesneAdi = {

property0:value,
property1:value,
property1:value

}

value can be a function,array,string,number or other object.
value değeri fonksiyon olursa bunlara method denir.
*/


// Example of a object

const person =  {
  name:"john",
  surname:"doe",
  age:20,
  languages:["turkish","english","spanish"],
  fullName:function()
  {
    return this.name + this.surname;
  },
  address:{
    city:"balıkesir",
    district:"akçay"
  }
}


console.log(person);
/*
Object { name: "john", surname: "doe", age: 20, languages: (3) […], fullName: fullName()
*/

/*
accesing object element with dot notation
*/

console.log(person.name);//john
console.log(person.age);//20
console.log(person.fullName); // function fullName()
console.log(person.fullName()); //johndoe


//adding a property to object

person.job = "Student";

console.log(person.job);


/*
*accessing object element with square notation
*/

console.log(person['name']);
console.log(person["age"]);
console.log(person["fullName"]()); // johndoe
console.log("na"+"me");
console.log(person["f"+"u"+"l"+"l"+"N"+"a"+"m"+"e"]()); //johndoe

//********************************************************************************

/*
Nesneye nesne eklemek
*/

person.physicalProperty = {};//added

person.physicalProperty.length = 175;
person.physicalProperty.weight = 80;

console.log(person.physicalProperty);
/*
Object { length: 175, weight: 80 }
*/

console.log(person.physicalProperty.length);// prints 175

































































































//
