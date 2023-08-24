import { getAllInputValue, getAllInputForm } from "./getInputElement.js";

export const validateAnyEmptyValue = () => {
  let isPassed = true;
  const inputs = getAllInputForm();
  for (const key in inputs) {
    if (!inputs[key].value.trim()) {
      //   console.log(inputs[key].nextSibling.nextElementSibling);
      isPassed = false;
      showErrorValidation(
        inputs[key].nextSibling.nextElementSibling,
        "Trường này không được để trống. "
      );
    }
  }
  return isPassed;
};

export const validateEveryChangeInput = (event, isID) => {
  let isPassed = true;

  const { value } = event.target;

  //   check empty
  if (!value.trim()) {
    showErrorValidation(
      event.target.nextSibling.nextElementSibling,
      "Trường này không được để trống. "
    );
    return (isPassed = false);
  }

  if (isID) {
    // check unique
    const foodArray = JSON.parse(localStorage.getItem("foodArray")) || [];

    const index = foodArray.findIndex(
      (food) => food.maMon.toUpperCase() === value.toUpperCase()
    );

    if (index !== -1) {
      showErrorValidation(
        event.target.nextSibling.nextElementSibling,
        "Mã món đã tồn tại. "
      );
      return (isPassed = false);
    }

    // check space
    let space = /\s/g;
    if (space.test(value)) {
      showErrorValidation(
        event.target.nextSibling.nextElementSibling,
        "Mã món không được chứa khoảng trắng. "
      );
      return (isPassed = false);
    }

    // check length
    let length = /^([a-zA-Z0-9_-]){4,6}$/;
    if (!length.test(value)) {
      showErrorValidation(
        event.target.nextSibling.nextElementSibling,
        "Mã món phải chứa 4 - 6 ký tự "
      );
      return (isPassed = false);
    }
  }

  //   accept
  resetErrorValidation(event.target.nextSibling.nextElementSibling);
  return isPassed;
};

const showErrorValidation = (element, message) => {
  element.style.display = "block";
  element.innerText = message;
};

const resetErrorValidation = (element) => {
  element.style.display = "none";
  element.innerText = "";
};

window.validateEveryChangeInput = validateEveryChangeInput;
