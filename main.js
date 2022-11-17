lw = 0;
rw = 0;
dif = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(680, 150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background("b.jpg");
    textSize(dif);
    fill("#00EE6E");
    text("Nothingwastaken", 50, 200);
}

function modelLoaded(){
    console.log("all good");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results)
        lw = results[0].pose.leftWrist.x;
        rw = results[0].pose.rightWrist.x;
        dif = floor(lw-rw)/2;
        textSize(dif);
        console.log("yes")
    }
}