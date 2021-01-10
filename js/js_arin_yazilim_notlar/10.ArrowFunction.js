//Önce normla fonksiyon tanımlamalarımıza bakalım

//  1-) Function Declaration ile

function square(num){
  return (num*num);
}
console.log(square(5));
//  2-) Function Expression ile

const square0 = function(num){
  return (num*num);
}
console.log(square0(6));



//Şimdi ArrowFunction oluşturalım.
// Arrow function tek satırda yazılır.
// Arrow function,  Function Expression gibi yazılır.

//const square1 = function(num){ return (num*num)};

// function keywordunü kullanmaya gerek yok.

// const square1 = (num) => {return (num*num)};

// ee zaten curly bracket kısmından geri dönüş yapılacağı için return kullanmamıza da gerek kalmadı. ayrıca curly bracketları da kaldırıyoruz.

//const square1 = (num) => {(num*num)};

// tek parametre yolladığımız için paramatre kısmındaki round bracketları da kaldıralım.

const square1 = num => (num*num);

/*
Genel yazılım.

const isim = (parametreler) => (işlemler)
*/

console.log(square1(7));


  //not: ARrrow Function un kendine ait bir this i yoktur. Kendisinden önce this i olan fonksiyondan this alır.
  //arrow fonksiyonun hiçbir zaman kendi this i yoktur hep içinde bulunduğu ortamdan this alır.





















///
