## Promises

Promises are a core feature in JavaScript for handling asynchronous operations. They represent a value that may be available now, later, or never, and help avoid deeply nested callbacks.

### Basics

- Create a promise with `new Promise((resolve, reject) => { ... })`.
- Use `resolve(value)` to fulfill the promise.
- Use `reject(error)` to reject the promise.

**Example:**

```js
// promise-example.js
function wait(ms) {
    return new Promise((resolve) => setTimeout(() => resolve(ms), ms));
}

wait(500)
    .then((ms) => {
        console.log(`Resolved after ${ms}ms`);
        return wait(300);
    })
    .then((ms) => console.log(`Then chained: ${ms}ms`))
    .catch((err) => console.error("Promise rejected:", err))
    .finally(() => console.log("Done"));
```

**Run:**
```cmd
cd /d E:\INT222-NodeJs
node Asyncs\promise-example.js
```

### Promise.all and Promise.race

- `Promise.all([p1, p2, ...])`: Resolves when all promises resolve, or rejects if any reject.
- `Promise.race([p1, p2, ...])`: Resolves or rejects as soon as one promise settles.

**Example:**

```js
const p1 = wait(200);
const p2 = wait(400);

Promise.all([p1, p2]).then((results) => {
    console.log("All resolved:", results); // [200, 400]
});
```

### async / await

`async` functions let you write asynchronous code that looks synchronous. Use `await` to pause until a promise resolves. Handle errors with `try/catch`.

**Example:**

```js
// async-example.js
async function run() {
    try {
        const a = await wait(100);
        const b = await wait(150);
        console.log("Results:", a, b);
    } catch (err) {
        console.error("Error in async function:", err);
    }
}

run();
```

### Tips

- Always return promises in `.then()` chains.
- Prefer using promises or `async`/`await` consistently.
- Handle errors with `.catch()` or `try/catch` in async functions.

### Quick Reference

- Create: `new Promise((resolve, reject) => { ... })`
- Resolve: `resolve(value)`
- Reject: `reject(error)`
- Chain: `.then()`, `.catch()`, `.finally()`
- Combine: `Promise.all`, `Promise.race`, `Promise.allSettled`, `Promise.any`

---

Try the example files in `Asyncs/` for practice.

- Promise uses anonymous functions.
- A promise is either resolved or rejected.
