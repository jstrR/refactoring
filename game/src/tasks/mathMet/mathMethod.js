import './index.css';
import correctAnswer from './../../logics/correctAnswer.js';
import incorrectAnswer from './../../logics/incorrectAnswer.js';
import animateSpell2 from './../spellsAnimation/spell2Animation.js';
import animateSpell1 from './../spellsAnimation/spell1Animation.js';

(function addTaskButtonToCasts() {
	const btn = document.createElement('button');
	btn.className = 'btn';
	btn.id = 'callMathMet';
	btn.innerHTML = 'Arithmetics';
	const casts = document.querySelector('.casts');
	casts.appendChild(btn);
}());

(function creatTask() {
	const div = document.createElement('div');
	div.className = 'mathMet';
	div.innerHTML = '<span class="taskHeading">Solve an example:</span><span class="task"></span><label for="#userMathInput">Your answer:</label><input type="text" id="userMathInput"><button type="submit" id="sendMathAnswer" class="send">Подтвердить</button><button type="submit" id="mathMainMenu" class="send">Назад</button>';
	document.body.appendChild(div);
	/*Dom model:
	<div class="mathMet">
            <span class="taskHeading">Solve an example:</span>
            <span class="task"></span>
            <label for="#userMathInput">Your answer:</label>
            <input type="text" id="userMathInput">
            <button type="submit" id="sendMathAnswer" class="send">Подтвердить</button>
            <button type="submit" id="mathMainMenu" class="send">Назад</button>
	</div>*/
}());

const callMet = document.querySelector('#callMathMet');
const castsModal = document.querySelector('.casts');
const currTask = document.querySelector('.mathMet');
const checkAnswer = document.querySelector('#sendMathAnswer');
const mainMenu = document.querySelector('#mathMainMenu');
const answer = document.querySelector('#userMathInput');
const task = document.querySelector('.task');

let randomize = function() {
	let max = 30;
	let min = 0;
	let firstNum = 0;
	let secNum = 0;
	let symbol = ['+','-','/','*'];
	let symbolRand = Math.floor(Math.random() * symbol.length);
	firstNum = Math.floor(Math.random() * (max - min) + min);
	secNum = Math.floor(Math.random() * (max - min) + min);
	return [symbol[symbolRand], firstNum, secNum];
}

let data = []; 

callMet.addEventListener('click', event =>{
	castsModal.style.display = 'none'; 
	currTask.style.display = 'flex';
	data = randomize();
	task.innerHTML = data[1] + ' ' + data[0] + ' ' +  data[2];
});

let returnResult = function(){
	let returnedAnswer = 0;
	switch(data[0]) {
		case '+':
			returnedAnswer = data[1] + data[2];
			return `${returnedAnswer}`;
			break;
		case '-':
			returnedAnswer = data[1] - data[2];
			return `${returnedAnswer}`;
			break;
		case '*':
			returnedAnswer = data[1] * data[2];
			return `${returnedAnswer}`;
			break;
		case '/':
			returnedAnswer = data[1] / data[2];
			if(returnedAnswer % 2 === 0){
				returnedAnswer = returnedAnswer.toFixed(0);
				return `${returnedAnswer}`;
			} else {
				returnedAnswer = returnedAnswer.toFixed(1);
				return `${returnedAnswer}`;
			break;
			}
	}
}

mainMenu.addEventListener('click', event =>{
	currTask.style.display = 'none';
	castsModal.style.display = 'flex';
});

checkAnswer.addEventListener('click', event =>{
	if(answer.value === returnResult()){
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