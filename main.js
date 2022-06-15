function preload()
{}
function setup()
{
canvas = createCanvas(640, 480);
canvas.position(150, 150);
video = createCapture(VIDEO);
video.hide();



}

function draw()
{
  image(video, 0,0,640, 480);
  fill("orange");
  stroke("black");
  circle(30, 30, 40);
  circle(600, 30, 40);
  circle(30, 440, 40);
  circle(600, 440, 40);
  fill("green");
  stroke("black");
  rect(50, 20, 530, 20);
  rect(50, 430, 530, 20);
  rect(20, 49, 30, 370);
  rect(600, 49, 30, 370);

}

function take_snapshot()
{
    save('student_name.png');
}