export const getAllInputForm = () => {
  const idInput = document.querySelector("#foodID");
  const tenMonInput = document.querySelector("#tenMon");
  const loaiInput = document.querySelector("#loai");
  const giaMonInput = document.querySelector("#giaMon");
  const khuyenMaiInput = document.querySelector("#khuyenMai");
  const tinhTrangInput = document.querySelector("#tinhTrang");
  const hinhMonInput = document.querySelector("#hinhMon");
  const moTaInput = document.querySelector("#moTa");
  return {
    idInput,
    tenMonInput,
    loaiInput,
    giaMonInput,
    khuyenMaiInput,
    tinhTrangInput,
    hinhMonInput,
    moTaInput,
  };
};

export const getAllInputValue = () => {
  const maMon = document.querySelector("#foodID").value;
  const tenMon = document.querySelector("#tenMon").value;
  const loai = document.querySelector("#loai").value;
  const giaMon = document.querySelector("#giaMon").value;
  const khuyenMai = document.querySelector("#khuyenMai").value;
  const tinhTrang = document.querySelector("#tinhTrang").value;
  const hinhMon = document.querySelector("#hinhMon").value;
  const moTa = document.querySelector("#moTa").value;
  return {
    maMon,
    tenMon,
    loai,
    giaMon,
    khuyenMai,
    tinhTrang,
    hinhMon,
    moTa,
  };
};
