var etip = prompt("id,name yada tag");
var sorgu;
var ename="";
var temp='';
// var str = "document.getElementBy" + x + "(" + "'y')"
// console.log(etip, ename);

function arama(sozcuk) {
  ename = prompt("element adını gir");
  return ename;
}

// function fonksiyon(x, y) {
//   sorgu = "document.getElementBy" + x + "(" + "'" + y + "'" + ")";
//   sorgu = sorgu.replace("id","Id");
//   sorgu = sorgu.replace("name","Name");
//   sorgu = sorgu.replace("class","Class");
//   sorgu = sorgu.replace("tag","Tag");
//   return sorgu;
// }



switch (etip) {
  case 'id':
    temp =console.log(arama());
    
    console.log(sorgu);
    break;
  case 'name':
    console.log(arama());
    sorgu = document.getElementsByName(arama());
    console.log(sorgu);
    break;
  case 'tag':
    console.log(arama());
    sorgu = document.getElementsByTagName(arama());
    console.log(sorgu);
    break;
  default:
    alert("id,name,class veya tag yazın!");
}
