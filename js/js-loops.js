// let counter = 0;
// while ( counter < 10 ) {
//   console.log( counter );
//   counter += 1;
// }


// let counter = 0;
// do {
//   console.log( counter );
//   counter += 1;
// } while ( counter < 10 )

// let counter = 0;
// do {
//   console.log( counter );
//   counter += 1;
// } while ( counter < 0 )


// for ( let i = 0; i < 10; i++ ) {
//   console.log( i );
// }


const listItems = document.getElementsByTagName('li');
for ( let listItem of listItems ) {
  listItem.addEventListener('mouseover', () => {
    listItem.textContent = listItem.textContent.toUpperCase();
  });
  listItem.addEventListener('mouseout', () => {
    listItem.textContent = listItem.textContent.toLowerCase();
  });
}

const redItems = document.getElementsByClassName('red');
redItems[0].addEventListener('click', () => {
    redItems[0].style.color = 'red';
});

const yellowItems = document.getElementsByClassName('yellow');
for ( let yellowItem of yellowItems ) {
  yellowItem.addEventListener('click', () => {
    yellowItem.style.color = 'gold';
  });
}



let html = ''; // start with an empty string so that we can add more to it
for ( let i = 0; i < 99; i++ ) {
  html += `<div class="myStyle">${i+1}</div>`
}
document.querySelector('nav').innerHTML = html;



