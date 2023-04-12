song="";
leftwristy=0;
rightwristx=0;
leftwristx=0;
rightwristy=0;
scoreLeftwrist=0;
scorerightwrist=0;

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video ,modelLoaded)
    poseNet.on('pose',gotPoses)
}

function draw(){
    image(video , 0,0,500,500);
    fill("#32a893")
    stroke("#111716")
    if(scorerightwrist>0.2){
    circle(rightwristx,rightwristy,20)
    if(rightwristy>0 && rightwristy<=100)
    {
document.getElementById("speed").innerHTML="Speed=0.5x"
song.rate(0.5)
    }
    else if(rightwristy>100 && rightwristy<=200){
        document.getElementById("speed").innerHTML="speed=1x"
        song.rate(1)
    }
    else if(rightwristy>200 && rightwristy<=300){
        document.getElementById("speed").innerHTML="speed=1.5x"
        song.rate(1.5)
    }
    else if(rightwristy>300 && rightwristy<=400){
        document.getElementById("speed").innerHTML="speed=2x"
        song.rate(2)
    }
    else if(rightwristy>400 && rightwristy<=500){
        document.getElementById("speed").innerHTML="speed=2.5x"
        song.rate(2.5)
    }}

    if(scoreLeftwrist > 0.2)
    {
    circle(leftwristx,leftwristy,20,)
    in_no_leftwristy=Number(leftwristy);
    remove_decimal=floor(in_no_leftwristy);
    volume=remove_decimal/500;
    document.getElementById("volume").innerHTML="Volume"+volume;
    song.setVolume(volume)

    }
    
    
}
function preload(){
song=loadSound("music.mp3")
}
    
function play(){
    song.play()
    song.setVolume(1)
    song.rate(1)
}

function modelLoaded(){
    console.log("PoseNet is insilized (:")
}

function gotPoses(results){
    if(results.length>0){
        console.log(results)

        leftwristx=results[0].pose.leftWrist.x;
        leftwristy=results[0].pose.leftWrist.y;
        console.log("leftwristx="+leftwristx+"leftwristy="+leftwristy)

        rigthwirstx=results[0].pose.rightWrist.x;
        rightwristy=results[0].pose.rightWrist.y;
        scorerightwrist=results[0].pose.keypoints[10].score;
        scoreLeftwrist=results[0].pose.keypoints[9].score;
        console.log("score leftwrist="+scoreLeftwrist + "score rightwrist="+scorerightwrist)
        


    }

}
