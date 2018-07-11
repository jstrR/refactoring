const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');

let players = localStorage.getItem("players");
players = players == null ? [] : JSON.parse(players);

let moveForward = submit.addEventListener('click',()=>{
	if(firstName.value === "" || lastName.value === ""){
		alert('Fill in all fields');
	}else {
		let count = players.length;
		let playerProfile = {
			firstName : firstName.value,
			lastName : lastName.value,
			id: count++
		};

		let playerexists = players.filter(p => {
			let exists = (p.firstName === playerProfile.firstName)
				&& (p.lastName === playerProfile.lastName);
			if (exists) playerProfile = p;
			return exists;
		}).length !== 0;

		if (!playerexists) {
			players.push(playerProfile);
		}

		localStorage.setItem('players', JSON.stringify(players));
		localStorage.setItem('curplayerid', playerProfile.id);
		localStorage.setItem('monstersKilled', 0);
		location.href='game/dist/index.html';
	}
});