import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const videoEl = document.querySelector('#vimeo-player');
const player = new Player(videoEl);
const getTime = localStorage.getItem('videoplayer-current-time');

function onSaveVideoTime(data) {
  const dataTime = data.seconds;
  console.log(dataTime);
  localStorage.setItem('videoplayer-current-time', dataTime);
}

player.on('timeupdate', throttle(onSaveVideoTime, 1000));

player
  .setCurrentTime(getTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
