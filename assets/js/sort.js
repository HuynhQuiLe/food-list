import { renderList } from "../../app/controller/main.js";

const sort = (event) => {
  const sort = event.target.value;
  const foodArray = JSON.parse(localStorage.getItem("foodArray"));
  if (sort === "all") {
    renderList(foodArray);
  } else {
    const foodFilterArray = foodArray.filter((food) => food.loai === sort);
    renderList(foodFilterArray);
  }
};

window.sort = sort;
