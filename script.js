// GENERADOR QR

function generateQR(){

let text = document.getElementById("qrText").value
let color = document.getElementById("qrColor").value
let size = document.getElementById("qrSize").value

if(text === ""){
alert("Introduce una URL")
return
}

let url = "https://api.qrserver.com/v1/create-qr-code/?size="+size+"x"+size+"&data="+encodeURIComponent(text)+"&color="+color.replace("#","")

document.getElementById("qrImage").src = url

}


function downloadQR(){

let img = document.getElementById("qrImage").src

if(img === ""){
alert("Genera primero el QR")
return
}

let link = document.createElement("a")

link.href = img
link.download = "qr.png"

link.click()

}



// GENERADOR PASSWORD

function generatePassword(){

let length = document.getElementById("passLength").value

let chars = "abcdefghijklmnopqrstuvwxyz"

if(document.getElementById("upper").checked)
chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

if(document.getElementById("numbers").checked)
chars += "0123456789"

if(document.getElementById("symbols").checked)
chars += "!@#$%^&*()"

let password = ""

for(let i=0;i<length;i++){

password += chars.charAt(Math.floor(Math.random()*chars.length))

}

document.getElementById("passwordResult").value = password

}


function copyPassword(){

let pass = document.getElementById("passwordResult")

pass.select()

document.execCommand("copy")

alert("Contraseña copiada")

}



// GENERADOR USERNAME

function generateUsername(){

let words = [
"neo","pixel","astro","nova","shadow",
"zen","alpha","omega","vortex","byte"
]

let numbers = Math.floor(Math.random()*999)

let name = words[Math.floor(Math.random()*words.length)]

document.getElementById("usernameResult").value = name + numbers

}


function copyUsername(){

let user = document.getElementById("usernameResult")

user.select()

document.execCommand("copy")

alert("Usuario copiado")

}
