// Get the button that opens the modal
var btns = document.getElementsByClassName("myBtn");

// When the user clicks the button, open the modal 
for(let i = 0; i < btns.length; i++) {
btns[i].onclick = () => {
document.getElementsByClassName('modal')[i].style.display = 'block';
}
}

var lowerBtns = document.getElementsByClassName("myLowerBtn");

for(let i = 0; i < lowerBtns.length; i++) {
lowerBtns[i].onclick = () => {
document.getElementsByClassName('lower-modal')[i].style.display = 'block';
}
}

// When the user clicks on <span> (x), close the lower modal
var closeSpans = document.getElementsByClassName('close')
for(var i = 0; i < closeSpans.length; i++) {
closeSpans[i].onclick = (event) => {
event.target.parentElement.parentElement.style.display = 'none'
}
}

var lowerCloseSpans = document.getElementsByClassName('lower-close')
for(var i = 0; i < lowerCloseSpans.length; i++) {
lowerCloseSpans[i].onclick = (event) => {
event.target.parentElement.parentElement.style.display = 'none'
}
}		

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target.classList.contains('modal') || event.target.classList.contains('lower-modal')) {
event.target.style.display = "none";
}
}