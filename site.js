const submitted=document.getElementById('submitted');
const formButton=document.getElementById('conForm');
// let name= document.getElementById('name');
let email= document.getElementById('email');
let phone= document.getElementById('phone');
let cR= document.getElementById('contactReason');
let formText= document.getElementById('textBox');

formButton.addEventListener('submit',event=>{
    event.preventDefault();
submitted.style.display="block";
console.log(event);
})
