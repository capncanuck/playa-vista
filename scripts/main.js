var theHeader =document.querySelector('h1')
var theImage = document.querySelector('img');
var theButton = document.querySelector('button');


function setUserName() {
	var userName = prompt('Please enter your name.');
	localStorage.setItem('name',userName);
	theHeader.textContent = '¡Hola  ' + userName + '!';
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	theHeader.textContent = '¡Hola  ' + localStorage.getItem('name');
}


theImage.onclick = function() {
	var currentSrc = theImage.getAttribute('src');
	if(currentSrc === 'images/full-name-with-leaf/PVC-Logo-with-Leaf.gif') {
		theImage.setAttribute('src','images/full-name-logo/PVC-Full-Name.gif')		
	}
	else {
		theImage.setAttribute('src','images/full-name-with-leaf/PVC-Logo-with-Leaf.gif');
	}
}

theButton.onclick = function() {
	setUserName()
}

