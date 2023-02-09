diff=0;
right_wrist_X=0;
left_wrist_X=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Pose Net is initialized.');
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        left_wrist_X=results[0].pose.leftWrist.x;
        right_wrist_X=results[0].pose.rightWrist.x;
        diff=floor(left_wrist_X-right_wrist_X);
    }
}

function draw()
{
    background('#969A97');
    document.getElementById("font_sides").innerHTML="The Width and Height of the Font will be " + diff + "px";
    fill('#F90093');
    stroke('#F90093');
    textSize(diff)
    text('Anushka' , 50 , 400);
}
