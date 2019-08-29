//********************* *FOR KEYNOTE SPEAKERS******************************************************************//
// Get the button that opens the modal
var btns = document.getElementsByClassName("myBtn");

// When the user clicks the button, open the modal 
for(let i = 0; i < btns.length; i++) {
btns[i].onclick = () => {
document.getElementsByClassName('modal')[i].style.display = 'block';
}
}
// When the user clicks on <span> (x), close the lower modal
var closeSpans = document.getElementsByClassName('close')
for(var i = 0; i < closeSpans.length; i++) {
closeSpans[i].onclick = (event) => {
event.target.parentElement.parentElement.style.display = 'none'
}
}
//********************* *FOR KEYNOTE SPEAKERS******************************************************************//
//********************* LEVEL 1 SPEAKERS******************************************************************//
var lowerBtns = document.getElementsByClassName("myLowerBtn");

for(let i = 0; i < lowerBtns.length; i++) {
lowerBtns[i].onclick = () => {
document.getElementsByClassName('lower-modal')[i].style.display = 'block';
}
}


var lowerCloseSpans = document.getElementsByClassName('lower-close')
for(var i = 0; i < lowerCloseSpans.length; i++) {
lowerCloseSpans[i].onclick = (event) => {
event.target.parentElement.parentElement.style.display = 'none'
}
}		

//********************* LEVEL 1 SPEAKERS******************************************************************//
//********************* LEVEL 2 SPEAKERS******************************************************************//
var lowerBtns = document.getElementsByClassName("myLower2Btn");

for(let i = 0; i < lowerBtns.length; i++) {
lowerBtns[i].onclick = () => {
document.getElementsByClassName('lower-2-modal')[i].style.display = 'block';
}
}


var lowerCloseSpans = document.getElementsByClassName('lower-2-close')
for(var i = 0; i < lowerCloseSpans.length; i++) {
lowerCloseSpans[i].onclick = (event) => {
event.target.parentElement.parentElement.style.display = 'none'
}
}		

//********************* LEVEL 2 SPEAKERS******************************************************************//
//********************* LEVEL 3 SPEAKERS******************************************************************//
var lowerBtns = document.getElementsByClassName("myLower3Btn");

for(let i = 0; i < lowerBtns.length; i++) {
lowerBtns[i].onclick = () => {
document.getElementsByClassName('lower-3-modal')[i].style.display = 'block';
}
}


var lowerCloseSpans = document.getElementsByClassName('lower-3-close')
for(var i = 0; i < lowerCloseSpans.length; i++) {
lowerCloseSpans[i].onclick = (event) => {
event.target.parentElement.parentElement.style.display = 'none'
}
}		

//********************* LEVEL 3 SPEAKERS******************************************************************//
//********************* LEVEL 4 SPEAKERS******************************************************************//
var lowerBtns = document.getElementsByClassName("myLower4Btn");

for(let i = 0; i < lowerBtns.length; i++) {
lowerBtns[i].onclick = () => {
document.getElementsByClassName('lower-4-modal')[i].style.display = 'block';
}
}


var lowerCloseSpans = document.getElementsByClassName('lower-4-close')
for(var i = 0; i < lowerCloseSpans.length; i++) {
lowerCloseSpans[i].onclick = (event) => {
event.target.parentElement.parentElement.style.display = 'none'
}
}		

//********************* LEVEL 4 SPEAKERS******************************************************************//
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target.classList.contains('modal') || event.target.classList.contains('lower-modal1')
|| event.target.classList.contains('lower-modal2')|| event.target.classList.contains('lower-modal3')
|| event.target.classList.contains('lower-modal4')) {
event.target.style.display = "none";
}
}