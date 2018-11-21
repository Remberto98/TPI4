//document.getElementById('miiframe').src = "https://www.youtube.com/embed/aqwZsHAv1Ig?autoplay=1";

/*
  Videos con los que voy a trabajar:

    Zelda & Chill ---> ID: GdzrrWA8e7A
    
*/

function cambiarVideo(enlace, autoreproducir) {
  var src = "https://www.youtube.com/embed/";
  if (autoreproducir) {
    src += enlace + "?autoplay=1";
  } else {
    src += enlace + "?autoplay=0";
  }
  document.getElementById('iframe-video-principal').src = "";
  document.getElementById('iframe-video-principal').src = src;
}

function obtenerID_YT(enlaceYT) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var match = url.match(regExp);
  return (match&&match[7].length==11)? match[7] : false;
}

cambiarVideo("asHAvqwZ1Ig", true);
alert("Ronald es la vieja puta! xdxdxd");

