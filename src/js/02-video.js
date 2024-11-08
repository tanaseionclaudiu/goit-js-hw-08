import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe, {});

player.on(
  'timeupdate',
  throttle(function () {
    player
      .getCurrentTime()
      .then(function (seconds) {
        // seconds = the current playback position
        // console.log(`Current time is: ${seconds}`);
        localStorage.setItem('videoplayer-current-time', seconds);
      })
      .catch(function (error) {
        // an error occurred
      });
  }, 1000)
);

player.on('loaded', function () {
  player
    .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
    .then(function (seconds) {
      // seconds = the actual time that the player seeked to
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
});

player.on('ended', function () {
  localStorage.removeItem('videoplayer-current-time');
  localStorage.setItem('videoplayer-current-time', 0);
});
