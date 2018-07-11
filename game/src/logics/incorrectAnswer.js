export default function incorrectAnswer(){

	const showMainHeroHP = document.querySelector('.mainHero-HP');
	let damage = Math.floor(Math.random() * (50 - 0) + 0);
	let currMainHeroHP = localStorage.getItem('mainHero');
	currMainHeroHP = currMainHeroHP - damage;

	if(currMainHeroHP > 0){

		localStorage.setItem('mainHero', currMainHeroHP);
		setTimeout(() => {
	    	showMainHeroHP.innerHTML = currMainHeroHP + ' HP';
		}, 3000)
		alert('Your answer is incorrect');

	} if(currMainHeroHP <= 0) {

		updateLeaderBoard();
		showLeaderBoard();
	}
}

function updateLeaderBoard() {
	let monstersKilled = +localStorage.getItem('monstersKilled');
	let playerid = +localStorage.getItem('curplayerid');
	let rating = localStorage.getItem('rating');
	rating = rating == null ? [] : JSON.parse(rating);
	let player = JSON.parse(localStorage.getItem('players'))[playerid];	
	let record = {
		name: player.lastName + " " + player.firstName,
		streak: monstersKilled
	};
	rating.push(record);
	rating = rating.sort((a, b) => b.streak - a.streak).slice(0, 10);
	localStorage.setItem('rating', JSON.stringify(rating));
}

function showLeaderBoard() {

	const golp = document.querySelector('#goLP');
	const gameOver = document.querySelector('.game-over');
	const tbody = document.querySelector('tbody');
	const showMainHeroHP = document.querySelector('.mainHero-HP');
	let lastStat = localStorage.getItem('rating');
	lastStat = lastStat == null ? [] : JSON.parse(lastStat);
	
	for (var i = 0; i < lastStat.length; i++) {
		let tr = document.createElement("tr");
		let name = document.createElement("td");
		let streak = document.createElement("td");
		name.innerText = lastStat[i].name;
		streak.innerText = lastStat[i].streak;
		tr.appendChild(name);
		tr.appendChild(streak);
		tbody.appendChild(tr);
	}	

	setTimeout(() => {
	  showMainHeroHP.innerHTML = '0 HP';
	  gameOver.style.display = 'flex';
	}, 3000)
		
	golp.addEventListener('click', event => {
	  location.href = '../../index.html';
	});
}