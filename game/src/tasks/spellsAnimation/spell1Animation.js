import spell1 from './img/spell1.png'

function spell1Sound() {
  let audio = new Audio(); 
  audio.src = '../src/tasks/spellsAnimation/sounds/dragonSlave.mp3';
  audio.volume = 0.5; 
  audio.autoplay = true; 
}

export default function animateSpell1(){
  const ctx = document.querySelector('canvas').getContext('2d');
  let x = 900;
  let height = 128;
  let img = new Image();
  img.onload = function() {
    spell1Sound();
    let spell1Interval = setInterval(() => {
      ctx.clearRect(x, 445, 128, 128);
      ctx.drawImage(img, x, 445);
      if (x > 260) {
        x--;        
      } else{
        ctx.clearRect(260, 445, 128, 128);
        clearInterval(spell1Interval);
      }
    }, 3); 
  };
  img.src = spell1;
}

  
  