// 1. Basic Setup
console.log("Welcome to the Community Portal");

window.onload = function () {
  alert("Page is fully loaded");
};

// 2. Event Data
const eventName = "Tech Talk 2025";
const eventDate = "2025-07-15";
let seats = 30;

console.log(`Event: ${eventName} on ${eventDate}. Seats available: ${seats}`);

// 3. Conditionals & Loop
const events = [
  { name: "Music Night", date: "2025-06-10", seats: 0, category: "Music" },
  { name: "Art Expo", date: "2025-07-01", seats: 5, category: "Art" },
  { name: "Tech Talk", date: "2025-07-15", seats: 20, category: "Tech" }
];

events.forEach(e => {
  const today = new Date();
  const eventDay = new Date(e.date);
  if (eventDay >= today && e.seats > 0) {
    console.log(`Upcoming Event: ${e.name}`);
  }
});

// 4. Functions & Closures
function addEvent(name, date, category, seats) {
  events.push({ name, date, category, seats });
}

function registerUser(eventName) {
  try {
    const e = events.find(e => e.name === eventName);
    if (!e || e.seats <= 0) throw new Error("No seats available");
    e.seats--;
    console.log(`Registered for ${e.name}, seats left: ${e.seats}`);
  } catch (err) {
    console.error(err.message);
  }
}

const categoryCounter = (category => {
  let count = 0;
  return () => ++count;
})();

function filterEventsByCategory(category, callback) {
  const filtered = events.filter(e => e.category === category);
  callback(filtered);
}

// 5. Objects & Prototypes
function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}

Event.prototype.checkAvailability = function () {
  return this.seats > 0 ? "Available" : "Sold Out";
};

const sampleEvent = new Event("Baking Workshop", "2025-08-01", 10);
console.log(sampleEvent.checkAvailability());

// 6. Arrays
events.push({ name: "Cooking Class", date: "2025-08-05", seats: 10, category: "Food" });

const musicEvents = events.filter(e => e.category === "Music");
const eventTitles = events.map(e => `Upcoming: ${e.name}`);

console.log(eventTitles);

// 7. DOM Manipulation
document.querySelectorAll("h3").forEach(heading => {
  heading.style.textDecoration = "underline";
});

// 8. Event Handlers
document.querySelectorAll("button").forEach(btn => {
  btn.onclick = () => console.log("Button clicked!");
});

document.getElementById("eventType")?.addEventListener("change", e => {
  console.log("Selected category:", e.target.value);
});

document.querySelector("textarea")?.addEventListener("keydown", e => {
  if (e.key === "Enter") console.log("Submitting message...");
});

// 9. Async/Await (Mock API)
async function fetchEvents() {
  try {
    console.log("Loading events...");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Events loaded:", events);
  } catch (err) {
    console.error("Failed to fetch events");
  }
}
fetchEvents();

// 11. Form Handling
document.querySelector("form")?.addEventListener("submit", e => {
  e.preventDefault();
  const { name, email, date } = e.target.elements;
  if (!name.value || !email.value) {
    alert("Please fill all required fields");
    return;
  }
  console.log(`Registered: ${name.value} (${email.value})`);
});

// 12. Simulated POST
function submitToServer(data) {
  console.log("Sending to server...", data);
  setTimeout(() => {
    console.log("Success!");
  }, 1000);
}
