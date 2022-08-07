leftwristX = 0;
rightwristX = 0;
difference = 0;

function setup(){
    canvas = createCanvas(550,500);
    canvas.position(560,150);

    video = createCapture(VIDEO);
    video.size(550,500);

    poseNet = ml5.poseNet(video , modelLoaded);

    poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("PoseNet Model is loaded!");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
    }
}
function draw(){
    background('white');
    fill('#fc032d');
    stroke('#fc032d');
    text('Hi ! I am Yashitha', 10,100);
    textSize(difference);
}