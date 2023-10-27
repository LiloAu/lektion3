const prompt = require('prompt-sync')({ sigint: true });

function spelaGissningsSpelet() {
  const hemligtNummer = Math.floor(Math.random() * 100) + 1;
  let gissning;
  let antalGissningar = 0;

  console.log("Välkommen till Gissningsspelet!");

  while (gissning !== hemligtNummer) {
    gissning = parseInt(prompt("Gissa på ett nummer mellan 1 och 100:"));

    if (isNaN(gissning)) {
      console.log("Ogiltigt input. Försök igen.");
      continue;
    }

    antalGissningar++;
    if (gissning < hemligtNummer) {
      console.log("För lågt, försök igen!");
    } else if (gissning > hemligtNummer) {
      console.log("För högt, försök igen!");
    } else {
      console.log(`Grattis! Du gissade rätt på ${antalGissningar} försök.`);
    }
  }
}
spelaGissningsSpelet();