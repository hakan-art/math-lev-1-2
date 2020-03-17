//Lev1_1_js-vertiefung_math_math-pi

console.log(Math.PI);

const pi = Math.PI;
console.log(pi);
const roundedPI = pi.toPrecision(3);
console.log(roundedPI);

//Lev1_2_js-vertiefung_math_math-round

//Const PI aus letzten Übung.

9.45;
193.4464;
0.8596433607;
0.65149992;
2.18073015 - 2.940629089 - 24.45;

function round(x) {
  y = Math.round(x);
}

round(pi);
console.log(y);

round(9.45);
let z = y;
console.log(z);

round(193.4464);
let a = y;
console.log(a);

round(0.8596433607);
let b = y;
console.log(b);

round(0.65149992);
let c = y;

console.log(c);

round(2.18073015 - 2.940629089 - 24.45);
let e = y;

console.log(e);

//Lev1_3_js-vertiefung_math_math-random_math-floor

let randomNum = Math.random();
console.log(randomNum);
let randomNum1_10 = Math.floor(Math.random() * 10);
console.log(randomNum1_10);

let randomNum1_100 = Math.floor(Math.random() * 100);
console.log(randomNum1_100);

//Lev1_4_js-vertiefung_math_math-min_math-max

let num = Math.min(
  393,
  205,
  479,
  47,
  376,
  267,
  385,
  2,
  190,
  383,
  286,
  462,
  115,
  138,
  331,
  409,
  427,
  245,
  224,
  276,
  483,
  55,
  147,
  177,
  208,
  347,
  135,
  282,
  33,
  270,
  475,
  426,
  476,
  453,
  474,
  351,
  219,
  358,
  354,
  410,
  240,
  139,
  371,
  356,
  277,
  202,
  264,
  204,
  447,
  488
);
let num1 = Math.max(
  393,
  205,
  479,
  47,
  376,
  267,
  385,
  2,
  190,
  383,
  286,
  462,
  115,
  138,
  331,
  409,
  427,
  245,
  224,
  276,
  483,
  55,
  147,
  177,
  208,
  347,
  135,
  282,
  33,
  270,
  475,
  426,
  476,
  453,
  474,
  351,
  219,
  358,
  354,
  410,
  240,
  139,
  371,
  356,
  277,
  202,
  264,
  204,
  447,
  488
);
console.log(num);
console.log(num1);

//Lev2_1_js-vertiefung_math_math-round

//Const PI aus früheren Übungen.

let num3 = [
  pi,
  9.45,
  193.4464,
  0.8596433607,
  0.65149992,
  2.18073015,
  -2.940629089,
  -24.45
];

num3.forEach(elt => {
  console.log("rund", Math.round(elt));
});

//Lev2_2_js-vertiefung_math_math-random_math-floor_game

/*let random = Math.floor(Math.random() * 10);
let userChoice = prompt("Schätzen sie die Nummer zwischen 1 und 10");

function spiel() {
  if (random == userChoice) {
    console.log("richtig!!");
  } else {
    console.log("du hast verloren!! die Nummer lautet", random);
  }
}
spiel();*/

//Lev2_3_js-vertiefung_math_math-min_math-max

function minimalWerte() {
  let dasAlterDerEltern = Math.min(66, 55);
  let dasAlterDerGeschwister = Math.min(55, 45);
  let dasAlterDerTrainer = Math.min(34, 43);
  let dasAlterDerFussballspieler = Math.min(23, 33);

  console.log(
    "Der Jüngste in der Gruppe ist:",
    "Alter der Eltern",
    dasAlterDerEltern,
    "Alter der Trainer",
    dasAlterDerTrainer,
    "Alter voon Fussbalspieler",
    dasAlterDerFussballspieler,
    "alter der Geschwister",
    dasAlterDerGeschwister
  );
}
minimalWerte();

//Lev1_1_js-vertiefung_date_new-date()
let date = new Date(1975, 9, 10, 15, 23, 43);
let date2 = new Date(1982, 1, 02, 10, 00, 00);
let date3 = new Date(1995, 2, 27, 00, 00, 00);

document.getElementById("date1").innerHTML = new Date(date) + " = new Date(x)";
document.getElementById("date2").innerHTML = new Date(date2) + " = new Date(x)";
document.getElementById("date3").innerHTML = new Date(date3) + " = new Date(x)";
