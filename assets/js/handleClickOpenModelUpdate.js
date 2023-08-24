import { fillUpdateInfor } from "./fillUpdateInfor.js";

import { resetForm } from "./resetForm.js";

const handleClickOpenModelUpdate = (maMon, id) => {
  // show title
  document.querySelector("#exampleModalLabel").innerText = "Cập nhật món ăn";

  // hide add button
  document.querySelector("#btnCapNhat").classList.remove("d-none");
  document.querySelector("#btnThemMon").classList.add("d-none");

  // resetForm
  resetForm();

  // disable MAMON
  document.querySelector("#foodID").disabled = true;
  document.querySelector("#foodID").style.cursor = "not-allowed";

  // fill information into Input
  fillUpdateInfor(maMon);

  // set data attribute for cap nhat button

  document.querySelector("#btnCapNhat").setAttribute("data", id);
};

window.handleClickOpenModelUpdate = handleClickOpenModelUpdate;
