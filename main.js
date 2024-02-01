function preload() {
}

function setup() {
    canvas = createCanvas(450, 400);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}
function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
}

function take_snapshot() {
    save('student_name.png');
}

function filter_tint() 
{
    tint_color = document.getElementById("color_name").value;
}

function draw() {
    circle(320, 190, 70);
    describe('A white circle with black outline in the middle of a grey canvas');
}

function take_snapshot(){
    save('myFilterImage.png');
}

function createCanvas(){
    
    }
