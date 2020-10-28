let button;//button to clear the canvas
let buttonS;//button to save the canvas

let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let imga;
let imgb;
let imgc;
let imgd;

let inp;
let instructP;
let instructP1;
let instructP2;
let instructP3;
let instructP4;
let divBanner;

let sel;//selector to create items
let item;

//use slider to control the background color
let val;
let slider;

function preload(){
    img1 = loadImage("assets/standingwoman.png");
    img2 = loadImage("assets/computerwoman.png");
    img3 = loadImage("assets/bulb.png");
    img4 = loadImage("assets/bus.png");
    img5 = loadImage("assets/cargo.png");
    img6 = loadImage("assets/house.png");
    img7 = loadImage("assets/mantalking.png");
    img8 = loadImage("assets/sittingwoman.png");
    img9 = loadImage("assets/thermometer.png");
    imga = loadImage("assets/wheel.png");
    imgb = loadImage("assets/woman.png");
    imgc = loadImage("assets/womandown.png");
    imgd = loadImage("assets/womanwithbook.png");
}

function setup() {
  createCanvas(windowHeight, windowHeight);
  background(220);
  
  slider = createSlider(150,255,170);
  //slider.position(width+50,0);
  slider.style('width','69px');

  inp = createInput('');
  inp.input(myInputEvent);
  //inp.position(width+50,300);
  inp.style('height','50px');
  inp.style('backgroundColor','#E9E5FD');
 
  instructP = createP('Text here to tell the story');
  //instructP.position(width+50,270);
  instructP.style('fontSize','12px');
    
  instructP1 = createP('Choose to add items');
  //instructP1.position(width+50,50);
  instructP1.style('fontSize','12px');
    
  instructP2 = createP('Press a key and the mouse');
  //instructP2.position(width+50,370);
  instructP2.style('fontSize','12px');
    
  instructP3 = createP('to draw lines');
  //instructP3.position(width+50,388);
  instructP3.style('fontSize','12px');
    
  instructP4 = createP('You could save it!');
  //instructP4.position(width+50,height-80);
  instructP4.style('fontSize','12px');
    
  divBanner = createDiv('Storyboard Generator');
  //divBanner.position(width+200,0);
  divBanner.style('backgroundColor','#9592EA');
  divBanner.style('width','200px');

    

  textAlign(CENTER);
  sel = createSelect();
  //sel.position(width+50,40);
  sel.style('borderRadius','3px');
  sel.style('border','none');
  sel.style('backgroundColor','#E8D4FC');
  sel.style('fontSize','14px');
    sel.option('standing woman');
    sel.option('woman using computer');
    sel.option('bulb');
    sel.option('bus');
    sel.option('cargo');
    sel.option('house');
    sel.option('talking man');
    sel.option('sitting woman');
    sel.option('thermometer');
    sel.option('wheel');
    sel.option('woman');
    sel.option('talking woman');
    sel.option('woman with book');
  sel.selected('standing woman');
  sel.changed(mySelectEvent);
    
    
  button = createButton('Clear');
  //button.position(width+50, 19);
  button.style('width','70px');
  button.style('height','18px');
  button.style('border','none');
  button.style('fontSize','14px');
  button.style('borderRadius','3px');
  button.style('backgroundColor','#E8D4FC');
  button.mousePressed(changeBG);
    
  buttonS = createButton('Save');
  //buttonS.position(width+50, 580);
  buttonS.style('width','70px');
  buttonS.style('height','18px');
  buttonS.style('border','none');
  buttonS.style('fontSize','14px');
  buttonS.style('borderRadius','3px');
  buttonS.style('backgroundColor','#E8D4FC');
  buttonS.mousePressed(saveBoard);
    
//  img1 = createImg(
//  'assets/standingwoman.png',
//  'the p5 magenta asterisk'
//  );
  //img.loadPixels();
  repositions();
}


function myInputEvent() {
  let s = this.value();
  noStroke();
  fill(230);
  rect(width/12,5*height/6,width-100,height/12);
  fill(50);
  text(s, width/2,8*height/9); 
  console.log('you are typing: ', this.value());
}


function draw() {
  //img.updatePixels();

  stroke(30);
  if (mouseIsPressed === true & keyIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function mySelectEvent(){
    item = sel.value();
    //text(item, 300,300);
}

function mousePressed(){
  if(mouseX>50 & mouseX<width-50 & mouseY>50 & mouseY<height-50 & keyIsPressed === false){
  if(item==="standing woman"){
      image(img1, mouseX, mouseY);
  }
  else if(item==="woman using computer"){
      image(img2, mouseX, mouseY);
  }
  else if(item==="bulb"){
      image(img3, mouseX, mouseY);
  }
  else if(item==="bus"){
      image(img4, mouseX, mouseY);
  }
  else if(item==="cargo"){
      image(img5, mouseX, mouseY);
  }
  else if(item==="house"){
      image(img6, mouseX, mouseY);
  }
  else if(item==="talking man"){
      image(img7, mouseX, mouseY);
  }
  else if(item==="sitting woman"){
      image(img8, mouseX, mouseY);
  }
  else if(item==="thermometer"){
      image(img9, mouseX, mouseY);
  }
  else if(item==="wheel"){
      image(imga, mouseX, mouseY);
  }
  else if(item==="woman"){
      image(imgb, mouseX, mouseY);
  }
  else if(item==="talking woman"){
      image(imgc, mouseX, mouseY);
  }
  else if(item==="woman with book"){
      image(imgd, mouseX, mouseY);
  }
}
}



function saveBoard(){
    saveCanvas("Painting","png");
}

function changeBG() {
  val = slider.value();
  background(val);
}

function repositions(){
    slider.position(width+50,0);
    button.position(width+50, 19);
    sel.position(width+50,40);
    instructP1.position(width+50,50);
    instructP.position(width+50,height/2-30);
    inp.position(width+50,height/2);
    
    instructP2.position(width+50,height/2+70);
    instructP3.position(width+50,height/2+88);
    instructP4.position(width+50,height-80);
    buttonS.position(width+50, height-40);
    
    divBanner.position(windowWidth-200,0);
    
}

function windowResized() {
  resizeCanvas(windowHeight, windowHeight);
  repositions();
}