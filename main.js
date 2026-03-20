// Partículas Hero
const particles = document.getElementById('particles');
for(let i=0;i<30;i++){
  const p=document.createElement('div');
  p.style.position='absolute';
  p.style.borderRadius='50%';
  p.style.background='rgba(255,122,0,0.5)';
  p.style.width = p.style.height = Math.random()*10 + 5 + 'px';
  p.style.left = Math.random()*100 + '%';
  p.style.top = Math.random()*100 + '%';
  p.style.animation = `move ${5+Math.random()*10}s linear infinite`;
  p.style.animationName='move';
  particles.appendChild(p);
}

// ===== Reloj =====
function updateClock(){
  const clock = document.getElementById('clock');
  const now = new Date();
  const h=String(now.getHours()).padStart(2,'0');
  const m=String(now.getMinutes()).padStart(2,'0');
  const s=String(now.getSeconds()).padStart(2,'0');
  clock.textContent=`${h}:${m}:${s}`;
}
setInterval(updateClock,1000);
updateClock();

// ===== Generador QR =====
const qr = new QRious({element: document.createElement('canvas'), size:250});
document.getElementById('qr-code').appendChild(qr.element);
function generateQR(){
  const text=document.getElementById('qr-text').value;
  qr.value=text;
}

// ===== Notas rápidas =====
function saveNote(){
  const text=document.getElementById('note-text').value;
  localStorage.setItem('agweb-note',text);
  document.getElementById('note-saved').textContent='Nota guardada localmente!';
}
if(localStorage.getItem('agweb-note')){
  document.getElementById('note-text').value=localStorage.getItem('agweb-note');
}

// ===== Generador de contraseñas =====
function generatePass(){
  const chars='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]';
  let pass='';
  for(let i=0;i<16;i++){pass+=chars[Math.floor(Math.random()*chars.length)];}
  document.getElementById('pass-output').textContent=pass;
}

// ===== Conversor de monedas (simulado) =====
function convertCurrency(){
  const amount = parseFloat(document.getElementById('currency-amount').value);
  const from = document.getElementById('currency-from').value;
  const to = document.getElementById('currency-to').value;
  if(isNaN(amount)){document.getElementById('currency-output').textContent='Introduce un número válido'; return;}
  // Conversión simulada simple
  const rates = {USD:1, EUR:0.9, BTC:0.00003};
  const converted = amount/rates[from]*rates[to];
  document.getElementById('currency-output').textContent = `${converted.toFixed(4)} ${to}`;
}

// ===== Traductor simple (simulado) =====
function translateText(){
  const text = document.getElementById('translate-text').value;
  const lang = document.getElementById('translate-lang').value;
  if(!text){document.getElementById('translate-output').textContent='Escribe algo para traducir'; return;}
  // Traducción simulada
  document.getElementById('translate-output').textContent=`[${lang}] ${text}`;
}

// ===== Conversor de unidades =====
function convertUnit(){
  const val = parseFloat(document.getElementById('unit-value').value);
  const type = document.getElementById('unit-type').value;
  if(isNaN(val)){document.getElementById('unit-output').textContent='Introduce un número válido'; return;}
  let res = 0;
  switch(type){
    case 'CtoF': res = val*9/5+32; break;
    case 'FtoC': res = (val-32)*5/9; break;
    case 'kmtoM': res = val*0.621371; break;
    case 'Mtokm': res = val/0.621371; break;
  }
  document.getElementById('unit-output').textContent = res.toFixed(2);
}
