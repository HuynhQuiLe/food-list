import { resetForm } from "./resetForm.js";

const handleClickOpenModelAdd = () => {
  // show title
  document.querySelector("#exampleModalLabel").innerText = "Thêm món ăn";

  // hide update button
  document.querySelector("#btnCapNhat").classList.add("d-none");
  document.querySelector("#btnThemMon").classList.remove("d-none");

  // resetForm
  resetForm();

  // undisable MAMON
  document.querySelector("#foodID").disabled = false;
  document.querySelector("#foodID").style.cursor = "initial";
};

window.handleClickOpenModelAdd = handleClickOpenModelAdd;
