var nav = document.querySelector('nav');
var tile = document.querySelector('a')

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    nav.classList.add( 'shadow', );

  } else {
    nav.classList.remove( 'shadow', );
    
  }
});     


var a = document.getElementById('tampil');
function putarmusic(){
    a.style.display = "none";
    var audio = new Audio('song/wadad.mp3');
    audio.play();
    audio.loop = true;
} 




var a = document.getElementById('tampil');
		function putarmusic(){
			a.style.display = "none";
			var audio = new Audio('song/wadad.mp3');
			audio.play();
            audio.loop = true;
		}

		