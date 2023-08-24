import { getAllInputForm } from "./getInputElement.js";

export const resetForm = () => {
  // reset all input value and error
  const inputValue = getAllInputForm();
  for (const key in inputValue) {
    inputValue[key].value = "";
  }

  const errorInput = document.querySelectorAll(".invalid-feedback");
  errorInput.forEach((error) => {
    error.innerText = "";
    error.style.display = "none";
  });
};
