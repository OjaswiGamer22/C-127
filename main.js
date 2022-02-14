song1="";
song2="";


function preload(){
song1=loadSound("song1.mp3");
song2=loadSound("song2.mp3");
}

function setup(){
canvas=createCanvas(500,400);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,ModelLoaded);
poseNet.on("pose",gotResults);
}

function draw(){
image(video,0,0,500,400);
}

function ModelLoaded(){
    console.log("Model Is Loaded");
}

function gotResults(results){
if(results.length>0){
    console.log(results);
}
}

function play(){
    song1.play();
    song1.setVolume(1);
    song1.rate(1);
}