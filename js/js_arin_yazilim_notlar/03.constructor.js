
/*
CONSTRUCTOR --> yapıcı fonksiyonlar
tanım: constructor oluşturulacak olan nesneler için bir şablon niteliğindedir.
Yani bir contstructor oluşturduktan sonra her seferinde aynı objeyi tekrar tekrar
yazmadan genel özellikleri olan objeleri oluşturabiliriz.
constructorlar genelde büyük harfle başlar.
*/

function Person(name,surname,age){
  const obj = {};

  obj.name = name;
  obj.surname =surname;
  obj.age = age;
  obj.fullName = function () {
                           return this.name + " " + this.surname;
  }
  return obj;
}

/*
Şimdi bu constructor dan başka bir nesne türetelim.
*/

const person1 = new Person("Mehmet","Ali",38);

/*
Üstteki satırın yorumlaması

Person kurucusundan person1 nesnesi oluşturmak için = new Person diyoruz.
Fakat Person bir fonksiyon olduğundan dolayı çalıştırılması gerekir bunun için
parantezleri ekliyoruz = new Person();
Bu fonksiyona gönderilecek argümanı da ekleyince tammalanıyor.
*/

console.log(Person); // prints function Person(name, surname, age)

console.log(Person());
/*
Argüman göndermeden Person() kurucu fonksiyonunu çalıştırınca çıktı aşağıdaki gibi olur.
Object { name: undefined, surname: undefined, age: undefined, fullName: fullName()
*/

console.log(Person("mustafa","hasan",33));

/*
Object { name: "mustafa", surname: "hasan", age: 33, fullName: fullName()
*/

// fakat Person kurucu fonksiyonundan person1 nesnesi oluşturduk o nesneyi inceleyelim.

//NOT constructor fonksiyonunda nesne oluşturup geriye nesne döndürüleceğini biliyoruz
// yani sonuçta constructor un amacı nesne oluşturmak ve nesne geri döndürmek
// constructor içinde nesne oluşturmadan ve return etmeden de işlem yapabiliriz.
/*
1-) constructor içinde nesne oluşturmayalım ve geri döndürmeyelim.
2-) nesne oluşturmadığımız için oluşacak nesneyi this ile bu fonksiyondan oluşacak nesneyi işaret etmeliyiz.

*/



function SosyalSinif(name,surname,age){

    console.log(this); // This in aldığı değerleri loga düşürelim. Object {  } boş bir obje çıktıladı.
    // Object {  }

  this.name = name;
  this.surname =surname;
  this.age = age;
  this.fullName = function () {
                           return this.name + " " + this.surname;
  }
  console.log(this); // İşlemler tamamlandıktan sonra this in içeriği aşağıdaki gibi oluyor..
}

//şimdi bu SosyalSinif constructorından nesneler üretelim.

const burjuva = new SosyalSinif("Ali","Yılmaz",30);

const soylu = new SosyalSinif("Deniz","Yılmaz",30);
console.log(burjuva);

/*
SosyalSinif içerisindeki 2.this deyimi burjuva nesnesinden oluşturulan Ali yılmaz için
/*
{…}
​  age: 30
​  fullName: function fullName()
  name: "Ali"
  surname: "Yılmaz"
  <prototype>: Object { … }
  constructor.js:83:9

gibi bir çıktı oluşturur.
fakat soylu nesnesinden oluşturulan Deniz yılmaz için

{…}
  age: 30
  fullName: function fullName()
  name: "Ali"
  surname: "Yılmaz"
  <prototype>: Object { … }
  constructor.js:83:9
  çıktısını oluşturur.

*/


//OBJECT constructor ile nesne oluşturma
// yani js te tanımlı olan Object nesnesinden nesne türetme.


// şimdi bu object nesnesinden asker nesnesi türeteceğim.

const asker = new Object();

asker.tip="Kara Harekat";
asker.hp = 100;
asker.mp = 100;
asker.irade = 50;
asker.zırh = 100;
asker.fonk = function(){
  console.log(this);
  return this.tip + " " + this.hp + " " + this.mp;
}
console.log(asker);
console.log(asker.fonk());
// NOt:  this deyimi current object üzerinde işlem yapar
// buna göre const asker = new Object(); dediğimizde this bu nesneyi işaret eder.

const sat = new Object();

sat.tip = "Su Altı Taarruz";
sat.hp = 110;
sat.mp = 120;
sat.irade= 100;
sat.zırh = 60;
sat.fonk = function(){
  console.log(this);
  return this.tip + " " + this.hp + " " + this.mp;
}
// buradaki this ise sat nesnesine işaret etti.
console.log(sat);
console.log(sat.fonk());




//*** Object.create() ile nesne oluşturmak
// burdaki mantık eski bir nesneden yeni bir nesne oluşturmak.

const eskiInsan = {
  name:"Ali",
  surname:"Dursun",
  age:20,
  fullName:function(){
    return this.name + " " + this.surname;
  }
}

console.log(eskiInsan);

const yeniInsan = Object.create(eskiInsan);

console.log(yeniInsan);  // boş bir obje oluşturdu.
/*
Object {  }
*/
yeniInsan.name= 'Polat';
yeniInsan.surname = "Alemdar";
yeniInsan.age = 45;


console.log(yeniInsan); // Yukarıda obje propertyleri dolduruldu.
/*
Object { name: "Polat", surname: "Alemdar", age: 45 }
*/

console.log(yeniInsan.fullName()); // Polat Alemdar çıktıladı.



































//
