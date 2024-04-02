//Oppgave 1
 /*
function sjekkStreng(streng) {
    if (streng.length === 0) {
      return 'Strengen er tom';
    } else {
      return 'Strengen er ikke tom';
    }
  }
  
  console.log(sjekkStreng('')); // Output: Strengen er tom
  console.log(sjekkStreng('Røyken VGS')); // Output: Strengen er ikke tom
*/

//Oppgave 2

/*
function delTekstTilOrd(tekst) {
    return tekst.split(' ');
  }
  
  console.log(delTekstTilOrd('Hei hvordan har du det')); 
*/

//Oppgave 3

/*
var tekst = "SIS"

var reversTekst = tekst.split("").reverse().join("");

console.log(reversTekst);

if (tekst == reversTekst) {
    console.log("Teksten er PALINDROM");
} else {
    console.log("Teksten er IKKE PALINDROM");
}
*/

//oppgave 4

/*
var sortMethods = "Daniel"
console.log(sortMethods.split("").sort().join(""));
*/

//Oppgave 5

/*
function tellBokstaver(tekst, bokstav) {
    let antall = 0;
    for (let i = 0; i < tekst.length; i++) {
      if (tekst[i] === bokstav) {
        antall++;
      }
    }
    return antall;
  }
  
  console.log(tellBokstaver('Hei hvordan har du det', 'd')); 
  console.log(tellBokstaver('Hei hvordan har du det', 'x'));
  */