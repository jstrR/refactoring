import './index.css';
import correctAnswer from './../../logics/correctAnswer.js';
import incorrectAnswer from './../../logics/incorrectAnswer.js';
import animateSpell2 from './../spellsAnimation/spell2Animation.js';
import animateSpell1 from './../spellsAnimation/spell1Animation.js';

(function addTaskButtonToCasts() {
	const btn = document.createElement('button');
	btn.className = 'btn';
	btn.id = 'callActMet';
	btn.innerHTML = 'Actors';
	const casts = document.querySelector('.casts');
	casts.appendChild(btn);
}());

(function creatTask() {
	const div = document.createElement('div');
	div.className = 'actMet';
	div.innerHTML = '<span class="taskHeading">Enter the name and surname of the actor:</span><img class="task" id="actImg"></img><label for="#userActInput">Your answer:</label><input type="text" id="userActInput"><button type="submit" id="sendActAnswer" class="send">Подтвердить</button><button type="submit" id="actMainMenu" class="send">Назад</button>';
	document.body.appendChild(div);
	/*Dom model:
	<div class="actMet">
            <span class="taskHeading">Enter the name and surname of the actor:</span>
            <img class="task" id="actImg"></img>
            <label for="#userActInput">Your answer:</label>
            <input type="text" id="userActInput">
            <button type="submit" id="sendActAnswer" class="send">Подтвердить</button>
            <button type="submit" id="actMainMenu" class="send">Назад</button>
	</div>*/
}());

const callMet = document.querySelector('#callActMet');
const castsModal = document.querySelector('.casts');
const currTask = document.querySelector('.actMet');
const checkAnswer = document.querySelector('#sendActAnswer');
const mainMenu = document.querySelector('#actMainMenu');
const answer = document.querySelector('#userActInput');
const img = document.querySelector('img');

let actors = {
	'../src/tasks/actorsMet/img/Smith.PNG' : ['will smith', 'Will Smith'],
	'../src/tasks/actorsMet/img/keanureeves.PNG' : ['Keanu Reeves', 'keanu reeves'],
	'../src/tasks/actorsMet/img/bacon.PNG' : ['Kevin Bacon', 'kevin bacon'],
	'../src/tasks/actorsMet/img/redford.PNG' : ['Robert Radford', 'robert radford'],
	'../src/tasks/actorsMet/img/jaredleto.PNG' : ['Jared Leto', 'jared leto']
};

let currRandAct = '';

let pickRandAct = function () {
	let randNumber = Math.floor(Math.random() * Object.keys(actors).length);
	return randNumber;
}

callMet.addEventListener('click', event =>{
	castsModal.style.display = 'none'; 
	currRandAct = Object.keys(actors)[pickRandAct()];
	img.src = currRandAct;
	currTask.style.display = 'flex';
});

mainMenu.addEventListener('click', event =>{
	currTask.style.display = 'none';
	castsModal.style.display = 'flex';
});

checkAnswer.addEventListener('click', event =>{
	let currentAct = [];
	let flag = false;
	currentAct = actors[currRandAct];
	for (let i = 0; i < currentAct.length; i++){
		if(answer.value === currentAct[i]) {flag = true;}
	}
	if(flag){
		correctAnswer();
		currTask.style.display = 'none';
		img.src = '';
		animateSpell2();
		setTimeout(() => {
	    castsModal.style.display = 'flex';
		}, 3000);		
	} else {
		incorrectAnswer();
		currTask.style.display = 'none';
		img.src = '';
		animateSpell1();
		setTimeout(() => {
		  castsModal.style.display = 'flex';
		}, 3000);
	}
});
	
