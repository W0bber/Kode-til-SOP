let cirkler = [];
let antal_cirkler = 50;
let soundtrack;
let tegn_cirkler = false;

function preload() {
  //får musiken til at spille.
  soundtrack = loadSound("sl.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}
// draw kører ca. 30 gange i sekundet.
// draw tegner cirklerne. Se draw-metoden i Cirkel-klassen i cirkel.js
function draw() {
  // tegn_cirkler er en boolsk variabel. Når den sættes til true
  // så starter simulationen/kunsten
  if (tegn_cirkler === true) {
    for (let index = 0; index < cirkler.length; index++) {
      cirkler[index].draw();
    }
  }
}

function RedCirclesMovement() {
  //updatere den røde cirkels retning for hvor den kører.
  cirkler[antal_cirkler].updateDirection();
}

function quote() {
  tegn_cirkler = false;
  background("white");
  textSize(40);
  fill("black");
  textAlign(CENTER);
  strokeWeight(2);
  text(
    //Besked der popper op efter at timeren er kørt færdig.
    "Whoever saves one life, saves the world entire.",
    width / 2,
    height / 2
  );
  cirkler[antal_cirkler].draw();
}

function keyPressed() {
  //funtion keypressed er en specifik funtion der kører når en tast er blivet trykket på.
  if (keyCode === 83) {
    // tasten s - starter kunsten
    lavCirkler(cirkler, antal_cirkler);
    setInterval(RedCirclesMovement, 1000);
    setInterval(quote, 240000);
    tegn_cirkler = true;
    soundtrack.play();
  }
}
