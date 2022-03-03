function preload(){

}

function setup(){
  canvas =  createCanvas(600,400);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();

}

function draw(){
    image(video,50,0,500,400);
    fill("purple")
    rect(0,0,25,400);
    rect(575,0,25,400);
    fill("green")
    rect(0,0,575,25);
    rect(25,375,575,25);
}

function snap(){
    save("image.png")
}