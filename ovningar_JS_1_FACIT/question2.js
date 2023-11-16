// 2.	Skriv klart funktionen findLargest.
// findLargest ska returnera det största numret i arrayen som skickas till den:

function findLargest(numbers) {
  // lägg till din kod här
}

console.log("findLargest", findLargest([1, 2, 3, 4, 5])); // ska logga 5
console.log("findLargest", findLargest([-1, -2, -3, -4, -5])); // ska logga -1

// 2.1	Skriv klart funktionen findSmallest.
// findSmallest ska returnera det minsta talet i arrayen.

function findSmallest(numbers) {
  // lägg till din kod här
}

console.log("findSmallest ", findSmallest([1, 2, 3, 4, 5])); // ska logga 1
console.log("findSmallest", findSmallest([-1, -2, -3, -4, -5])); // ska logga -5

//FACIT

/* function findLargest(numbers) {
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
} */
/* function findLargest(numbers) {
  let max = numbers[0];
  numbers.forEach((numbers) => {
    if (numbers > max) {
      max = numbers;
    }
  });
  return max;
}

console.log("findLargest", findLargest([1, 2, 3, 4, 5])); // ska logga 5
console.log("findLargest", findLargest([-1, -2, -3, -4, -5])); // ska logga -1

// 2.1	Skriv klart funktionen findSmallest.
// findSmallest ska returnera det minsta talet i arrayen.

function findSmallest(numbers) {
  let smallest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }
  return smallest;
}
function findSmallest(numbers) {
  let min = numbers[0];
  numbers.forEach((numbers) => {
    if (numbers < min) {
      min = numbers;
    }
  });
  return min;
}

console.log("findSmallest ", findSmallest([1, 2, 3, 4, 5])); // ska logga 1
console.log("findSmallest", findSmallest([-1, -2, -3, -4, -5])); // ska logga -5
 
//FOR-LOOP
function findLargest(numbers) {
  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (max < numbers[i]) {
      max = numbers[i];
    }
  }
  return max;

}

function findSmallest(numbers) {
  let min = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (min > numbers[i]) {
      min = numbers[i];
    }
  }
  return min;

}


*/
