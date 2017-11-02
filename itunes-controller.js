function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }
  //Start coding here

  function draw(songList) {
    console.log(songList)
    var template = ''
    for (var i = 0; i < songList.length; i++) {
      var song = songList[i]
      var albumArt = song.albumArt.replace('100x100bb', '500x500bb')
      var templates = {
        'song': ` 
        <div class="col-sm-12 col-md-6 flex v-center h-center">
        <div id="song-wrapper" class="song-wrapper panel panel-default text-center">
        <div class="panel-body">
        <img class="song-image" src="${albumArt}" alt="">
        <p class="song-title">${song.title}</p>
        <p class="artist-name">${song.artist}</p>
        <p class="album-title">${song.collection}</p>
        <audio src="${song.preview}" controls></audio>                    
        <p class="album-price">Album Price: 
        ${(song.currency === 'USD') ? ('$' + song.albumPrice) : (song.albumPrice + ' ' + song.currency)}</p>
        </div>
        </div>
        </div>
      `}
      template += templates[song.fileType]
      document.getElementById('songs').innerHTML = template
      console.clear()
    }
  }
}