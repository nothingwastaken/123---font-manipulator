function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(680, 150);

    poseNet = ml5.poseNet(video,modelLoaded);
}

function modelLoaded(){
    console.log("all good");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results)
    }
}