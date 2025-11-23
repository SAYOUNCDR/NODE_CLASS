// Async Function-> The await tells JS: “pause this function, but don’t block the entire program.”
// The nonsyncFunction blocks the main thread, demonstrating the difference.


async function fetchData() {
  console.log("🚀 [fetchData] Started async task...");

  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("✅ [fetchData] Async task finished after 2 seconds!");
    }, 2000);
  });

  return result;
}

function nonsyncFunction() {
  console.log("🧱 [nonsyncFunction] Starting heavy synchronous work...");
  const start = Date.now();

  // Simulate blocking for ~2 seconds
  while (Date.now() - start < 2000) {
    // busy loop blocks main thread
  }

  console.log("✅ [nonsyncFunction] Finished blocking work after 2 seconds!");
}

// ---- Main Execution ----
console.log("🏁 Program started!");

fetchData()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

console.log("⚙️ Running nonsyncFunction (this will BLOCK)...");
nonsyncFunction();

console.log("🏁 Program ended!");




