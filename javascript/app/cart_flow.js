import { state, api } from "./core.js";
import { capNhatSoLuongGioHang } from "./product-flow.js";
//
window.tangSoLuong = (id) => {
  const item = gioHang.find((p) => p.id == id);
  if (!item) {
    alert(`không tìm thấy sản phẩm`);
    return;
  }
  item.soLuong += 1;
  capNhatSoLuongGioHang();
  renderGioHang();
};
//
window.giamSoLuong = (id) => {
  const item = gioHang.find((p) => p.id == id);
  if (!item) {
    alert(`không tìm thấy sản phẩm`);
    return;
  }
  if (item.soLuong === 1) {
    return;
  }
  item.soLuong -= 1;
  capNhatSoLuongGioHang();
  renderGioHang();
};
//
window.xoaSP = (phoneId) => {
  gioHang = gioHang.filter((p) => p.id != phoneId);
  capNhatSoLuongGioHang();
  renderGioHang();
};
//
const renderGioHang = () => {
  if (gioHang.length === 0) {
    api.noiDungGioHang.innerHTML = `<div class="text-center py-10 text-gray-400"><i class="fa-solid fa-cart-shopping text-4xl mb-3 block opacity-20"></i>Giỏ hàng trống</div>`;
    api.tongTien.textContent = "0đ";
  } else {
    const contentHTML = gioHang.map((item) => {
      const disableGiam =
        item.soLuong === 1 ? "disabled opacity-50 cursor-not-allowed" : "";
      return ` <div class="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                <img src="${item.img}" class="w-16 h-16 object-contain rounded-lg bg-gray-50 p-1" />
                <div class="flex-1">
                    <h4 class="font-bold text-gray-800 leading-tight">${item.name}</h4>
                    <p class="text-blue-600 font-bold text-sm">${Number(item.price).toLocaleString()}đ</p>
                </div>
                <div class="flex items-center bg-gray-100 rounded-xl p-1">
                    <button onclick="giamSoLuong('${item.id}')" class="w-7 h-7 flex items-center justify-center hover:bg-white rounded-lg transition-all text-gray-600 ${disableGiam}">-</button>
                    <span class="w-8 text-center font-bold text-sm">${item.soLuong}</span>
                    <button onclick="tangSoLuong('${item.id}')" class="w-7 h-7 flex items-center justify-center bg-white rounded-lg transition-all shadow-sm">+</button>
                </div>
                <button onclick="xoaSP('${item.id}')" class="p-2 text-gray-300 hover:text-red-500 transition-colors"><i class="fa-solid fa-trash-can"></i></button>
            </div>`;
    });
    api.noiDungGioHang.innerHTML = contentHTML.join("");

    const total = gioHang.reduce(
      (sum, item) => sum + item.price * item.soLuong,
      0,
    );
    api.tongTien.textContent = total.toLocaleString() + "đ";
  }
  api.popupGioHang.classList.remove("hidden");
};
