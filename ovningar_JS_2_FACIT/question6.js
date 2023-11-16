// 8. (2p) Skriv klart funktionen pizzaPrice som tar en pizza-sort
// som input och returnerar priset.
// Pizza-sorterna är begränsade till följande pizzor:
// "hawaii", "peperoni" och "vegetarian"
// En "hawaii" kostar 80 kr
// En "peperoni" kostar 90 kr
// En "vegetarian" kostar 85 kr

function pizzaPrice(pizza) {
  //Din kod här.
}

/* //FACIT
// 8. (2p) Skriv klart funktionen pizzaPrice som tar en pizza-sort
// som input och returnerar priset.
// Pizza-sorterna är begränsade till följande pizzor:
// "hawaii", "peperoni" och "vegetarian"
// En "hawaii" kostar 80 kr
// En "peperoni" kostar 90 kr
// En "vegetarian" kostar 85 kr
//med if-sats
function pizzaPrice(pizza) {
  const pizzaInput = pizza.toLowerCase();
  if (pizzaInput == "hawaii") {
    return "80 kr ";
  } else if (pizzaInput == "vegetarian") {
    return "85 kr";
  } else if (pizzaInput == "peperoni") {
    return "90 kr";
  } else {
    return `Vår meny består av följande: Hawaii ${80}kr, Peperoni ${90}kr, Vegetarian ${85}kr. 
    Vi kan inte baka andra pizzor tyvärr.`;
  }
}
console.log(pizzaPrice("hawaii"));
//med switch
function pizzaPrice(pizza) {
  const pizzaInput = pizza.toLowerCase();
  switch (pizzaInput) {
    case "hawaii":
      // result = 80;
      return 80;
    //break;
    case "peperoni":
      // result = 90;
      return 90;

    //break;
    case "vegetarian":
      // result = 85;
      return 90;
    //break;
    default:
      `Vår meny består av följande: Hawaii ${80}kr, Peperoni ${90}kr, Vegetarian ${85}kr. 
      Vi kan inte baka andra pizzor tyvärr.`;
  }
  return result;
}
console.log(pizzaPrice("hawaii"));

//med object
const pizzaPrices = {
  hawaii: 80,
  peperoni: 90,
  vegetarian: 85,
};
const price = pizzaPrice["hawaii"];

console.log(pizzaPrice("hawaii"));
 */
