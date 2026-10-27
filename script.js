document.getElementById("calc").addEventListener("click", () => {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const op = document.getElementById("op").value;
  const result = document.getElementById("result");

  if (isNaN(a) || isNaN(b)) {
    result.textContent = "Írj be két számot!";
    return;
  }

  if (op === "/" && b === 0) {
    result.textContent = "Nullával nem lehet osztani!";
    return;
  }

  let value;
  switch (op) {
    case "+": value = a + b; break;
    case "-": value = a - b; break;
    case "*": value = a * b; break;
    case "/": value = a / b; break;
  }

  result.textContent = `Eredmény: ${value}`;
});
