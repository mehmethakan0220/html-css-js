
function changeById() {
var temp = document.getElementById('button1').innerHTML="Hakan";
document.getElementById('petiket').innerHTML = temp;
alert(typeof temp);
alert(document.getElementById('button1').tagName);
}

function changeByName() {
  var diller = document.getElementsByName('dil');
  for (var i = 0; i < diller.length; i++) {
    diller[i].innerHTML = diller[i].innerHTML+"javascript";
    alert(diller[i].tagName);
  }
  alert(typeof diller);
}

function selectAll() {
  var degerler = document.getElementsByName('ilgi');
  for (var i = 0; i < degerler.length; i++) {
      degerler[i].checked = true;
  }
}


function unSelectAll() {
  var degerler = document.getElementsByName('ilgi');
  for (var i = 0; i < degerler.length; i++) {
    degerler[i].checked= false;
  }
}

function playbuton(){
  var degerler = document.getElementsByName('ilgi');
  for (var i = 0; i < degerler.length; i++) {
    var bulean = degerler[i].checked;
    degerler[i].checked = !bulean;

  }

}
