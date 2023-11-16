// 3. Skriv klart funktionen removeVowels som tar
// bort vokaler, alltså bokstäverna: aouåeiyäö.
function removeVowels(word) {
  //din kod här
}

console.log(removeVowels("hej")); // Ska logga "hj"
console.log(removeVowels("hallå")); // Ska logga hll

//FACIT
/* const vowels = ["a", "o", "u", "å", "e", "i", "y", "ä", "ö"];

function removeVowels(wordArray) {
  //variabel för resultat
  let wordWithoutVowels = "";

  //loop
  for (let i = 0; i < wordArray.length; i++) {
    const letter = wordArray[i];

    // om det inte är en vokal lägg till wordWithoutVowels
    if (!vowels.includes(letter)) {
      wordWithoutVowels += letter;
    }
  }

  //return result
  return wordWithoutVowels;
}

console.log(removeVowels("hej")); // Ska logga "hj"
console.log(removeVowels("hallå")); // Ska logga hll */
