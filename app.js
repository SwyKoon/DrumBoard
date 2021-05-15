var a = document.getElementById('a')
var s = document.getElementById('s')
var d = document.getElementById('d')
var f = document.getElementById('f')
var g = document.getElementById('g')
var h = document.getElementById('h')
var j = document.getElementById('j')
var k = document.getElementById('k')
var l = document.getElementById('l')

var clap = document.getElementById('clap')
var hihat = document.getElementById('hihat')
var kick = document.getElementById('kick')
var openhat = document.getElementById('openhat')
var boom = document.getElementById('boom')
var ride = document.getElementById('ride')
var snare = document.getElementById('snare')
var tom = document.getElementById('tom')
var tink = document.getElementById('tink')

document.addEventListener('keydown',(e)=>{
    var pressKey = e.keyCode
    switch(pressKey){
        case 65: clap.play()
        a.style.border = '5px solid yellow'
        // a.style.height = '7rem'
        // a.style.width = '7rem'
        // document.getElementById('alpA').style.fontSize = '4rem'
        // document.getElementById('tunA').style.fontSize = 'large'
        break;
        case 83: hihat.play()
        s.style.border = '5px solid yellow'
        // s.style.height = '7rem'
        // s.style.width = '7rem'
        // document.getElementById('alpS').style.fontSize = '4rem'
        // document.getElementById('tunS').style.fontSize = 'large'
        break;
        case 68: kick.play()
        d.style.border = '5px solid yellow'
        // d.style.height = '7rem'
        // d.style.width = '7rem'
        // document.getElementById('alpD').style.fontSize = '4rem'
        // document.getElementById('tunD').style.fontSize = 'large'
        break;
        case 70: openhat.play()
        f.style.border = '5px solid yellow'
        // f.style.height = '7rem'
        // f.style.width = '7rem'
        // document.getElementById('alpF').style.fontSize = '4rem'
        // document.getElementById('tunF').style.fontSize = 'large'
        break;
        case 71: boom.play()
        g.style.border = '5px solid yellow'
        // g.style.height = '7rem'
        // g.style.width = '7rem'
        // document.getElementById('alpG').style.fontSize = '4rem'
        // document.getElementById('tunG').style.fontSize = 'large'
        break;
        case 72: ride.play()
        h.style.border = '5px solid yellow'
        // h.style.height = '7rem'
        // h.style.width = '7rem'
        // document.getElementById('alpH').style.fontSize = '4rem'
        // document.getElementById('tunH').style.fontSize = 'large'
        break;
        case 74: snare.play()
        j.style.border = '5px solid yellow'
        // j.style.height = '7rem'
        // j.style.width = '7rem'
        // document.getElementById('alpJ').style.fontSize = '4rem'
        // document.getElementById('tunJ').style.fontSize = 'large'
        break;
        case 75: tom.play()
        k.style.border = '5px solid yellow'
        // k.style.height = '7rem'
        // k.style.width = '7rem'
        // document.getElementById('alpK').style.fontSize = '4rem'
        // document.getElementById('tunK').style.fontSize = 'large'
        break;
        case 76: tink.play()
        l.style.border = '5px solid yellow'
        // l.style.height = '7rem'
        // l.style.width = '7rem'
        // document.getElementById('alpL').style.fontSize = '4rem'
        // document.getElementById('tunL').style.fontSize = 'large'
        break;
        default: console.log("Not part of the keyboard")
    }
});

document.addEventListener('keyup',(e)=>{
    var pressKey = e.keyCode
    switch(pressKey){
        case 65: clap.pause()
        a.style.border = '2px solid black'
        // a.style.height = '5rem'
        // a.style.width = '5rem'
        // document.getElementById('alpA').style.fontSize = '2rem'
        // document.getElementById('tunA').style.fontSize = 'smaller'
        break;
        case 83: hihat.pause()
        s.style.border = '2px solid black'
        // s.style.height = '5rem'
        // s.style.width = '5rem'
        // document.getElementById('alpS').style.fontSize = '2rem'
        // document.getElementById('tunS').style.fontSize = 'smaller'
        break;
        case 68: kick.pause()
        d.style.border = '2px solid black'
        // d.style.height = '5rem'
        // d.style.width = '5rem'
        // document.getElementById('alpD').style.fontSize = '2rem'
        // document.getElementById('tunD').style.fontSize = 'smaller'
        break;
        case 70: openhat.pause()
        f.style.border = '2px solid black'
        // f.style.height = '5rem'
        // f.style.width = '5rem'
        // document.getElementById('alpF').style.fontSize = '2rem'
        // document.getElementById('tunF').style.fontSize = 'smaller'
        break;
        case 71: boom.pause()
        g.style.border = '2px solid black'
        // g.style.height = '5rem'
        // g.style.width = '5rem'
        // document.getElementById('alpG').style.fontSize = '2rem'
        // document.getElementById('tunG').style.fontSize = 'smaller'
        break;
        case 72: ride.pause()
        h.style.border = '2px solid black'
        // h.style.height = '5rem'
        // h.style.width = '5rem'
        // document.getElementById('alpH').style.fontSize = '2rem'
        // document.getElementById('tunH').style.fontSize = 'smaller'
        break;
        case 74: snare.pause()
        j.style.border = '2px solid black'
        // j.style.height = '5rem'
        // j.style.width = '5rem'
        // document.getElementById('alpJ').style.fontSize = '2rem'
        // document.getElementById('tunJ').style.fontSize = 'smaller'
        break;
        case 75: tom.pause()
        k.style.border = '2px solid black'
        // k.style.height = '5rem'
        // k.style.width = '5rem'
        // document.getElementById('alpK').style.fontSize = '2rem'
        // document.getElementById('tunK').style.fontSize = 'smaller'
        break;
        case 76: tink.pause()
        l.style.border = '2px solid black'
        // l.style.height = '5rem'
        // l.style.width = '5rem'
        // document.getElementById('alpL').style.fontSize = '2rem'
        // document.getElementById('tunL').style.fontSize = 'smaller'
        break;
        default: console.log("Not part of the keyboard")
    }
});
