import './index.css';
import correctAnswer from './../../logics/correctAnswer.js';
import incorrectAnswer from './../../logics/incorrectAnswer.js';
import animateSpell2 from './../spellsAnimation/spell2Animation.js';
import animateSpell1 from './../spellsAnimation/spell1Animation.js';

(function addTaskButtonToCasts() {
	const btn = document.createElement('button');
	btn.className = 'btn';
	btn.id = 'callMissedMet';
	btn.innerHTML = 'Missed letter';
	const casts = document.querySelector('.casts');
	casts.appendChild(btn);
}());

(function creatTask() {
	const div = document.createElement('div');
	div.className = 'missedMet';
	div.innerHTML = '<span class="taskHeading">Enter the missing letter:</span><span class="task" id="missedText"></span><label for="#userMissedInput">Your answer:</label><input type="text" id="userMissedInput"><button type="submit" id="sendMissedAnswer" class="send">Подтвердить</button><button type="submit" id="missedMainMenu" class="send">Назад</button>';
	document.body.appendChild(div);
	/*Dom model:
	<div class="missedMet">
            <span class="taskHeading">Enter the missing letter:</span>
            <span class="task" id="missedText"></span>
            <label for="#userMissedInput">Your answer:</label>
            <input type="text" id="userMissedInput">
            <button type="submit" id="sendMissedAnswer" class="send">Подтвердить</button>
            <button type="submit" id="missedMainMenu" class="send">Назад</button>
    </div>*/
}());

const callMet = document.querySelector('#callMissedMet');
const castsModal = document.querySelector('.casts');
const currTask = document.querySelector('.missedMet');
const checkAnswer = document.querySelector('#sendMissedAnswer');
const mainMenu = document.querySelector('#missedMainMenu');
const answer = document.querySelector('#userMissedInput');
const task = document.querySelector('#missedText');

let letters = {
	'com_unity' : 'm',
	'Eif_el' : 'f',
	'for_head' : 'e',
	'ac_lerate' : 'c',
	'simi_lar' : '',
	'develo_ment' : 'p'
};

let currRandLetter = '';

let pickRandExample = function () {
	let randNumber = Math.floor(Math.random() * Object.keys(letters).length);
	return randNumber;
}

callMet.addEventListener('click', event =>{
	castsModal.style.display = 'none'; 
	currRandLetter = Object.keys(letters)[pickRandExample()];
	task.innerHTML = currRandLetter;
	currTask.style.display = 'flex';
});

mainMenu.addEventListener('click', event =>{
	currTask.style.display = 'none';
	castsModal.style.display = 'flex';
});

checkAnswer.addEventListener('click', event =>{
	if(answer.value === letters[currRandLetter]){
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
