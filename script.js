/* ===========================
   Part 2: JavaScript Functions
   =========================== */

// Global variable
let animationCount = 0;

// Function with parameter & return value
function doubleNumber(num) {
  return num * 2;
}

// Function to update counter (scope example)
function updateCounter() {
  // Local scope
  let message = "Animations triggered: " + animationCount;
  console.log(message);
}

// Function to toggle animation class
function toggleAnimation(elementId) {
  let element = document.getElementById(elementId);
  element.classList.toggle("animate");
  animationCount++;
  updateCounter();
}

// Example usage
console.log("Double of 4 is:", doubleNumber(4));

/* ===========================
   Part 3: Combining JS + CSS Animations
   =========================== */
// Animate box on button click
document.getElementById("start-animation").addEventListener("click", function() {
  toggleAnimation("animate-box");
});

// Modal animation
let modal = document.getElementById("modal");
let openBtn = document.getElementById("open-modal");
let closeBtn = document.getElementById("close-modal");

openBtn.addEventListener("click", function() {
  modal.style.display = "block";
  setTimeout(function() {
    modal.classList.add("show");
  }, 10);
});

closeBtn.addEventListener("click", function() {
  modal.classList.remove("show");
  setTimeout(function() {
    modal.style.display = "none";
  }, 500);
});
