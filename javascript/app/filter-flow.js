import { renderDanhSachSP } from "./product-flow.js";
import { api, state } from "./core.js";
let { danhSachSP, timerId } = state;
//
export const filterSP = () => {
  const keyword = api.searchInput.value.toLowerCase().trim();
  const type = api.filterSelect.value;
  let ketQua = danhSachSP.filter((p) => {
    const matchKeyword =
      p.name.toLowerCase().includes(keyword) ||
      p.desc.toLowerCase().includes(keyword);
    const matchType =
      type === "" || p.type.toLowerCase() === type.toLowerCase();
    return matchKeyword && matchType;
  });
  renderDanhSachSP(ketQua);
};
const debounce = () => {
  clearTimeout(timerId);
  timerId = setTimeout(filterSP, 500);
};

export const bindFilterEvent = () => {
  api.searchInput.addEventListener("input", debounce);
  api.filterSP.addEventListener("change", filterSP);
};
