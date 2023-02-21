const h1= document.querySelector('h1');
const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2');
const btn=document.querySelector('#btnCalcular');
const btnR=document.querySelector('#btnRestar');
const btnM=document.querySelector('#btnMultiplicar');
const btnD=document.querySelector('#btnDividir');
const form=document.querySelector('#form');

const pResult=document.querySelector('#result');

form.addEventListener('submit',sumarInputValues)
btnR.addEventListener('submit',btnRClick)
btnM.addEventListener('submit',btnMClick)

btnD.addEventListener('submit',btnDClick)


function sumarInputValues(event){
    //console.log({event});
    event.preventDefault();
    const sumaInputs=parseInt (input1.value) + parseInt  (input2.value);
    pResult.innerText="Resultado:" + sumaInputs;

}

function btnRClick(event){
    event.preventDefault();
    const resta=parseInt (input1.value) - parseInt  (input2.value);
    pResult.innerText="La resta es:" + resta;

}

function btnMClick(event){
    event.preventDefault();
 const multiplicar=  parseInt (input1.value) * parseInt  (input2.value);
 pResult.innerText="La multiplicacion es:" + multiplicar;
}

function btnDClick(event){
    event.preventDefault();
    const dividir= parseInt (input1.value) / parseInt  (input2.value);
    pResult.innerText="La Divicion es:" + dividir;

}

