import './index.css';
import correctAnswer from './../../logics/correctAnswer.js';
import incorrectAnswer from './../../logics/incorrectAnswer.js';
import animateSpell2 from './../spellsAnimation/spell2Animation.js';
import animateSpell1 from './../spellsAnimation/spell1Animation.js';

(function addTaskButtonToCasts() {
	const btn = document.createElement('button');
	btn.className = 'btn';
	btn.id = 'callQMet';
	btn.innerHTML = 'Questions';
	const casts = document.querySelector('.casts');
	casts.appendChild(btn);
}());

(function creatTask() {
	const div = document.createElement('div');
	div.className = 'qMet';
	div.innerHTML = '<span class="taskHeading">Solve the sequence:</span><span class="task" id="qText"></span><label for="#userQInput">Your answer:</label><input type="text" id="userQInput"><button type="submit" id="sendQAnswer" class="send">Подтвердить</button><button type="submit" id="qMainMenu" class="send">Назад</button>';
	document.body.appendChild(div);
	/*Dom model:
	<div class="qMet">
            <span class="taskHeading">Solve the sequence:</span>
            <span class="task" id="qText"></span>
            <label for="#userQInput">Your answer:</label>
            <input type="text" id="userQInput">
            <button type="submit" id="sendQAnswer" class="send">Подтвердить</button>
            <button type="submit" id="qMainMenu" class="send">Назад</button>
	</div>*/
}());

const callMet = document.querySelector('#callQMet');
const castsModal = document.querySelector('.casts');
const currTask = document.querySelector('.qMet');
const checkAnswer = document.querySelector('#sendQAnswer');
const mainMenu = document.querySelector('#qMainMenu');
const answer = document.querySelector('#userQInput');
const task = document.querySelector('#qText');

let questions = {
	'How many months a year have 28 days?' : ['all', '12', 'everyone'],
	'What can you see with your eyes closed?' : ['dreams', 'sleep'],
	'What in the fire does not burn and does not sink in the water?' : ['ice'],
	'Whom do Australians call sea osoy?' : ['medusa', 'jellyfish'],
	'Moscow used to be called white stone. And what city was called black?' : ['Chernigov', 'chernigov']
};

let currRandQ = '';

let pickRandQ = function () {
	let randNumber = Math.floor(Math.random() * Object.keys(questions).length);
	return randNumber;
}

callMet.addEventListener('click', event =>{
	castsModal.style.display = 'none'; 
	currRandQ = Object.keys(questions)[pickRandQ()];
	task.innerHTML = currRandQ;
	currTask.style.display = 'flex';
});

mainMenu.addEventListener('click', event =>{
	currTask.style.display = 'none';
	castsModal.style.display = 'flex';
});

checkAnswer.addEventListener('click', event =>{
	let currentQ = [];
	let flag = false;
	currentQ = questions[currRandQ];
	for (let i = 0; i < currentQ.length; i++){
		if(answer.value === currentQ[i]) {flag = true;}
	}
	if(flag){
		correctAnswer();
		currTask.style.display = 'none';
		task.innerHTML = '';
		animateSpell2();
		setTimeout(() => {
	    castsModal.style.display = 'flex';
		}, 3000);		
	} else {
		incorrectAnswer();
		currTask.style.display = 'none';
		task.innerHTML = '';
		animateSpell1();
		setTimeout(() => {
		  castsModal.style.display = 'flex';
		}, 3000);
	}
});
	
