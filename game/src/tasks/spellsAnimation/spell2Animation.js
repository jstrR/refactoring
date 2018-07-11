import spell2 from './img/spell2.png'

function spell2Sound() {
  let audio = new Audio(); 
  audio.src = '../src/tasks/spellsAnimation/sounds/deathPulse.mp3';
  audio.volume = 0.5; 
  audio.autoplay = true; 
}

export default function animateSpell2(){
  const ctx = document.querySelector('canvas').getContext('2d');
  let x = 260;
  let height = 128;
  let img = new Image();
  img.onload = function() {
    spell2Sound();
    let spell2Interval = setInterval(() => {
      ctx.clearRect(x, 445, 128, 128);
      ctx.drawImage(img, x, 445);
      if (x < 900) {
        x++;        
      } else{
        ctx.clearRect(900, 445, 128, 128);
        clearInterval(spell2Interval);
      }
    }, 3); 
  };
  img.src = spell2;
}

  
  