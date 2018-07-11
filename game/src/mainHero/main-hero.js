import './index.css';

import rylai from './img/main-hero.png';

export default function drawMainHero() {
  const ctx = document.querySelector('canvas').getContext('2d');
  let img = new Image();
  img.onload = function() {
    ctx.drawImage(img, 100, 445);
  };
  img.src = rylai;
};

