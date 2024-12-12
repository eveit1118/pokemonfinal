function setup() {
  createCanvas(1000, 1000);
}

// how to remove outlier ?
// is there a way to be able to hover to get
// add drop downs
function run() {
  background(255);
  let value = document.getElementById("dropdown").value;
  if (value == 1) {
    HeightWeightType();
  } else if (value == 2) {
    Generations();
  } else if (value == 3) {
    GenderRatio();
  } else if (value == 4) {
    HP();
  }
}
// function draw() {
//   background(255);
//   Generations();
// }
function HeightWeightType() {
  for (let i = 0; i < pokemon.length; i++) {
    let pokemonHeight = map(pokemon[i].Height, 0.1, 100, 990, 10);
    let pokemonWeight = map(pokemon[i].Weight, 0.1, 999.9, 5, 30);
    let pokemonNumber = map(pokemon[i].No, 1, 1010, 0, 1000);
    if (pokemon[i].Type1 == "Dark") {
      fill(98, 77, 77);
    } else if (pokemon[i].Type1 == "Bug") {
      fill(145, 161, 25);
    } else if (pokemon[i].Type1 == "Dragon") {
      fill(79, 96, 225);
    } else if (pokemon[i].Type1 == "Electric") {
      fill(250, 191, 0);
    } else if (pokemon[i].Type1 == "Fairy") {
      fill(239, 112, 239);
    } else if (pokemon[i].Type1 == "Fighting") {
      fill(255, 128, 1);
    } else if (pokemon[i].Type1 == "Fire") {
      fill(229, 40, 41);
    } else if (pokemon[i].Type1 == "Flying") {
      fill(129, 184, 239);
    } else if (pokemon[i].Type1 == "Ghost") {
      fill(111, 65, 111);
    } else if (pokemon[i].Type1 == "Grass") {
      fill(63, 161, 41);
    } else if (pokemon[i].Type1 == "Ground") {
      fill(144, 81, 32);
    } else if (pokemon[i].Type1 == "Poison") {
      fill(145, 65, 203);
    } else if (pokemon[i].Type1 == "Ice") {
      fill(60, 206, 243);
    } else if (pokemon[i].Type1 == "Psychic") {
      fill(238, 65, 120);
    } else if (pokemon[i].Type1 == "Rock") {
      fill(175, 169, 128);
    } else if (pokemon[i].Type1 == "Steel") {
      fill(96, 160, 183);
    } else if (pokemon[i].Type1 == "Water") {
      fill(40, 128, 238);
    } else {
      fill(158, 161, 159);
    }
    noStroke();
    circle(pokemonNumber, pokemonHeight, pokemonWeight);
  }
}

function Generations() {
  for (let i = 0; i < pokemon.length; i++) {
    if (pokemon[i].Type1 == "Dark") {
      fill(98, 77, 77);
    } else if (pokemon[i].Type1 == "Bug") {
      fill(145, 161, 25);
    } else if (pokemon[i].Type1 == "Dragon") {
      fill(79, 96, 225);
    } else if (pokemon[i].Type1 == "Electric") {
      fill(250, 191, 0);
    } else if (pokemon[i].Type1 == "Fairy") {
      fill(239, 112, 239);
    } else if (pokemon[i].Type1 == "Fighting") {
      fill(255, 128, 1);
    } else if (pokemon[i].Type1 == "Fire") {
      fill(229, 40, 41);
    } else if (pokemon[i].Type1 == "Flying") {
      fill(129, 184, 239);
    } else if (pokemon[i].Type1 == "Ghost") {
      fill(111, 65, 111);
    } else if (pokemon[i].Type1 == "Grass") {
      fill(63, 161, 41);
    } else if (pokemon[i].Type1 == "Ground") {
      fill(144, 81, 32);
    } else if (pokemon[i].Type1 == "Poison") {
      fill(145, 65, 203);
    } else if (pokemon[i].Type1 == "Ice") {
      fill(60, 206, 243);
    } else if (pokemon[i].Type1 == "Psychic") {
      fill(238, 65, 120);
    } else if (pokemon[i].Type1 == "Rock") {
      fill(175, 169, 128);
    } else if (pokemon[i].Type1 == "Steel") {
      fill(96, 160, 183);
    } else if (pokemon[i].Type1 == "Water") {
      fill(40, 128, 238);
    } else {
      fill(158, 161, 159);
    }

    let generation = pokemon[i].Generation;
    let start = 0;
    let end = 0;
    if (generation == "1") {
      start = +5;
      end = +111;
    } else if (generation == "2") {
      start = +111;
      end = +222;
    } else if (generation == "3") {
      start = +222;
      end = +333;
    } else if (generation == "4") {
      start = +333;
      end = +444;
    } else if (generation == "5") {
      start = 444;
      end = 555;
    } else if (generation == "6") {
      start = 555;
      end = 666;
    } else if (generation == "7") {
      start = 666;
      end = 777;
    } else if (generation == "8") {
      start = 777;
      end = 888;
    } else if (generation == "9") {
      start = 888;
      end = 995;
    }
    let xPos = random(start, end);
    let yPos = random(5, 995);
    noStroke();
    circle(xPos, yPos, 10);
  }
}

function GenderRatio() {
  for (let i = 0; i < pokemon.length; i++) {
    let gender = map(pokemon[i].Gender_Female, 0, 100, 5, 995);
    if (pokemon[i].Gender_Unknown > 0) {
      gender += 495;
    }
    let pokemonNumber = map(pokemon[i].No, 1, 1010, 5, 995);
    if (pokemon[i].Gender_Female > 50) {
      fill(255, 176, 219);
    } else if (pokemon[i].Gender_Female < 1 && pokemon[i].Gender_Male < 1) {
      fill(0);
    } else if (pokemon[i].Gender_Female == 50 && pokemon[i].Gender_Male == 50) {
      fill(200);
    } else {
      fill(191, 218, 255);
    }
    noStroke();
    circle(gender, pokemonNumber, 10);
  }
}

function HP() {
  for (let i = 0; i < pokemon.length; i++) {
    let attack = map(pokemon[i].Attack, 5, 190, 10, 990);
    let defense = map(pokemon[i].Defense, 5, 250, 10, 990);
    let hp = map(pokemon[i].HP, 1, 255, 0, 510);
    if (hp < 256) {
      fill(255, 255 - hp, 0);
    } else {
      fill(hp - 255, 255, 0);
    }
    noStroke();
    circle(attack, defense, 10);
  }
}
