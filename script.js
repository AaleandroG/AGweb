function generateQR(){

let text=document.getElementById("qrText").value
let color=document.getElementById("qrColor").value
let canvas=document.getElementById("qrCanvas")

let url=`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${text}&color=${color.replace('#','')}`

let img=new Image()

img.onload=function(){

canvas.width=200
canvas.height=200

let ctx=canvas.getContext("2d")
ctx.drawImage(img,0,0)

}

img.src=url

}



function generatePassword(){

let length=document.getElementById("length").value

let chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%"

let pass=""

for(let i=0;i<length;i++){

pass+=chars.charAt(Math.floor(Math.random()*chars.length))

}

document.getElementById("passwordResult").value=pass

}



function generateUsername(){

let names=["pixel","neo","alpha","shadow","nova","zen","astro"]

let num=Math.floor(Math.random()*999)

let name=names[Math.floor(Math.random()*names.length)]

document.getElementById("usernameResult").value=name+num

}
