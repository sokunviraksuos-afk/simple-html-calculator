const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function squareRoot() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    display.value = "Error";
  }
}

function calculate() {
  try {
    let expression = display.value;

    // Convert a^b into Math.pow(a,b)
    expression = expression.replace(
      /(\d+(\.\d+)?|\))\^(\d+(\.\d+)?|\()/g,
      'Math.pow($1,$3)'
    );

    display.value = eval(expression);
  } catch {
    display.value = "Syntax Error";
  }
}
