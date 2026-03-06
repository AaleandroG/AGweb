// WORD COUNTER

const textInput = document.getElementById("textInput");

if(textInput){

textInput.addEventListener("input",function(){

let words = this.value.trim().split(/\s+/).filter(Boolean);

document.getElementById("wordCount").textContent = words.length;

});

}


// TIMER

let timer;
let timeLeft = 0;

function startTimer(){

let minutes = document.getElementById("minutes").value;

if(minutes){
timeLeft = minutes * 60;
}

clearInterval(timer);

timer = setInterval(()=>{

if(timeLeft <=0){

clearInterval(timer);

return;

}

timeLeft--;

let m = Math.floor(timeLeft/60);
let s = timeLeft%60;

document.getElementById("timer").textContent =
`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;

},1000);

}

function pauseTimer(){

clearInterval(timer);

}

function resetTimer(){

clearInterval(timer);

timeLeft=0;

document.getElementById("timer").textContent="00:00";

}


// QR GENERATOR

function generateQR(){

let text = document.getElementById("qrText").value;

let color = document.getElementById("qrColor").value;

let canvas = document.getElementById("qrCanvas");

let url = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}&color=${color.replace('#','')}`;

let img = new Image();

img.onload=function(){

canvas.width=200;
canvas.height=200;

let ctx = canvas.getContext("2d");

ctx.drawImage(img,0,0);

}

img.src=url;

}
