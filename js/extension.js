const h2 = document.querySelectorAll('h2');
for (let element of h2) {
    element.style.backgroundColor = "yellow";
    element.style.color = "transparent";
    element.style.border = "none";
}

const ul = document.querySelectorAll('ul,li');
for (let element of ul) {
    element.style.backgroundColor = "green";
    element.style.color = "transparent";
}

const links = document.querySelectorAll('a,span');
for (let element of links) {
    element.style.backgroundColor = "blue";
    element.style.color = "transparent";
}

const text = document.querySelectorAll('p');
for (let element of text) {
    element.style.backgroundColor = "purple";
    element.style.color = "transparent";
}

const img = document.querySelectorAll('img');
for (let element of img) {
    element.style.backgroundColor = "red";
    element.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1600px-HD_transparent_picture.png";
    element.srcset = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1600px-HD_transparent_picture.png";
}

const caption = document.querySelectorAll('.thumbcaption');
for (let element of caption) {
    element.style.backgroundColor = "red";
    element.style.color = "transparent";
}


const box = document.querySelectorAll('.mp-bordered,#cnotice-main');
for (let element of box) {
    element.style.backgroundColor = "hotpink";
    element.style.color = "transparent";
    element.style.border = "none";
}

