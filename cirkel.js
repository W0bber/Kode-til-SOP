// Funktionen lavCirkler opretter 50 cirkel-objekter.
// Hver cirkel har et centrum (x,y), en retningsvektor (a,b)
// og en radius r.
// I linje 13 instantieres klassen Cirkel
// let laver en lokal variable der ikke har nogen type, Den laver en variable der kan bruges i denne fungtion og alle under funtioner.
function lavCirkler(cirkler, antal) {
  for (let index = 0; index < antal; index++) {
    let x = random(windowWidth);
    let y = random(windowHeight);
    let vx = random(-10, 10);
    let vy = random(-10, 10);
    let r = random(10, 50);
    // Vi instantierer klassen Cirkel og tilføjer objektet til listen cirkler.
    // Dvs. at konstruktøren i Cirkel-klassen kaldes med de konkrete værdier,
    // som vi har givet oven for.
    cirkler.push(new Cirkel(x, y, vx, vy, r));
  }
  // Til aller sidst lægger vi den røde cirkel på listen
  cirkler.push(new Cirkel(width / 2, height / 2, 1, 4, 40, color("red")));
}
//constructor er en kode der kører hver gang at vi instantiere et nyt objekt. i vores tilfælge er det hver gang der kommer en ny cirkel
class Cirkel {
  constructor(x, y, vx, vy, r, c) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.r = r;
    if (!c) {
      // dvs. c er ikke defineret (grå cirkel )
      // da vi har lavet en if statment som siger at hvis ikke C har noget så gør det her. så hvis C ikke har nogen vværdi så vil den farve
      //en tilfælge grå farve
      this.c = color(random(255));
    } else {
      //Else fungere sådan at hvis min if statment så køre min else statment.
      this.c = c;
    }
  }
  draw() {
    // Draw fungtionen vil kører efter hver frame.
    this.borderCheck();
    fill(this.c);
    circle(this.x, this.y, this.r);
    this.x += this.vx;
    this.y += this.vy;
  }

  borderCheck() {
    if (this.x < 0 || this.x > windowWidth) {
      this.vx = -this.vx;
    }
    if (this.y < 0 || this.y > windowHeight) {
      this.vy = -this.vy;
    }
  } // når cirklens kordinater er ude for vores billeder så vil cirklen skifte til at kører modsatte regning

  updateDirection() {
    this.vx = random(-4, 4);
    this.vy = random(-4, 4);
  }
}
