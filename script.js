const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const animationContainer = document.getElementById("animation-container");

const romanNumerals = [
  { value: 1000, numeral: "M" },
  { value: 900, numeral: "CM" },
  { value: 500, numeral: "D" },
  { value: 400, numeral: "CD" },
  { value: 100, numeral: "C" },
  { value: 90, numeral: "XC" },
  { value: 50, numeral: "L" },
  { value: 40, numeral: "XL" },
  { value: 10, numeral: "X" },
  { value: 9, numeral: "IX" },
  { value: 5, numeral: "V" },
  { value: 4, numeral: "IV" },
  { value: 1, numeral: "I" },
];

const checkUserInput = () => {
  const inputValue = numberInput.value.trim();
  const inputInt = parseInt(inputValue);

  if (!inputValue || isNaN(inputInt)) {
    output.textContent = "Please enter a valid number";
    return;
  }
  
  if (inputInt < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    return;
  }
  
  if (inputInt >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
    return;
  }

  animationContainer.innerHTML = "";
  output.textContent = decimalToRoman(inputInt);
  numberInput.value = "";
};

const decimalToRoman = (num) => {
  let result = "";
  for (const { value, numeral } of romanNumerals) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }
  return result;
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});