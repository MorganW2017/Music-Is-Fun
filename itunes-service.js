function ItunesService() {
  this.getMusicByArtist = function (artist) {

    //allows requests to localhost: 8080 otherwise blocked by itunes
    var url = '//bcw-getter.herokuapp.com/?url=';
    var url2 = 'https://itunes.apple.com/search?term=' + artist;
    var apiUrl = url + encodeURIComponent(url2);

    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING.GET...');

    //modifies the objects to reduce the excess data
    return $.getJSON(apiUrl).then(function (response) {
      var songList = response.results.map(function (song) {
        return {
          title: song.trackName,
          albumArt: song.artworkUrl100,
          artist: song.artistName,
          collection: song.collectionName,
          albumPrice: song.collectionPrice,
          trackPrice: song.trackPrice,
          preview: song.previewUrl,
          currency: song.currency,
          fileType: song.kind,
          genre: song.primaryGenreName
        };
      })
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('Music');
      return songList;
    })
  }
}