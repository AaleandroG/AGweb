// QR GENERATOR

function generateQR(){

let text=document.getElementById("qr-text").value
let color=document.getElementById("qr-color").value
let size=document.getElementById("qr-size").value

let url=`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${text}&color=${color.replace("#","")}`

document.getElementById("qr-result").innerHTML=`<img id="qr-img" src="${url}">`

}

function downloadQR(){

let img=document.getElementById("qr-img").src

let a=document.createElement("a")

a.href=img

a.download="qr.png"

a.click()

}


// TIMER

let timer
let timeLeft=0
let totalTime=0

function startTimer(){

let minutes=document.getElementById("minutes").value

if(timeLeft===0){

timeLeft=minutes*60
totalTime=timeLeft

}

timer=setInterval(updateTimer,1000)

}

function updateTimer(){

if(timeLeft<=0){

clearInterval(timer)

let audio=new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg")

audio.play()

return

}

timeLeft--

let min=Math.floor(timeLeft/60)
let sec=timeLeft%60

document.getElementById("timer-display").innerText=

`${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`

let progress=((totalTime-timeLeft)/totalTime)*100

document.getElementById("progress").style.width=progress+"%"

}

function pauseTimer(){

clearInterval(timer)

}

function resetTimer(){

clearInterval(timer)

timeLeft=0

document.getElementById("timer-display").innerText="00:00"

document.getElementById("progress").style.width="0%"

}

function addTime(){

timeLeft+=10

}

function removeTime(){

timeLeft-=10

if(timeLeft<0)timeLeft=0

}


// WORD COUNTER

document.getElementById("text-input").addEventListener("input",function(){

let text=this.value

let words=text.trim().split(/\s+/).filter(Boolean)

document.getElementById("words").innerText=words.length

document.getElementById("chars").innerText=text.length

document.getElementById("charsNoSpace").innerText=text.replace(/\s/g,"").length

document.getElementById("reading").innerText=Math.ceil(words.length/200)

})


// LINK SHORTENER

function shortLink(){

let url=document.getElementById("long-url").value

fetch(`https://tinyurl.com/api-create.php?url=${url}`)
.then(res=>res.text())
.then(data=>{

document.getElementById("short-result").innerHTML=`<a href="${data}" target="_blank">${data}</a>`

})

}
