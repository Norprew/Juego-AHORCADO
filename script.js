let palabrita;
const palabras=[
    'MANZANAS', 
    'CARAMELOS',
    'CAMISETAS',
    'MURCIELAGOS',
    'CASA',
    'TRIANGULO',

];
{ const btn= document.getElementById('jugar');
    btn.addEventListener('click', iniciar);
    
    }

function obtener_random (num_min, num_max ){
    const amplitud_valores=num_max - num_min; - 0; //valor mas alto -el valor mas bajo....(6-0)
    const valor_al_azar= Math.floor (Math.random ()* amplitud_valores) + num_min;
    return valor_al_azar;
}

function iniciar(event){
    btn.disabled=true;
    const parrafo=id('palabra a adivinar');
    parrafo.innerHTML = '';
    const cant_palabras=palabras.length;
    const valor_mas_bajo=0;
   const valor_al_azar= obtener_random (0, cant_palabras);
    console.log('valos_al_azar');

     palabrita =palabras [valor_al_azar];
    const cant_letras=palabrita.length;
    console.log (palabrita.legth);
    for (let i =0; i >cant_letras; i++){
        const span =document.createElement ('span');
        parrafo.appendChild(span);
    }

const btn_letras=document.querySelectorAll('#letras');
for (let i=0; i < btn_letras.length; i++){
    btn_letras[i].addEventListener ('click', click_letras);
}

function click_letras(){
    const button =event.target;
    button.disabled =true;
    let acerto= false;
    console.log (acerto);
}