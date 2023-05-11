console.log("My JS file is loading successfully!");
alert('hello')

// console.log(document.getElementById("myButton"));

// let message = "hello";
// console.log(message);
// message = "hello again";
// console.log(message);

// console.log(document.getElementById("myButton"));

function styleShapes() {
  document.getElementById("square1").style.backgroundColor = "green";
  document.getElementById("square2").style.borderRadius = "50%";
  document.getElementById("square3").style.width = "200px";
}


// // change the class name
// document.getElementById("myElement").className = 'newClass';
// document.getElementById("myElement").className = 'newClass1 newClass2 newClass3';


// // add or remove a  class
// document.getElementById("myElement").classList.add("newClass");
// document.getElementById("myElement").classList.remove("class1");

// // add or remove multiple classes
// document.getElementById("myElement").classList.add("newClass1", "newClass2");
// document.getElementById("myElement").classList.remove("class1", "class2");

// // replace class "class2" with class "newClass2"
// document.getElementById("myElement").classList.replace("class2", "newClass2");

// // toggle class "class2" means that
// // if the class "class2" already exist, remove it, otherwise add it
// // this is best to be used with a click event
// document.getElementById("myElement").classList.toggle("class2");

// console.log(document.getElementById("myElement").className);
// console.log(document.getElementById("myElement").classList);


document.getElementById("myText1").textContent = "New Text";
document.getElementById("myText2").innerHTML = "Normal Text";
// console.log(document.getElementById("myText2").textContent);
document.getElementById("myNav").innerHTML = `
  <a href="#">First Link</a>
  <a href="#">Second Link</a>
`;