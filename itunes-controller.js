function ItunesController() {
  var itunesService = new ItunesService()
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw);
  }
  //Start coding here
  function drawList() {
    var songList = itunesService[songList];
  }
}
document.addEventListener('play', function (e) {
  var audios = document.getElementsByClassName('audio');
  for (var i = 0, len = audios.length; i < len; i++) {
    if (audios[i] != e.target) {
      audios[i].pause();
    }
  }
}, true);

drawList()