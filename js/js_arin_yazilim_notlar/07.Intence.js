

class Person{
  constructor(name,surname,age){
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  fullname(){
    return this.name + " " + this.surname;
  }
}


//şimdi bu classtan bir nesne türetelim.

const ali = new Person("ali","demirel",49);

// yukarıdaki Ali nesnesini oluştururken Person sınıfından üretilen ali nesnesi deriz

// bir diğer söylem de şu şekildedir

// ali  ye Person clasının instance ı denir. Yani örneği. (instance = örnek)

// bunu javascript programlarımızda sorgulamamaız için instanceof metoduğu kullanırız.

console.log(ali instanceof Person); // true


// şimdi biz bu class içerisine yazdığımız metotlar oluşturulan nesnelerin metodu oluyor
// biz direk clasa ait fonksiyonlar oluşturmak istersek static deyimini kullanacağız.
// bunuda class expression olarak yapalım.

const Person1 = class{
  constructor(ad,soyad,yas){
    this.ad = ad;
    this.soyad =soyad;
    this.yas = yas;
  }
  //bu sınıftan oluşturulan nesnelere yazılacak fonkisyonumuz.
  tamIsım(){
    return this.ad + " " + this.soyad;
  }

  // buradan sonrasına da Person1 classına ait fonksiyonları yazacağız.

  static whatsName = "Person1";

  static showStruct(){
    console.log(Person1);
  }

}

// Şimdi bu static fonksiyonlara oluşturacağımız nesnelerden erişmeye çalışalım.

const ceylan = new Person("ceylan","bozan",20);

console.log(ceylan.whatsName);//undefined
console.log(ceylan.showStruct);// undefined



//şimdi Person1 üzerinden erişmeye çalışalım.

console.log(Person1.whatsName); //Person1
console.log(Person1.showStruct());
/*
class Person1
​
length: 3
name: "Person1"
prototype: Object { … }
showStruct: function showStruct()
whatsName: "Person1"
<prototype>: function ()
*/

console.log(ceylan);
/*{…}
​
age: 20
​name: "ceylan"
​surname: "bozan"
​<prototype>: Object { … }
*/

console.log(Person1);


/*
class Person1

length: 3
name: "Person1"
prototype: Object { … }
showStruct: function showStruct()
whatsName: "Person1"
<prototype>: function ()
*/
















































//
