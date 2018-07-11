import './index.css';
import correctAnswer from './../../logics/correctAnswer.js';
import incorrectAnswer from './../../logics/incorrectAnswer.js';
import animateSpell2 from './../spellsAnimation/spell2Animation.js';
import animateSpell1 from './../spellsAnimation/spell1Animation.js';

(function addTaskButtonToCasts() {
	const btn = document.createElement('button');
	btn.className = 'btn';
	btn.id = 'callFalsyMet';
	btn.innerHTML = 'True/False';
	const casts = document.querySelector('.casts');
	casts.appendChild(btn);
}());

(function creatTask() {
	const div = document.createElement('div');
	div.className = 'falsyMet';
	div.innerHTML = '<span class="taskHeading">Choose true or false:</span><span class="task" id="falsyText"></span><label for="#userFalsyInput">Your answer:</label><select name="true/false" id="userFalsyInput"><option value="true">True</option><option value="false">False</option></select><button type="submit" id="sendFalsyAnswer" class="send">Подтвердить</button><button type="submit" id="FalsyMainMenu" class="send">Назад</button></div>';
	document.body.appendChild(div);
	/*Dom model:
	<div class="falsyMet">
            <span class="taskHeading">Choose true or false:</span>
            <span class="task" id="falsyText"></span>
            <label for="#userFalsyInput">Your answer:</label>
            <select name="true/false" id="userFalsyInput">
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
            <button type="submit" id="sendFalsyAnswer" class="send">Подтвердить</button>
            <button type="submit" id="FalsyMainMenu" class="send">Назад</button>
	</div>*/
}());

const callMet = document.querySelector('#callFalsyMet');
const castsModal = document.querySelector('.casts');
const currTask = document.querySelector('.falsyMet');
const checkAnswer = document.querySelector('#sendFalsyAnswer');
const mainMenu = document.querySelector('#FalsyMainMenu');
const answer = document.querySelector('#userFalsyInput');
const task = document.querySelector('#falsyText');

let examples = {
	'Writer Mark Twain invented and patented a bra clasp' : ['true', 'True'],
	'The Eiffel Tower in the summer becomes higher by 15 centimeters' : ['true', 'True'],
	'The space on the forehead between the eyebrows is called a "racket"' : ['false', 'False'],
	'The flea can accelerate faster than the space shuttle' : ['true', 'True'],
	'Human DNA and banana are similar to 90%' : ['false', 'False']
};

let currRandExample = '';

let pickRandExample = function () {
	let randNumber = Math.floor(Math.random() * Object.keys(examples).length);
	return randNumber;
}

callMet.addEventListener('click', event =>{
	castsModal.style.display = 'none'; 
	currRandExample = Object.keys(examples)[pickRandExample()];
	task.innerHTML = currRandExample;
	currTask.style.display = 'flex';
});

mainMenu.addEventListener('click', event =>{
	currTask.style.display = 'none';
	castsModal.style.display = 'flex';
});

checkAnswer.addEventListener('click', event =>{
	let currentExample = [];
	let flag = false;
	currentExample = examples[currRandExample];
	for (let i = 0; i < currentExample.length; i++){
		if(answer.value === currentExample[i]) {flag = true;}
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