// change shapes
let square1 = document.getElementById("square1");
let square2 = document.getElementById("square2");
let square3 = document.getElementById("square3");

function changeShapes() {
	square1.style.width='200px';
	square2.style.backgroundColor='red';
	square3.style.border='10px solid pink';
}

// for ( let i = 0; i < 10; i++ ) {
// 	console.log( i );
// }

const grades = [ 90, 50, 75, 100, 85 ];
let total = 0;
for ( let i = 0; i < grades.length; i++ ) {
  total += grades[i];
  console.log(total);
}
console.log( total / grades.length );


// change list style
let items = document.getElementsByTagName('li');
let yellowItems = document.getElementsByClassName('yellow');

function changeListStyles() {

	for ( let item of items ) {
		item.textContent = item.textContent.toLocaleUpperCase();
		item.style.fontStyle = "italic";
	}

	for ( let i = 0; i < yellowItems.length; i++ ) {
		yellowItems[i].style.background = "gold";
	}

}


function displayMessage() {
    alert('You just clicked a button');
}
function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}