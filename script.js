console.log('Welcome To Spotify');
//Initialise the variables
let songIndex = 0;
let audioElement = new Audio('songs/song1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
  {
    songName: 'Sanam Re',
    filePath: 'songs/song1.mp3',
    coverPath: 'cover/1.jpg',
  },
  {
    songName: '8-parche',
    filePath: 'songs/song2.mp3',
    coverPath: 'cover/2.jpg',
  },
  {
    songName: 'Aaj Bhi',
    filePath: 'songs/song3.mp3',
    coverPath: 'cover/3.jpg',
  },
  {
    songName: 'Amplifier',
    filePath: 'songs/song4.mp3',
    coverPath: 'cover/4.jpg',
  },
  {
    songName: 'Apna Bana Le',
    filePath: 'songs/song5.mp3',
    coverPath: 'cover/5.jpg',
  },
  {
    songName: 'Baarish',
    filePath: 'songs/song6.mp3',
    coverPath: 'cover/6.jpg',
  },
  {
    songName: 'Baller',
    filePath: 'songs/song7.mp3',
    coverPath: 'cover/7.jpg',
  },
  {
    songName: 'Bamb',
    filePath: 'songs/song8.mp3',
    coverPath: 'cover/8.jpg',
  },
  {
    songName: 'Khuda Bhi',
    filePath: 'songs/song9.mp3',
    coverPath: 'cover/9.jpg',
  },
  {
    songName: 'Kaun Tujhe',
    filePath: 'songs/song10.mp3',
    coverPath: 'cover/10.jpg',
  },
];
songItems.forEach((element, i) => {
  element.getElementsByTagName('img')[0].src = songs[i].coverPath;
  element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});
//audioElement.play();
//listen to events
//Handle play/pause click
masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.add('fa-play-circle');
    masterPlay.classList.remove('fa-pause-circle');
    gif.style.opacity = 0;
  }
});
audioElement.addEventListener('timeupdate', () => {
  //update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressbar.value = progress;
});
myProgressbar.addEventListener('change', () => {
  audioElement.currentTime =
    (myProgressbar.value * audioElement.duration) / 100;
});
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('songItemPlay')).forEach(
    element => {
      element.classList.add('fa-play-circle');
      element.classList.remove('fa-pause-circle');
    }
  );
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach(element => {
  element.addEventListener('click', e => {
    console.log(e.target);
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `songs/song${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;

    audioElement.currentTime = 0;
    audioElement.play();
    element.classList.remove('fa-play-circle');
    element.classList.add('fa-pause-circle');
  });
});

document.getElementById('next').addEventListener('click', () => {
  if (songIndex >= 10) {
    songIndex = 1;
    gif.style.opacity = 1;
  } else {
    songIndex = songIndex + 1;
    gif.style.opacity = 0;
  }
  audioElement.src = `songs/song${songIndex}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  element.classList.remove('fa-play-circle');
  element.classList.add('fa-pause-circle');
});
document.getElementById('previous').addEventListener('click', () => {
  if (songIndex <= 1) {
    songIndex = 1;
  } else {
    songIndex = songIndex - 1;
  }
  audioElement.src = `songs/song${songIndex}.mp3`;
  audioElement.currentTime = 0;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.play();
  gif.style.opacity = 1;
  element.classList.remove('fa-play-circle');
  element.classList.add('fa-pause-circle');
});
