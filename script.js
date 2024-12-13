const playlists = {
    happy: { title: "Happy Vibes", artist: "Artist 1", url: "assets/happy.mp3" },
    sad: { title: "Melancholy Tune", artist: "Artist 2", url: "assets/sad.mp3" },
    relaxed: { title: "Chill Beats", artist: "Artist 3", url: "assets/relaxed.mp3" },
    energized: { title: "Workout Jam", artist: "Artist 4", url: "assets/energized.mp3" },
  };
  
  const backgrounds = {
    happy: "#ffecb3",
    sad: "#b3cde0",
    relaxed: "#c8e6c9",
    energized: "#f8bbd0",
  };
  
  function changeMood(mood) {
    
    if (!playlists[mood]) return; 
  
    document.body.style.backgroundColor = backgrounds[mood];
    const song = playlists[mood];
    document.getElementById('song-title').textContent = song.title;
    document.getElementById('song-artist').textContent = song.artist;
  
    const audioSource = document.getElementById('audio-source');
    audioSource.src = song.url;
  
    const audio = document.getElementById('song-audio');
    audio.load();
    audio.play();
  }
  