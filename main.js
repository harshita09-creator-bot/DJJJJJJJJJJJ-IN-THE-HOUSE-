song = "";
song1 = "";

function preload(){
    song = loadSound('music2.mp3');
    song1 = loadSound('damn.mp3');
}

function setup(){
    video = createCapture(VIDEO);
    video.hide();
    canvas = createCanvas(550,550);
    canvas.position(450,140);
}

function draw(){
    image(video,0,0,550,550);
}