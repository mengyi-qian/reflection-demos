function displayMessage() {
    alert('You just clicked a button');
}
function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// change shapes
let square1 = document.getElementById("square1");
let square2 = document.getElementById("square2");
let square3 = document.getElementById("square3");

function changeShapes() {
	square1.style.width='200px';
	square2.style.backgroundColor='red';
	square3.style.border='10px solid pink';
}

// change list styles 
let items = document.getElementsByTagName('li');
let yellowItems = document.getElementsByClassName('yellow');

function changeListStyles() {

	for ( let item of items ) {
	    item.textContent = item.textContent.toUpperCase();
	    item.style.fontStyle = "italic";
	}
	
	for ( let i = 0; i < yellowItems.length; i++ ) {
	    yellowItems[i].style.backgroundColor = 'gold';
	}

}