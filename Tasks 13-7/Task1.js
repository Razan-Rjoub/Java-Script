

var arr=['Razan','sereen','Raghad','salam']
var arr2=['12','13','14','15']
for(let i=0;i<4;i++){
const div = document.createElement("div");


div.style.border = '2px solid red';

div.style.width='200px';
div.style.height='200px';
div.style.marginTop='200px';
document.body.appendChild(div);
const p = document.createElement("p");
const textNode = document.createTextNode(arr[i]);

p.appendChild(textNode);
div.appendChild(p);
const p2 = document.createElement("p");
const textNode2 = document.createTextNode(arr2[i]);
p2.appendChild(textNode2);
div.appendChild(p2);
const img=document.createElement('img');
img.src='https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=';
div.appendChild(img);
img.style.width='150px';
}