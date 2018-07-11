import drawGameBackgroundEarth from './background/game-background.js';
import drawMainHero from './mainHero/main-hero.js';
import drawMonster from './monsters/monster.js';
import './tasks/mathMet/mathMethod.js';
import './tasks/audioMet/audioMet.js';
import './tasks/falsyMet/falsy.js';
import './tasks/translateMet/translate.js';
import './tasks/missedMet/missed.js';
import './tasks/sequenceMet/sequence.js';
import './tasks/actorsMet/actors.js';
import './tasks/questionsMet/questions.js';
import './tasks/compareMet/compare.js';

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1280;
canvas.height = 720;
document.body.appendChild(canvas);

const showMonsterHP = document.querySelector('.monster-HP');
const showMainHeroHP = document.querySelector('.mainHero-HP');
const openMenu = document.querySelector('.menu-open');
const casts = document.querySelector('.casts');

openMenu.addEventListener('click', event =>{
	openMenu.style.display = 'none';
	casts.style.display = 'flex';
});

drawGameBackgroundEarth();
drawMainHero();
drawMonster();

localStorage.setItem('monsterHP', 100);
localStorage.setItem('mainHero', 100);

(function getUserProfile() {
	let mainHeroName = document.querySelector('.mainHero-name');
	let playerid = +localStorage.getItem('curplayerid');
	let rating = localStorage.getItem('rating');
	rating = rating == null ? [] : JSON.parse(rating);
	let player = JSON.parse(localStorage.getItem('players'))[playerid];
	mainHeroName.innerHTML = `${player.lastName} ${player.firstName}`;
	showMonsterHP.innerHTML = '100 HP';
	showMainHeroHP.innerHTML = '100 HP';
}());













