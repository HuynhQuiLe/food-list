import { getAllInputForm } from "./getInputElement.js";

export const fillUpdateInfor = (maMon) => {
  const foodArray = JSON.parse(localStorage.getItem("foodArray"));
  const updatedFood = foodArray.find((food) => food.maMon === maMon);
  const { tenMon, loai, giaMon, khuyenMai, tinhTrang, hinhMon, moTa } =
    updatedFood;
  const {
    idInput,
    tenMonInput,
    loaiInput,
    giaMonInput,
    khuyenMaiInput,
    tinhTrangInput,
    hinhMonInput,
    moTaInput,
  } = getAllInputForm();
  //   binding data
  idInput.value = maMon;
  tenMonInput.value = tenMon;
  loaiInput.value = loai;
  giaMonInput.value = giaMon;
  khuyenMaiInput.value = khuyenMai;
  tinhTrangInput.value = tinhTrang;
  hinhMonInput.value = hinhMon;
  moTaInput.value = moTa;
};

window.fillUpdateInfor = fillUpdateInfor;
