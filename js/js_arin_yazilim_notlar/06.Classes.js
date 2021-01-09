// Kurucu fonksiyonu tanımlayalım.

function Person(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.fullName = function() {
    return this.name + " " + this.surname + " " + this.age;
  }
}

//bu kurucu fonksiyondan yeni nesneler oluşturalım.

const arin = new Person("Arin", "Yazilim", 10);
const elis = new Person("Elis", "Yazilim", 5);

console.log(arin);
console.log(elis);

/*

Object { name: "Elis", surname: "Yazilim", age: 5, fullName: fullName()

{…}
age: 10
fullName: function fullName()
name: "Arin"
surname: "Yazilim"
<prototype>: Object { … }
*/

/*
Yukarıdaki gibi her bir nesne oluşturduğumuzda her nesne kendi fonksiyonunu da oluşturmuş oluyor.
Bu da bellekte her nesne için fazladan bellek alanı ayırmak anlamına gelir.
Burada bellek için çözüm üretecek olursak
1-) Fonksiyonu dışarda tanımlamak ama nesne içinden erişmek.
2-) Ortak fonksiyonları ata nesnenin constructor kısmında değilde prototip kısmında oluşturacağız.

*/

// 1 - Fonksiyonu dışarıda tanımlamak.

function Person1(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.fullName = fullName;
}

function fullName() {
  return this.name + " " + this.surname + " " + this.age;
}
// Şimdi her iki nesnede global alanda tanımlanan bu fonksiyona erişecektir.

const ali = new Person1("ali", "demir", 44);

const ayse = new Person1("ayse", "vezir", 22);

// şimdi Person1 constructor undan oluşturduğumuz ali ve ayşe nesnelerinin içeriğine bakalım.

console.log(ali);
console.log(ayse);

/*
Object { name: "ali", surname: "demir", age: 44, fullName: fullName()

{…}
​age: 22
​fullName: function fullName()
​name: "ayse"
​surname: "vezir"
​<prototype>: Object { … }
*/

/*
Görünüşe göre hiçbir fark olmasa da fullName fonksiyonu hafızada sadece 1 yer kaplayacaktır.
Ama bu ve benzer fonksiyonları bir kurucu için bu şekilde farklı farklı oluşturduğumuzda kod karmaşası oluşacaktır.
İyisimi bu ortak fonksiyonları atanesnenin prototip kısmında oluşturalım.
*/


function Person2(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
}

Person2.prototype.FULLNAME = function() {
  return this.name + " " + this.surname + " " + this.age;
}


// prototipe ekleme yaptık. simdi nesnelerimizi oluşturup içlerine bakaılım.

const mehmet = new Person2("Mehmet", "Yildiz", 25);
const muhammed = new Person2("Muhammed", "Doğan", 25);

console.log(mehmet);
console.log(muhammed);

/*
Object { name: "Mehmet", surname: "Yildiz", age: 25 }

{…}
​  age: 25
  name: "Muhammed"
  surname: "Doğan"
​  <prototype>: Object { FULLNAME: FULLNAME(), … }
*/

// görüldüğü gibi oluşturulan fonksiyon prototipte gözüküyor.

/*
Önce bellek alanından tasarruf etmek için fonksiyonu global alanda oluşturlp eriştik.
Daha sonra da kod bütünlüğü ve okunabilirliği için bunu prototip kısmına gönderdik.
*/

//Şimdi bu mehmet ve muhammed nesnelerimizin lisedeki ortak arkadaşlarını prototipe ekleyelim.

Person2.prototype.friends = ["Növfel", "Serkan", "Selahattin"];


console.log(mehmet.friends);
console.log(muhammed.friends);
console.log("**************************************************************");

// Her ikisi de aynı sonucu verecektir. Array(3) [ "Növfel", "Serkan", "Selahattin" ]

// Fakat mehmet üniversiteye yerleşince ekstradan arkadaşları oldu.
// Bunlarıda arkadaşlarına eklememiz lazım ekleyelim.

mehmet.friends.push("Derya"); // Deryayı mehmetdin arkadaşlarına ekledik.

console.log(mehmet.friends); // Array(4) [ "Növfel", "Serkan", "Selahattin", "Derya" ]
console.log(muhammed.friends); // Array(4) [ "Növfel", "Serkan", "Selahattin", "Derya" ]

