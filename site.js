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

const formData= new FormData(formButton);

const res = Object.fromEntries(formData);
const newBody = JSON.stringify(res);

fetch('/submit', {
    method:"post", 
    body:"newBody",
    headers: { "Content-Type": "application/json" },

}) .then(function (response) {
    //handle success
    console.log(response);
  })
  .catch(function (response) {
    //handle error
    console.log(response);
  });
console.log(event);
})

