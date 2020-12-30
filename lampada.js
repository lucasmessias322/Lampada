const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampadaBroken() {
    return lamp.src.indexOf ( 'quebrada' ) > -1
    /*indexOf faz uma varredura em uma string a procura
    de outra string...

    ele vai percorrer em busca de um 
    lamp.src que tenha alguma palavra quebrada ele retorna -1
    quando ele não encontra,por isso que temos o > -1
    ou seja somente quando form maior que -1*/
}

function lampOn() {
    if (!isLampadaBroken()) {
        lamp.src = 'img/ligada.jpg'
        /*Se a lampada não estiver quebrada ele 
        vai deixar o codigo execultar, mas se ela estiver
        ele vai bloquear o codigo*/
    }
}

function lampOff() {
    if (!isLampadaBroken()) {
        lamp.src = 'img/desligada.jpg'
    }
}

function lampBroken() {
    lamp.src = 'img/quebrada.jpg'
}
turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)