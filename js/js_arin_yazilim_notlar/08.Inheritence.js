


//class yapısı modüler sistem tasarlamak için çok kullanışlıdır.

class Person{
  constructor(name,surname,age){
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  fullName(){
    return this.name + " " + this.surname;
  }
}
//Bitane normal insan oluşturalım.
const duygu = new Person("Duygu","Çetin",27);

//Bitane mühendis sınıfı oluşturalım.
//MÜhendislerin de adı soyadı yaşı olacağından Person sınıfından Engineer sınıfı oluşturalım.
// Mühendis olsun ama benim gibi olsun bom boş sadece adı soyadı yaşı olsun. Mühendisliğe dair bilgisi 0 olsun diyelim.

class Engineer extends Person {};
/*
Engineer bir subclass Person ise Superclass veya
Engineer bir child Person ise Parent oldu.
*/


//Evet mühendis sınıfını oluşturduk Şimdi bu sınıftan nesne türetelim.

const hakan = new Engineer("Mehmet","Hakan",33);

console.log(duygu);
/*
{…}
​
age: 27
name: "Duygu"
surname: "Çetin"
<prototype>: {…}
constructor: class Person { constructor(name, surname, age) }  --------> constructor ı class Person diyor.
fullName: function fullName()
<prototype>: Object { … }
*/

console.log(hakan);
/*
{…}
​
age: 33
name: "Mehmet"
surname: "Hakan"
<prototype>: {…}
constructor: class Engineer { constructor(args) } ---------------> constructor ı class Engineer diyor.
<prototype>: Object { … }
*/


// Duyguyu Person clasından oluşturduk.
// Hakanı da Engineer clasından oluşturduk.

console.log(duygu instanceof Person);    //true
console.log(duygu instanceof Engineer); //false
console.log("***********************");
console.log(hakan instanceof Engineer); //true
console.log(hakan instanceof Person);  // false


console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

/*Şimdi parentten farklı bir child class oluşturalım.*/


class Person1{
  constructor(name,sname,age){
    this.name = name;
    this.sname = sname;
    this.age = age;
  }
  fullName1(){
    return  this.name + " " + this.sname;
  }
}

class Engineer1 extends Person1{
  constructor(name,sname,age,job){
    super(name,sname,age);
    this.job = job;
    //this.test = this.name;  // bu  satır this deyiminin önceden tanımlı değerler için parent clası gösterirken yeni tanımlananlar için child classı gösterdiğinin kanıtıdır.
  }
  getMoney(){
    console.log("ParaKazan");
  }
}

//Şİmdi hem parentten hem de childten birer nesne oluşturalım.

const arin = new Person1("arin","cekic",7);// Object { name: "arin", sname: "cekic", age: 7 }

const gurcan = new Engineer1("gurcan","cekic",30,"Mehendis");//Object { name: "gurcan", sname: "cekic", age: 30, job: "Mehendis" }

console.log(arin);
/*
{…}
​
age: 7
name: "arin"
sname: "cekic"
<prototype>: {…}
constructor: class Person1 { constructor(name, sname, age) }
fullName1: function fullName1()
<prototype>: Object { … }
*/

console.log(gurcan);
/*
{…}
​
age: 30
job: "Mehendis"
name: "gurcan"
sname: "cekic"
<prototype>: {…}
constructor: class Engineer1 { constructor(name, sname, age, job) }
getMoney: function getMoney()
<prototype>: Object { … }--------------------------------------------Atanesne
*/

// Şimdi gurcan nesnesi Parent clasının fullName1 fonksiyonunu kullanmaya çalışsın.

console.log(gurcan.fullName1());// gurcan cekic evet çalıştı.
console.log(gurcan.getMoney());// ParaKazan

console.log(gurcan.test);














//
