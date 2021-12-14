song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload()
{
    song = loadSound("hi.mp3")
}
function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function modelLoaded(){
console.log('PoseNet is Initilized');
}

function draw() {
    image(video, 0, 0, 600, 500)
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function stop()
{
    song.stop();
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWrist = " + leftWristX +" leftWristY ="+leftWristY)

        rightWristY = results[0].pose.rightWrist.y;
        rightWristY = results[0].pose.rightrist.y;
        console.log("RightWrist = " + rightWristX +" rightWristY ="+rightWristY)
    }
}