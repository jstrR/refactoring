import gameBackgroundEarth from './img/game-background-earth.png';

export default function drawGameBackgroundEarth() {
  const ctx = document.querySelector('canvas').getContext('2d');
  let img = new Image();
  img.onload = function() {
    ctx.drawImage(img, 0, 570);
  };
  img.src = gameBackgroundEarth;
};
