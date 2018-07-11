import './index.css';
import correctAnswer from './../../logics/correctAnswer.js';
import incorrectAnswer from './../../logics/incorrectAnswer.js';
import animateSpell2 from './../spellsAnimation/spell2Animation.js';
import animateSpell1 from './../spellsAnimation/spell1Animation.js';

(function addTaskButtonToCasts() {
	const btn = document.createElement('button');
	btn.className = 'btn';
	btn.id = 'callSeqMet';
	btn.innerHTML = 'Sequences';
	const casts = document.querySelector('.casts');
	casts.appendChild(btn);
}());

(function creatTask() {
	const div = document.createElement('div');
	div.className = 'seqMet';
	div.innerHTML = '<span class="taskHeading">Solve the sequence:</span><span class="task" id="seqText"></span><label for="#userSeqInput">Your answer:</label><input type="text" id="userSeqInput"><button type="submit" id="sendSeqAnswer" class="send">Подтвердить</button><button type="submit" id="seqMainMenu" class="send">Назад</button>';
	document.body.appendChild(div);
	/*Dom model:
	<div class="seqMet">
            <span class="taskHeading">Solve the sequence:</span>
            <span class="task" id="seqText"></span>
            <label for="#userSeqInput">Your answer:</label>
            <input type="text" id="userSeqInput">
            <button type="submit" id="sendSeqAnswer" class="send">Подтвердить</button>
            <button type="submit" id="seqMainMenu" class="send">Назад</button>
    </div>*/
}());

const callMet = document.querySelector('#callSeqMet');
const castsModal = document.querySelector('.casts');
const currTask = document.querySelector('.seqMet');
const checkAnswer = document.querySelector('#sendSeqAnswer');
const mainMenu = document.querySelector('#seqMainMenu');
const answer = document.querySelector('#userSeqInput');
const task = document.querySelector('#seqText');

let sequences = {
	'2, 4, 6, 8' : '10',
	'1000, 1, 500, ?, 50, 2.718' : '500',
	'Чебышев, Тургенев, Моцарт, Лермонтов, Чайковский, Берлиоз' : 'Моцарт',
	'П, В, С, ?, П, С, В' : 'Ч',
	'Ь, Ь, Т, Ь, ?, Ь, Ь, Т, Ь, Ь, Ь, Ь' : 'Й'
};

let currRandSeq = '';

let pickRandSeq = function () {
	let randNumber = Math.floor(Math.random() * Object.keys(sequences).length);
	return randNumber;
}

callMet.addEventListener('click', event =>{
	castsModal.style.display = 'none'; 
	currRandSeq = Object.keys(sequences)[pickRandSeq()];
	task.innerHTML = currRandSeq;
	currTask.style.display = 'flex';
});

mainMenu.addEventListener('click', event =>{
	currTask.style.display = 'none';
	castsModal.style.display = 'flex';
});

checkAnswer.addEventListener('click', event =>{
	if(answer.value === sequences[currRandSeq]){
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
