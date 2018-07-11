import './index.css';

import head1 from './img/head1.png';
import head2 from './img/head2.png';
import head3 from './img/head3.png';

import body1 from './img/body1.png';
import body2 from './img/body2.png';
import body3 from './img/body3.png';

import legs1 from './img/legs1.png';
import legs2 from './img/legs2.png';
import legs3 from './img/legs3.png';

import weapon1 from './img/weapon1.png';
import weapon2 from './img/weapon2.png';
import weapon3 from './img/weapon3.png';

export default function drawMonster() {
	const ctx = document.querySelector('canvas').getContext('2d');

	function drawBody(){
		let img = new Image();
		let body = [body1, body2, body3];
		let randBody = Math.floor(Math.random() * body.length);
		img.onload = function() {
			ctx.drawImage(img, 1090, 390);
		};
		img.src = body[randBody];
	}
	
	function drawHead(){
		let img = new Image();
		let head = [head1, head2, head3];
		let randHead = Math.floor(Math.random() * head.length);
		img.onload = function() {
			ctx.drawImage(img, 1070, 255);
		};
		img.src = head[randHead];
	}

	function drawLegs(){
		let img = new Image();
		let legs = [legs1, legs2, legs3];
		let randLegs = Math.floor(Math.random() * legs.length);
		img.onload = function() {
			ctx.drawImage(img, 1110, 550);
		};
		img.src = legs[randLegs];
	}

	function drawWeapon(){
		let img = new Image();
		let weapons = [weapon1, weapon2, weapon3];
		let randWeapon = Math.floor(Math.random() * weapons.length);
		img.onload = function() {
			ctx.drawImage(img, 990, 360);
		};
		img.src = weapons[randWeapon];	
	}

	function showMonsterName() {
		let monsterName = document.querySelector('.monster-name');
		let trait = ['Terrible', 'Angry', 'Snotty'];
		let race = ['ogre', 'human', 'elf'];
		let names = ['Tom','James', 'Monica', 'Anton'];
		let randTrait = Math.floor(Math.random() * trait.length);
		let randRace = Math.floor(Math.random() * race.length);
		let randName = Math.floor(Math.random() * names.length);
		let monsterFullName = trait[randTrait] + ' ' + race[randRace] + ' ' + names[randName];
		monsterName.innerHTML = monsterFullName;
	}

	showMonsterName();
	drawBody();
	drawHead();
	drawLegs();
	drawWeapon();
};





