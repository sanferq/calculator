let display = document.querySelector(".display");
let buttons = Array.from(document.querySelectorAll(".button"));

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const input = e.target.innerText;
    
    switch (input) {
      case "AC":
        display.innerText = "0";
        break;

      case "=":
        try {
          display.innerText = Function('return ' + display.innerText)();
        } catch (error) {
          display.innerText = "Error!";
        }
        break;

      case "+/-":
        if (display.innerText !== "0") {
          display.innerText = (parseFloat(display.innerText) * -1).toString();
        }
        break;

      case "%":
        display.innerText = (parseFloat(display.innerText) / 100).toString();
        break;

      default:
        if (display.innerText === "0" && input !== ".") {
          display.innerText = input;
        } else if (input === "." && display.innerText.includes(".")) {
          return;
        } else {
          display.innerText += input;
        }
    }
  });
});
