noseX= 0;
noseY = 0;
leftwristX = 0;
rightwristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);
}

function draw() {
    background("grey");
    document.getElementById("square_size").innerHTML = "Width and Height of the square will be = " + difference + "px";
    fill("charcoal");
    stroke("yellow");
    text('Rasputin',50,200);
    textSize(difference);
    
}

function modelloaded() {
    console.log("poseNet is initialized");

}

function gotposes(results) {
    if(results.length>0) {
        console.log(results); 
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("leftWrist = " + leftwristX + "rightWrist = " + rightwristX);
        console.log("difference = " + difference);

    }

    
}