// mehmedin arkadaşlarına ekledik ama muhammedin de arkadaşları olarak gözüktü.

// Daha sadece bir kaç tane ortak özellik oluşturalım derken sorun yaşamaya başladık.
// Bu nedenden dolayı class lara ihtiyaç doğmuştur.

/*
Class dediğimiz şey özel bir fonksiyondur.
Şimdi normalde constructo fonksiyonlarda bir contsructor kısmı ve bir prototip kısmı var demiştik ama sadece mantıksal olarak
Fakat bu class yapısında direk fiziksel olarak ayrılmış.
Not: class özel bir fonksiyondur. Constructor fonksiyon, diğer fonksiyonlar ve her fonksiyonun atanesneden gelen prototipsel özellikleri vardır.
*/

class Kisi {
  //constructor kısmı
  constructor(name,surname,age){
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  //diğer fonksiyonlar

  tamisim(){
    return this.name + " " + this.surname + " " + this.age;
  }

// classların özelbir foknsiyon olmasından ve fonksiyonlarında bir nesne olmasından
//kaynaklı olarak bu kısımdada mantıksal olarak atanesneden prototipsel özellikler vardır.
}


const mahmut = new Kisi("mahmut","paşa",45);
const seniha = new Kisi("seniha","sultan",39);

console.log(mahmut);
console.log(seniha);
console.log("////////////////////////////////////////////////////////////////");
/*
Object { name: "mahmut", surname: "paşa", age: 45 }

{…}
  age: 39
  name: "seniha"
  surname: "sultan"
  <prototype>: {…} --------------------------------> biz prototip olarak belirtmesekte Kisi classının prototipine eklenenler.
  constructor: class Kisi { constructor(name, surname, age) }
  tamisim: function tamisim() ---------------------> diğer fonksiyonlar diye tanımladığımız fonksiyonlar da prototipe dahil.
  <prototype>: Object { … } -------------------------------> atanesneden gelen prototipsel özellikler

*/


//not: constructor class içerisinde otomatik olarak çalışan metodtur
//classla oluşturduğumuz tüm fonksiyonlar constructor dahil proto içerisine atılır.



// Biz class olarak bu yapıyı oluştursak da javascript engine bunu prototip bazında ele alır.
//class kullanmanın tek mantığı geleneksel nesne yönelimli programlamaya uygunluk sağlamaktır.
// Klasik olarak class kullanıldığından böyle bir yapıya da destek verilmiştir.
// Kodları daha anlaşılır bir hale getirmek için kullanılır.

// ortak arkadaş örneğini de class expression yöntemi ile yapalım.

const Kisi1 = class{
  constructor(name,surname,age){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.friends = ["ela","rüzgar"];
  }
  fullName(){
    return this.name + " " + this.surname;
  }
}


// şimdi bunlardan nesne oluşturalım.

const arin1 = new Kisi1("arin","yazilim",12);
const elis1 = new Kisi1("elis","yazlilim",6);



console.log(arin1);
/*
{…}
​
  age: 12
​  friend: Array [ "ela", "rüzgar" ]
​  name: "arin"
​  surname: "yazilim"
  <prototype>: Object { … }

*/
console.log(elis1);
/*
{…}
​age: 6
​  friend: Array [ "ela", "rüzgar" ]
​  name: "elis"
​  surname: "yazlilim"
  <prototype>: Object { … }
*/
console.log("€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€");






//şimdi arine bir arkadaş ekleyelim.

arin1.friends.push("Melek");

//şimdi farkları inceleyelim.

console.log(arin1);
/*
{…}
​age: 12
​  friends: Array(3) [ "ela", "rüzgar", "Melek" ]
​  name: "arin"
​  surname: "yazilim"
  <prototype>: Object { … }
*/
console.log(elis1);

/*{…}
​age: 6
​  friends: Array [ "ela", "rüzgar" ]
​  name: "elis"
​  surname: "yazlilim"
​  <prototype>: Object { … }
*/

// Bu işlemleirn aynısı prototipler kullanılarak ta yapılabilirdik.



//son olarak classların özel bir fonksiyon olduğunun kanıtınıda yapalım.

console.log(typeof Kisi1);//function














//
