const lamp = document.getElementById('lamp');
const on = document.getElementById('on');
const off = document.getElementById('off');

function ligar (){
    lamp.src = 'ligada.png';
}

function desligar (){
    lamp.src = 'desligada.png';
}

on.addEventListener('click', on );
lamp.addEventListener('mouseover',ligar );
lamp.addEventListener('mouseleave', desligar)
off.addEventListener('click',off);