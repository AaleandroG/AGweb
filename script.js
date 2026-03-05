// COUNTDOWN TEMU
const countdown = document.getElementById("countdown");
if(countdown){
    let endTime = new Date();
    endTime.setHours(endTime.getHours()+24);
    function updateCountdown(){
        const now = new Date().getTime();
        const distance = endTime-now;
        const hours = Math.floor((distance/(1000*60*60))%24);
        const minutes = Math.floor((distance/(1000*60))%60);
        const seconds = Math.floor((distance/1000)%60);
        countdown.innerHTML = `⏳ ${hours}h ${minutes}m ${seconds}s restantes`;
        if(distance<0){ endTime.setHours(endTime.getHours()+24);}
    }
    setInterval(updateCountdown,1000);
}

// GENERADOR QR
function generateQR(){
    const text = document.getElementById("qr-text").value;
    const color = document.getElementById("qr-color").value;
    const bg = document.getElementById("qr-bg").value;
    const qr = new QRious({
        element: document.createElement('canvas'),
        value: text,
        background: bg,
        foreground: color,
        size: 200
    });
    const container = document.getElementById("qr-result");
    container.innerHTML = "";
    container.appendChild(qr.image);
}

// TEMPORIZADOR
let timerInterval;
function startTimer(){
    clearInterval(timerInterval);
    let minutes = parseInt(document.getElementById("timer-minutes").value) || 0;
    let time = minutes*60;
    const display = document.getElementById("timer-display");
    timerInterval = setInterval(()=>{
        let m = Math.floor(time/60);
        let s = time%60;
        display.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
        if(time<=0) clearInterval(timerInterval);
        time--;
    },1000);
}

// CONTADOR PALABRAS
function countWords(){
    const text = document.getElementById("word-text").value.trim();
    const count = text ? text.split(/\s+/).length : 0;
    document.getElementById("word-result").textContent = `${count} palabras`;
}
