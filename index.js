/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants === - Data Pool
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

  // Math.random() → number between 0 and 0.999...
  // Multiply by array length → valid index range
  // Math.floor → whole number index
  
  // This function creates ONE freelancer object
// does NOT touch the DOM
// It ONLY returns data
function createFreelancer() {
  return {
    name: getRandomItem(NAMES),
    occupation: getRandomItem(OCCUPATIONS),
    rate: Math.floor(Math.random() * 100) + 20, // rate between 20–119
  };
}


