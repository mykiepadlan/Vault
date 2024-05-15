    const playBtn = document.querySelector('.play-btn');
    const bgMusic = document.getElementById('bg-music');
    const vinyl = document.querySelector('.vinyl');
  
    playBtn.addEventListener('click', () => {
      if (bgMusic.paused) 
      {
        bgMusic.play();
      } 
      else{
        bgMusic.pause();
      }
    });
  