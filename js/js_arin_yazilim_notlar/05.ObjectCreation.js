
//new object sytanx

/*
1-) Shorthand properties
*/


let isim = "arin", yas = 5;

const myObj = {
  name: isim,
  age: yas
}


console.log(myObj.isim); // prints arin
console.log(myObj.yas); // prints 5


//myObj deki gibi taınmlama yaparken her iki ifade de aynıysa tekrar etmeye gerek yoktur.

const myObj1 ={
  isim,
  yas
}

console.log(myObj1.isim);
console.log(myObj1.yas);


// Bu şekilde de kullanarak kısayoldan tanımlama yaptık.




/*
Computed Property  Names

gelelde kütüphanelerde kullanılır.
*/

// Değişkeni [] ile nesne oluşturulurken ekleme yaptık.

let property = "name";

let nesne = {
  [property]:"arin"
}

console.log(property); // prints name
console.log(nesne);  // prints  Object { name : "arin"}
console.log(nesne.name); // prints arin

// surname property ekleyelim.

let property2 = "surname";

nesne[property2]="yazilim"; // Daha sonradan ekleme böyle yapılır.

console.log(nesne); // Object { name: "arin", surname: "yazilim" }

console.log(nesne.surname);// yazilim



/*
Short Method Syntax
*/

/*
Normalde nesne içerisinde bir fonsiyon tanımlanacaksa aşağıdaki gibi tanımlanır.


const person = {
name:"john",
surname:"doe",
age:20,
fullname:function(){
  return this.name + this.surname
}
}

Fakat biz daha kısa bir şekilde aynı şeyi yapabiliriz.
    :function kısmını silerek...
*/

const person = {
name:"john",
surname:"doe",
age:20,
fullname(){
  return this.name + this.surname
}
}


console.log(person.fullname()); //johndoe




/*
Object Destructing
Nesne parçalama
*/

const obje ={
  name:"john",
  surname:"doe",
  age:20,
  fullname(){
    return this.name + this.surname
  }
}

/*manule parçalamaya çalışırsak tek tek parçalayacağız.*/

let var1 = obje.name;
let var2 = obje.surname;
let var3 = obje.age;
let var4 = obje.fullname;

console.log(var4()); // undefined. neden çalışmadı çünkü var4 içindeki this ifadesinin göstereceği değerler yok.

console.log(obje.name);// john. Nesnenin parçalanmadığını ama değerlerinin değişkenlere aktarıldığını gösteren kanıt.


/*Şimdi diğer yöntem ile parçalamaya çalışalım.*/


const obje2 = {
  name:"john",
  surname:"doe",
  age:20,
  fullname(){
    return this.name + this.surname
  }
}


let {name:myVar1, surname:myVar2, age:myVar3, fullname:myVar4} = obje2;

console.log(myVar1); //john
console.log(myVar3); // doe
console.log(myVar4()); //undefined
console.log(myVar4); // function fullname() . fonksiyon aktarılmasına rahmen üst satırda çalıştırıldığında undefined döndü sebebi this in değerleri bulamaması.

//myVar gibi saçma sapan değişkenler kullanmak yerine obje deki değerlerin aynısını kullanalım.
//
// const obje3 = {
//   name:"john",
//   surname:"doe",
//   age:30,
//   fullname(){
//     return this.name + this.surname
//   }
// }
//
//
// let {name:name, surname:surname, age:age, fullname:fullname} = obje3;
//
// console.log(name);
// console.log(surname);
// console.log(age);
// console.log(fullname);
// console.log(fullname()); //undefined


/* Burada değerlerin tekrar etmesi gerekmediğinden direk olarak tek tanımlama ile daha kısa birşekilde yapabiliriz.*/

const obje3 = {
  name:"john",
  surname:"doe",
  age:31,
  fullname(){
    return this.name + this.surname
  }
}


let {name, surname, age, fullname}= obje3;

console.log(name);
console.log(surname);
console.log(age);
console.log(fullname);



/*
Spread Operator in Object Literals  (...)
*/

const person3 = {
  name:"john",
  surname:"doe",
  age:31,
  fullname(){
    return this.name + this.surname
  }
}

// person3 nesnesini person4 nesnesine kopyalayalım.


const person4 = {...person3}; // kopyalama

console.log(person4);
console.log("****************************************************************");

//spread operatröü nesneleri birleştirmede de kullanılır.s



const person5 = {
  name:"john",
  surname:"doe",

}

const person6 = {
  age:31,
  fullname(){
    return this.name + this.surname
  }
}

// şimdi bu iki farklı nesneyi person7 nesnesinde birleştirelim.


const person7 = {...person5, ...person6};

console.log(person7);
console.log("*****************************************************************");

// nesneleri hem birleştirip hem de ek propertyler ekleme.

const person8 = {
  name:"john",
  surname:"doe"
}


const person9 = {
  age:31,
  fullname(){
    return this.name + this.surname
  }
}


const person10 = {...person8, ...person9,newproperty:"Eklenen yeni özelllik"};

console.log(person10);
console.log("****************************************************************");




/*
REST Operator in Object Literals

Objeden bi kaç parça ayırdıktan sonra geri kalanların tamamını bir obje olarak alma.

*/


const person11 = {
  ad:"john",
  soyad:"doe",
  yas:31,
  fullname(){
    return this.name + this.surname
  }
}



let {ad, ...rest} = person11;

console.log(ad);
console.log(rest); // Object { soyad: "doe", yas: 31, fullname: fullname()

console.log("****************************************************************");

// buradaki rest deyimi yerine herhangi bir isim gelebilir Örneğin geriKalanlar adında bir obje olabilir.




/*
Object Values - Object Entries
*/

//şimdi bir nesnenin keylerine ulaşmak istersek.

const sonObje = {

  sonName:"Abdullah",
  sonSurname:"Baykal",
  sonAge:25,
  sonFonksiyon(){
    console.log("Başkan İha gurubundan ayrıldı.");
  }
}

console.log(Object.keys(sonObje));
// Array(4) [ "sonName", "sonSurname", "sonAge", "sonFonksiyon" ]

// bir nesnenin value değerlerine erişmek istersek.


console.log(Object.values(sonObje));
//Array(4) [ "Abdullah", "Baykal", 25, sonFonksiyon()


// bir nesnenin hem key hem de value çiftleri olarak alınmasını istersek.

console.log(Object.entries(sonObje));
//Array(4) [ (2) […], (2) […], (2) […], (2) […] ]

//daha detaylı görmek istersek

/*
(4) […]
​  0: Array [ "sonName", "Abdullah" ]
​  1: Array [ "sonSurname", "Baykal" ]
​  2: Array [ "sonAge", 25 ]
​  3: Array [ "sonFonksiyon", sonFonksiyon() ]
  length: 4
  <prototype>: Array []
*/








//
