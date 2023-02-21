const parrafo=document.querySelector('p');
const input=document.querySelector('input');
const bloque=document.querySelector('.bloque')

input.addEventListener('change',(event)=>{
   parrafo.textContent= event.target.value;
})

bloque.addEventListener('mouseenter',()=>{
    bloque.style.backgroundColor='red';
})

bloque.addEventListener("mouseleave",()=>{
    bloque.style.backgroundColor='blue';
})