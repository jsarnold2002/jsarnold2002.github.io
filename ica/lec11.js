const x =  1;
const y = 2;

if(x===y){
    console.log("SUCCESS");
}
else{
    console.log("FAIL");
}

const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMConetentLoaded",() => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
});

function random(number){
    return Math.floor(Math.random()*number);
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let i = 0; i<10; i++){
        ctx.beginPath();
        ctx.fillStyle = "rgba(255,0,0,0.5)";
        ctx.arc(random(canvas.width),random(canvas.height), random(50),0,Math.PI,);
        ctx.fill();
    }
}

draw();

btn.addEventListener("click",draw);