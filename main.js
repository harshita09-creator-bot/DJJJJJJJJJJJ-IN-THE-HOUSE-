song = "";
song1 = "";
leftWristX = "";
leftWristY = "";
rightWristY = "";
rightWristX = "";
scoreleft = "0";
scoreright = "0";
status = "";

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
        scoreleft = results[0].pose.keypoints[9].score;
        console.log(scoreleft);

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

    firstsong = song.isPlaying();
    secondsong = song1.isPlaying();

    fill("#FF0000");
    stroke("#FF0000");

    if(scoreleft > 0.2 ){

        circle(leftWristX - 400,leftWristY - 400,20);
        song.stop();

        if(firstsong == false){

            song1.play();
            document.getElementById("name").innerHTML = "Dinero"

        }
    }


}

