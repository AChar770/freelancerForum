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
  
  // This creates ONE freelancer object
// does NOT touch the DOM
// It ONLY returns data
function createFreelancer() {
  return {
    name: getRandomItem(NAMES),
    occupation: getRandomItem(OCCUPATIONS),
    rate: Math.floor(Math.random() * 100) + 20, // rate between 20–119
  };
}


// This array represents the current "state" of our app
// Everything else depends on this variable
const freelancers = Array.from(
  { length: NUM_FREELANCERS },
  createFreelancer
);

// Always log state while learning
console.log("STATE:", freelancers);

// This calculates the average rate
// It does NOT store the value — it computes it
function getAverageRate(freelancers) {
  const total = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.rate,
    0
  );

  return total / freelancers.length;
}


// This returns HTML for ONE freelancer
// Input: freelancer object
// Output: HTML string
function FreelancerRow(freelancer) {
  return `
    <tr>
      <td>${freelancer.name}</td>
      <td>${freelancer.occupation}</td>
      <td>$${freelancer.rate}</td>
    </tr>
  `;
}

// This turns an ARRAY of freelancers into HTML
function FreelancerRows(freelancers) {
  return freelancers
    .map(FreelancerRow) // create an array of HTML strings
    .join("");          // remove commas so HTML works
}

// This component displays the average rate
function AverageRate(rate) {
  return `<h2>Average Hourly Rate: $${rate.toFixed(2)}</h2>`;
}

function render() {
  const app = document.querySelector("#app");

  // Insert valid table structure with a REAL tbody placeholder
  app.innerHTML = `
    ${AverageRate(getAverageRate(freelancers))}

    <table border="1" cellpadding="8">
      <thead>
        <tr>
          <th>Name</th>
          <th>Occupation</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody id="FreelancerRows"></tbody>
    </table>
  `;

  // Replace the REAL tbody with rendered rows
  app
    .querySelector("#FreelancerRows")
    .outerHTML = `
      <tbody>
        ${FreelancerRows(freelancers)}
      </tbody>
    `;
}

render();
