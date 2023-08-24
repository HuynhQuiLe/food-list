const BASE_URL = "https://61029c2e79ed6800174821f1.mockapi.io/api/foodList";

import { showSuccess } from "../../assets/js/alert.js";
import { getAllInputValue } from "../../assets/js/getInputElement.js";
import { validateAnyEmptyValue } from "../../assets/js/validation.js";
import { Food } from "../models/FoodModel.js";
import { renderList } from "./main.js";

export const getAllFoodList = async () => {
  try {
    const { data: allFood } = await axios.get(BASE_URL);
    if (allFood?.length) {
      localStorage.setItem("foodArray", JSON.stringify(allFood));
      renderList(allFood);
      document.querySelector("#selLoai").value = "all";
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteFood = async (id) => {
  try {
    const { data: deleteFood } = await axios.delete(`${BASE_URL}/${id}`);
    getAllFoodList();
    showSuccess(`Món ăn "${deleteFood.tenMon}" đã được xoá thành công.`);
  } catch (error) {
    console.log(error);
  }
};

const addFood = async () => {
  // check validation
  //  any empty all input
  const isPassed = validateAnyEmptyValue();

  // check any error
  let isAccepted = true;
  const errorsNodeList = document.querySelectorAll(".invalid-feedback");
  const errors = [...errorsNodeList];
  const index = errors.findIndex((err) => err.innerText != "");
  if (index !== -1) {
    isAccepted = false;
  }

  const validate = isPassed && isAccepted;

  // accept and ADD
  if (validate) {
    const { maMon, tenMon, loai, giaMon, khuyenMai, tinhTrang, hinhMon, moTa } =
      getAllInputValue();

    const food = new Food(
      maMon,
      tenMon,
      loai,
      giaMon,
      khuyenMai,
      tinhTrang,
      hinhMon,
      moTa
    );
    try {
      await axios.post(BASE_URL, food);
      getAllFoodList();
      showSuccess(`Món ăn "${tenMon}" đã được thêm thành công.`);
      $("#exampleModal").modal("hide");
    } catch (error) {
      console.log(error);
    }
  }
};

const updateFood = async (event) => {
  const id = event.target.getAttribute("data");

  // check validation
  // check any error
  let validate = true;
  const errorsNodeList = document.querySelectorAll(".invalid-feedback");
  const errors = [...errorsNodeList];
  const index = errors.findIndex((err) => err.innerText != "");
  if (index !== -1) {
    validate = false;
  }

  // accept and ADD
  if (validate) {
    const { maMon, tenMon, loai, giaMon, khuyenMai, tinhTrang, hinhMon, moTa } =
      getAllInputValue();

    const food = new Food(
      maMon,
      tenMon,
      loai,
      giaMon,
      khuyenMai,
      tinhTrang,
      hinhMon,
      moTa
    );
    try {
      await axios.put(`${BASE_URL}/${id}`, food);
      getAllFoodList();
      showSuccess(`Món ăn "${tenMon}" đã được cập nhật thành công.`);
      $("#exampleModal").modal("hide");
    } catch (error) {
      console.log(error);
    }
  }
};

window.deleteFood = deleteFood;
window.addFood = addFood;
window.updateFood = updateFood;
