//document.getElementById('miiframe').src = "https://www.youtube.com/embed/aqwZsHAv1Ig?autoplay=1";

/*
  Videos con los que voy a trabajar:

    Zelda & Chill -----------------------> ID: GdzrrWA8e7A
    Official Orchestrated Zelda Music ---> ID: asHAvqwZ1Ig
    Luna - Don Omar ---------------------> ID: _hdrVZ-7o-0
    
*/

function cambiarVideo(enlace, autoreproducir) {
  var src = "https://www.youtube.com/embed/";
  if (autoreproducir) {
    src += enlace + "?autoplay=1";
  } else {
    src += enlace + "?autoplay=0";
  }
  document.getElementById("iframe-video-principal").src = "";
  document.getElementById("iframe-video-principal").src = src;
}

function obtenerID_YT(enlaceYT) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var match = enlaceYT.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
}

function resizeIframe(obj) {
  obj.style.height = obj.contentWindow.document.body.scrollHeight + "px";
}


//Flujo de ejecución

/*

var nombre = localStorage.getItem('name');
var usuario = localStorage.getItem('usr');
var PassWord = localStorage.getItem('pwd');
var correo = localStorage.getItem('email');

*/

// guardar datos en la sesión actual

/*
sessionStorage.setItem("name", "Fernando Alvarado");
sessionStorage.setItem("usr", "Fernando9825");
sessionStorage.setItem("pwd", "pwd");
sessionStorage.setItem("fer25alvarado@gmail.com", "email")
*/

console.log(sessionStorage.getItem('name'));