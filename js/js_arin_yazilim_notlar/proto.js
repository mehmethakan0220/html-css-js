

function Person(name,surname,age){
 this.name = name;
 this.surname = surname;
 this.surname = age;
 this.fullName=function(){
         return (this.name +" "+ this.surname +" "+ this.age);}
}

const zeki = new Person("Zeki","Deniz",33);

console.log(zeki);

/*

Şimdi zeki nesnesinin atasını sorgulayalım (resmi adıyla proto)


*/

console.log(zeki.__proto__);

/*
{…}
​
constructor: function Person(name, surname, age)
​  <prototype>: Object { … }
*/

/*
Object ---> Person ---> zeki

Person constructor u zekinin prototipidir.
Aynı zamanda Object kök nesnesi de hem Personun hem de zeki nin prototipidir.

*/


const mutlu = new Person("Mutlu","Deniz",33);

mutlu.job = "Gamer"; // atalarından fakrlı bir property e sahip.
console.log(mutlu.__proto__);

console.log(mutlu);// gamer
console.log(zeki.job);//undefined


// Şimdi tüm objelerin prototipi ola Object teki tanımlı toString metodunu değiştirelim.

mutlu.toString =  function(){
  console.log("Depracated");
}

console.log(mutlu.toString()); // Depracated çıktısı verir.

// şimdi bunun yapını bozduk ya bunu bir de zekiden deniyelim.

console.log(zeki.toString()); // object Object  çıktısı verir.
/*
Demekki değişiklikler sadece prototipten nesneye kopyalanan propertyler üzerinde gerçekleşir yani ata nesneyi bozamayız.
Yukarıdaki işlemde sadece mutlu nesnesinin toString metodu bozulmuştur.
*/

/*
Şimdi ikiz kardeşler özelliklerinden nesneler oluşturalim.*/

function Ikiz(ad){
  this.name= ad;
}

Ikiz.prototype.surname = "Kahraman";
Ikiz.prototype.age = 12;
Ikiz.prototype.fullName = function() {
                          return this.name + " " + this.surname;
}

/*
Ortak özellikteki propertyleri aynı atanın prototip kısmına gömdük.
Farklı olan propertyleri ise atanın constructor kısmına gömdük.
*/

const ali = new Ikiz("Ali");
const veli = new Ikiz("Veli");

console.log(ali.fullName());
console.log(ali.age);

console.log("-------------------------");

console.log(veli.fullName());
console.log(veli.age);


console.log(ali);
console.log(veli);
/*

*/

const ataNesne = {
  name:"xxxx",
  surname:"yyyyy",
  age:0,
  fullName: function(){
    return this.name + " " + this.surname;
  }
}

/*
Şimdi bu ata nesneden bir nesne oluşturalım.
*/

const erkekEvlat = Object.create(ataNesne);

console.log(erkekEvlat); // Object {  }

/*
görüldüğü gibi erkekEvlat nesnesi ataNesne den içi boş bir obje aldı.
Ama ismini yazdırınca da yazdırıyor.
*/

console.log(erkekEvlat.name);// xxxx olarak çıktı verir.


// bunun cevabını ataNesne ve erkekEvlat yapısını inceleyerek anlayabiliriz.

console.log(ataNesne);
/*
{…}
​age: 0
​  fullName: function fullName()
​  name: "xxxx"
​  surname: "yyyyy"
  <prototype>: Object { … }
  proto.js:128:9

*/
console.log(erkekEvlat);

/*
{}
​
<prototype>: Object { name: "xxxx", surname: "yyyyy", age: 0, … }

Bu çıktıdan anlıyoruz ki ataNesneler kendi soyundan oluşturulan tüm nesneler için
saf prototip özelliğine bürünürler. Bu nedenler
console.log(erkekEvlat); // Object {  }  şeklinde boş nesne çıktısı alırken
console.log(erkekEvlat.name); yazdığımızda ise ataNesne de tanımlı olan xxxx çıktısı verdi.

Bundan sonra erkekEvlat evlat nesnesine bir isim değeri girdiğimizde atadan kalma ismi değil
Kendisine atadığımız ismi kullanacak ve boş bir nesne olarak çıktılanmayacak.
*/


erkekEvlat.name = "Şevket";
erkekEvlat.age = 1;


console.log(erkekEvlat);

/*
{…}
​
  age: 1
​  name: "Şevket"
​  <prototype>: Object { name: "xxxx", surname: "yyyyy", age: 0, … }
Atadığımız tüm kv çiftleri ataNesnenin prototipinden çıktı.
*/

console.log(erkekEvlat.hasOwnProperty("age")); // true döner.

console.log(erkekEvlat.hasOwnProperty("surname")); // false döner.

/*
Burda surname property sine false demesinin sebebi
böyle bir propertye kendisi sahip değil fakat atanesnesinden prototip olarak
aldı.
*/

/*
bir propertyi nesnenin içinde veya prototiplerinde var mı yok mu öğrenmek için.
*/

console.log("surname" in erkekEvlat); // true döndü. Property olarak var.

























//
