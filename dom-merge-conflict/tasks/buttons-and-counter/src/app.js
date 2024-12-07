//increments the number in a node's text
function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}

function decrement(node) {
  let current = node.textContent;
  node.textContent = Number(current) - 1;
}

export function App() {
  const body = document.createElement("body");

  const header = document.createElement("header");
  header.innerHTML = `
        <h1>Number Counter</h1>
        <p>A simple counter. Press increment to increase the count by one.
         Press decrement to reduce the count by one.
        </p>

    `;
  body.appendChild(header);

  const main = document.createElement("main");
  main.innerHTML = `
        <p id="counter" data-testid="counter">0</p>
        <button id="increment">Increment</button>
        <button id="decrement">Decrement</button>
    `;
  body.appendChild(main);

  const btnDecr = body.querySelector("#decrement");
  const btnInc = body.querySelector("#increment");
  const counter = body.querySelector("#counter");
  btnInc.addEventListener("click", () => {
    increment(counter);
  });
  btnDecr.addEventListener("click", () => {
    decrement(counter);
  });

  return body;
}
