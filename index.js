const display = document.getElementById("display");

const appendToDisplay = (input) => {
  display.value += input;
};

const clearDisplay = () => {
  display.value = "";
};

const delete_number = () => {
  display.value = display.value.slice(0, -1);
}

const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
};
