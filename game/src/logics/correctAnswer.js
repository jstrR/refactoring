import drawMonster from './../monsters/monster.js';

export default function correctAnswer() {

	const showMonsterHP = document.querySelector('.monster-HP');
	const ctx = document.querySelector('canvas').getContext('2d');
	let damage = Math.floor(Math.random() * (100 - 0) + 0);
	let currMonsterHP = localStorage.getItem('monsterHP');
	currMonsterHP = currMonsterHP - damage;

	if(currMonsterHP > 0) {

		localStorage.setItem('monsterHP', currMonsterHP);
		setTimeout(() => {
		  showMonsterHP.innerHTML = currMonsterHP + ' HP';
		}, 3000)
	} if(currMonsterHP < 0) {

		localStorage.setItem('monsterHP', 100);
		let monsterStreak = +localStorage.getItem('monstersKilled');
		monsterStreak += 1;
		localStorage.setItem('monstersKilled', monsterStreak);
		
		setTimeout(() => {
			alert('Congradulations, you killed monster!');	
		  	showMonsterHP.innerHTML = '100 HP';
		  	ctx.clearRect(900, 200, 400, 395);
		 	drawMonster();
		}, 3000);
	}	
}
	