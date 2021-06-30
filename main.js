song = "";
song1 = "";
leftWristX = "";
leftWristY = "";
rightWristY = "";
rightWristX = "";

function preload(){
    song = loadSound('music2.mp3');
    song1 = loadSound('damn.mp3');
}

function setup(){
    video = createCapture(VIDEO);
    video.hide();
    canvas = createCanvas(550,550);
    canvas.position(450,140);

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}


function modelLoaded(){
    console.log("Posenet is in.")
}

function gotPoses(results){

    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x
        leftWristY = results[0].pose.leftWrist.y
        console.log("leftWristX = "+leftWristX+" leftWristY = "+leftWristY);

        rightWristX = results[0].pose.rightWrist.x
        rightWristY = results[0].pose.rightWrist.y
        console.log("rightWristX = "+rightWristX+" rightWristY = "+rightWristY);

    }

}

function draw(){
    image(video,0,0,550,550);
}
