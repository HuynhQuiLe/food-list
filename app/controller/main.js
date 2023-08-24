import { getAllFoodList } from "./foodListController.js";

export const renderList = (data) => {
  let innerHTML = "";
  data.map((item) => {
    return (innerHTML += `
    <tr>
    <td class="text-uppercase">${item.maMon}</td>
    <td class="text-capitalize" style="width: 200px;"><p class="m-0" style="width: 200px; white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;">${item.tenMon}</p></td>
    <td><img src="${item.hinhMon}" alt="${item.tenMon}"></td>
    <td>${
      item.loai == "loai1"
        ? "<span class='text-warning'>Chay</span>"
        : "<span class='text-success'>Mặn</span>"
    }</td>
    <td>${item.giaMon}</td>
    <td>${item.khuyenMai}%</td>
    <td>${item.giaMon - (item.giaMon * item.khuyenMai) / 100}</td>
    <td>${
      item.tinhTrang == 1
        ? "<span class='text-info'>Còn</span>"
        : "<span class='text-danger'>Hết</span>"
    }</td>
    <td>
        <button class="btn btn-success" data-toggle="modal" data-target="#exampleModal" onclick="handleClickOpenModelUpdate('${
          item.maMon
        }', '${item.id}')">EDIT</button>
        <button class="btn btn-danger" onclick="deleteFood('${
          item.id
        }')">DELETE</button>
    </td>

</tr>
        `);
  });

  document.querySelector("#tbodyFood").innerHTML = innerHTML;
};

getAllFoodList();
