


//this in js te genelde 2 konsepti vardır.

// nesne.fonksiyon() diye kullandığıımzda nesneye işaret eder

// diğer tüm durumlarda this global objeye işaret eder. global obje tarayıcıda windowdur.
//deneyelim ispatlayalım


console.log(this); // Window file:///home/ubuntu/Documents/frontend/html-css-js/js/js_arin_yazilim_notlar/09.this.html

console.log(this.location);

console.log(this === window); //true
console.log(this == window); //true


//şimdi global fonksiyonları tanımlayabiliriz.

//Function declaration  hoisting olur.

function fonk1(){
  console.log(this); // Window file:///home/ubuntu/Documents/frontend/html-css-js/js/js_arin_yazilim_notlar/09.this.html
}

//Function expression  hoisting olmaz.

const fonk2 = function(){
  console.log(this); //Window file:///home/ubuntu/Documents/frontend/html-css-js/js/js_arin_yazilim_notlar/09.this.html
}


  fonk1();
  fonk2();

  // görüldüğü üzere nesne içinde olmayan fonksiyonlarda this deyimi window a işaret eder.

  // tamam şimdi de bu fonksiyonların içinde yeni bir property oluşturup gözlem yapalım.

  ///////////////////////////////////////////////////////////////////////////////////


  function fonk3(){
    this.name = "Mehmet";
    console.log(this);

  }

  const fonk4 = function(){
    this.age = 40;
  }

  fonk3();
  fonk4();

  console.log(name); // Mehmet
  console.log(age); // 40

  console.log(this.name); //Mehmet
  console.log(this.age); // 40

  // Burdan anlaşıldığı üzere window nesnesine propery olarak ekleniyorlar.

  console.log("₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺₺");

console.log("******************************************************************");


//object literal olarak ele alalım.


const arin = {
  name:"arin",
  surname:"yazilim",
  age:4,
  fullName:function(){
    console.log(this);
    return this.name + " " + this.surname;
  }
}

console.log(arin);
console.log(arin.fullName());

/*
Object { name: "arin", surname: "yazilim", age: 4, fullName: fullName() }
Object { name: "arin", surname: "yazilim", age: 4, fullName: fullName() }
arin yazilim
*/
console.log("***************************************************************");

const elis = {
  name:"elis",
  funcy:function(){
    console.log(this === elis);
    console.log(this === window);
  }
}

console.log(elis.funcy());

console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");

const elis2 = {
  name:"elis2",
  funcy:function(){
    console.log(this == elis2);              //true
    setTimeout(function(){
      console.log(this === elis2);           //false
      console.log(this === window);          //true
    }, 2000);
  }
}

console.log(elis2.funcy());

//yukarıdaki örnek anonym fonkisyonların nesnenin dışına çıktığını ve global obje içinde
//çalıştığını gördük. this bu durumlarda window nesnesine işaret eder.




































//
