import './index.css';
import correctAnswer from './../../logics/correctAnswer.js';
import incorrectAnswer from './../../logics/incorrectAnswer.js';
import animateSpell2 from './../spellsAnimation/spell2Animation.js';
import animateSpell1 from './../spellsAnimation/spell1Animation.js';

(function addTaskButtonToCasts() {
	const btn = document.createElement('button');
	btn.className = 'btn';
	btn.id = 'callAudioMet';
	btn.innerHTML = 'Audio';
	const casts = document.querySelector('.casts');
	casts.appendChild(btn);
}());

(function creatTask() {
	const div = document.createElement('div');
	div.className = 'audioMet';
	div.innerHTML = '<span class="taskHeading">Enter the word that you heard:</span><span class="task"><audio src="" controls></audio></span><label for="#userAudioInput">Your answer:</label><input type="text" id="userAudioInput"><button type="submit" id="sendAudioAnswer" class="send">Подтвердить</button><button type="submit" id="audioMainMenu" class="send">Назад</button>;'
	document.body.appendChild(div);
	/*Dom model:
	<div class="audioMet">
            <span class="taskHeading">Enter the word that you heard:</span>
            <span class="task">
                <audio src="" controls></audio>
            </span>
            <label for="#userAudioInput">Your answer:</label>
            <input type="text" id="userAudioInput">
            <button type="submit" id="sendAudioAnswer" class="send">Подтвердить</button>
            <button type="submit" id="audioMainMenu" class="send">Назад</button>
    </div>*/
}());

const castsModal = document.querySelector('.casts');
const currTask = document.querySelector('.audioMet');
const checkAnswer = document.querySelector('#sendAudioAnswer');
const mainMenu = document.querySelector('#audioMainMenu');
const callMet = document.querySelector('#callAudioMet');
const answer = document.querySelector('#userAudioInput');
const audio = document.querySelector('audio');

const audioList = {
	'../src/tasks/audioMet/sounds/activity.mp3' : 'activity',
	'../src/tasks/audioMet/sounds/dog.mp3' : 'dog',
	'../src/tasks/audioMet/sounds/global.mp3' : 'global',
	'../src/tasks/audioMet/sounds/inspiration.mp3' : 'inspiration',
	'../src/tasks/audioMet/sounds/mind.mp3': 'mind',
	'../src/tasks/audioMet/sounds/strategy.mp3' : 'strategy',
	'../src/tasks/audioMet/sounds/transfer.mp3' : 'transfer'
};

let randAudio = '';

let pickRandAudio = function () {
	let randNumber = Math.floor(Math.random() * Object.keys(audioList).length);
	return randNumber;
}

callMet.addEventListener('click', event =>{
	castsModal.style.display = 'none'; 
	randAudio = Object.keys(audioList)[pickRandAudio()];
	audio.src = randAudio;
	currTask.style.display = 'flex';
});

mainMenu.addEventListener('click', event =>{
	currTask.style.display = 'none';
	castsModal.style.display = 'flex';
});

checkAnswer.addEventListener('click', event =>{
	if(answer.value === audioList[randAudio]){
		correctAnswer();
		currTask.style.display = 'none';
		audio.src = '';
		animateSpell2();
		setTimeout(() => {
		  castsModal.style.display = 'flex';
		}, 3000);		
	} else {
		incorrectAnswer();
		currTask.style.display = 'none';
		audio.src = '';
		animateSpell1();
		setTimeout(() => {
		  castsModal.style.display = 'flex';
		}, 3000);
	}
});