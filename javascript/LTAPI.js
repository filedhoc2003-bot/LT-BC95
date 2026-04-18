// // import API_URL, el, state từ core.js
// import { API_URL, api, state } from "./app/core.js";

import { api } from "./app/core.js";
import { layDanhSachSP } from "./app/product-flow.js";

// // const API_URL = "https://69d4a2b3d396bd74235d4f22.mockapi.io/api";

// // const api = {
// //   btnGioHang: document.getElementById("btnGioHang"),
// //   bangeGioHang: document.getElementById("bangeGioHang"),
// //   searchInput: document.getElementById("searchInput"),
// //   filterSelect: document.getElementById("filterSelect"),
// //   loading: document.getElementById("loading"),
// //   danhSachSP: document.getElementById("danhSachSP"),
// //   popupChiTiet: document.getElementById("popupChiTiet"),
// //   popupContent: document.getElementById("popupContent"),
// //   popupGioHang: document.getElementById("popupGioHang"),
// //   noiDungGioHang: document.getElementById("noiDungGioHang"),
// //   tongTien: document.getElementById("tongTien"),
// // };

// // let gioHang = [];
// // let danhSachSP = [];
// // let timerId = null;
// let { danhSachSP, gioHang, timerId } = state;

// // ================== RENDER ==================
// // const renderDanhSachSP = (danhSach) => {
// //   api.danhSachSP.innerHTML = "";
// //   if (danhSach.length === 0) {
// //     api.danhSachSP.innerHTML = `<div class="col-span-full text-center py-20"><p class="text-gray-400">Không tìm thấy sản phẩm nào</p></div>`;
// //     return;
// //   }
// //   const content = danhSach.map((phone) => {
// //     return ` <div class="bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group">
// //             <div class="bg-gray-50 rounded-2xl p-4 mb-4 relative overflow-hidden h-48 flex items-center justify-center">
// //                 <img src="${phone.img}" alt="${phone.name}" class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500">
// //                 <span class="absolute top-2 right-2 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-blue-600 uppercase tracking-wider shadow-sm border border-blue-50">${phone.type}</span>
// //             </div>
// //             <h3 class="text-lg font-bold text-gray-800 mb-1 leading-tight">${phone.name}</h3>
// //             <p class="text-sm text-gray-400 mb-4 line-clamp-2">${phone.desc}</p>
// //             <div class="flex items-center justify-between mt-auto">
// //                 <span class="text-xl font-black text-gray-900">${Number(phone.price).toLocaleString()}đ</span>
// //                 <div class="flex gap-2">
// //                     <button onclick="showChiTietSP('${phone.id}')" class="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-600 transition-colors"><i class="fa-solid fa-eye text-sm"></i></button>
// //                     <button onclick="themVaoGioHang('${phone.id}')" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all active:scale-95 shadow-md shadow-blue-100">Thêm</button>
// //                 </div>
// //             </div>
// //         </div>`;
// //   });
// //   api.danhSachSP.innerHTML = content.join("");
// // };

// const renderGioHang = () => {
//   if (gioHang.length === 0) {
//     api.noiDungGioHang.innerHTML = `<div class="text-center py-10 text-gray-400"><i class="fa-solid fa-cart-shopping text-4xl mb-3 block opacity-20"></i>Giỏ hàng trống</div>`;
//     api.tongTien.textContent = "0đ";
//   } else {
//     api.noiDungGioHang.innerHTML = gioHang
//       .map(
//         (item) => `
//             <div class="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
//                 <img src="${item.img}" class="w-16 h-16 object-contain rounded-lg bg-gray-50 p-1" />
//                 <div class="flex-1">
//                     <h4 class="font-bold text-gray-800 leading-tight">${item.name}</h4>
//                     <p class="text-blue-600 font-bold text-sm">${Number(item.price).toLocaleString()}đ</p>
//                 </div>
//                 <div class="flex items-center bg-gray-100 rounded-xl p-1">
//                     <button onclick="giamSoLuong('${item.id}')" class="w-7 h-7 flex items-center justify-center hover:bg-white rounded-lg transition-all text-gray-600">-</button>
//                     <span class="w-8 text-center font-bold text-sm">${item.soLuong}</span>
//                     <button onclick="tangSoLuong('${item.id}')" class="w-7 h-7 flex items-center justify-center bg-white rounded-lg transition-all shadow-sm">+</button>
//                 </div>
//                 <button onclick="xoaSP('${item.id}')" class="p-2 text-gray-300 hover:text-red-500 transition-colors"><i class="fa-solid fa-trash-can"></i></button>
//             </div>
//         `,
//       )
//       .join("");

//     const total = gioHang.reduce(
//       (sum, item) => sum + item.price * item.soLuong,
//       0,
//     );
//     api.tongTien.textContent = total.toLocaleString() + "đ";
//   }
//   api.popupGioHang.classList.remove("hidden");
// };

// // ================== LOGIC ==================
// // const layDanhSachSP = async () => {
// //   api.loading.classList.remove("hidden");
// //   try {
// //     const res = await axios.get(API_URL);
// //     danhSachSP = res.data;
// //     renderDanhSachSP(danhSachSP);
// //   } catch {
// //     api.danhSachSP.innerHTML = `<p class="col-span-full text-center text-red-500">Lỗi kết nối máy chủ</p>`;
// //   }
// //   api.loading.classList.add("hidden");
// // };

// // window.themVaoGioHang = (phoneId) => {
// //   // B1: tìm sản phẩm trong danh sách sản phẩm dựa trên phoneId
// //   const phone = danhSachSP.find((phone) => phone.id == phoneId);

// //   // B2.1: nếu không tìm thấy sản phẩm thì hiển thị thông báo lỗi
// //   if (!phone) {
// //     alert("Không tìm thấy sản phẩm");
// //     return;
// //   }

// //   // B2.2: nếu tìm thấy sản phẩm thì thêm vào giỏ hàng
// //   // kiểm tra phone này đã có trong giỏ hàng chưa dựa trên id
// //   const phoneTrongGioHang = gioHang.find((item) => item.id == phoneId);

// //   // B2.2.1: kiểm tra sản phẩm này có trong giỏ hàng chưa. Nếu chưa có thì thêm mới với số lượng là 1
// //   if (!phoneTrongGioHang) {
// //     gioHang.push({
// //       ...phone,
// //       soLuong: 1,
// //     });
// //   } else {
// //     // B2.2.2: nếu đã có trong giỏ hàng thì tăng số lượng lên 1
// //     phoneTrongGioHang.soLuong += 1;
// //   }

// //   console.log(state.gioHang);
// //   // B3: cập nhật lại số lượng sản phẩm trong giỏ hàng hiển thị ở badge trên nút giỏ hàng
// //   // => nên viết hàm xử lý riêng để cập nhật số lượng sản phẩm trong giỏ hàng hiển thị ở badge
// //   capNhatSoLuongGioHang();
// // };

// window.tangSoLuong = (id) => {
//   const item = gioHang.find((p) => p.id == id);
//   if (!item) {
//     alert(`không tìm thấy sản phẩm`);
//     return;
//   }
//   item.soLuong += 1;
//   capNhatSoLuongGioHang();
//   renderGioHang();
// };
// window.giamSoLuong = (id) => {
//   const item = gioHang.find((p) => p.id == id);
//   if (!item) {
//     alert(`không tìm thấy sản phẩm`);
//     return;
//   }
//   if (item.soLuong === 1) {
//     return;
//   }
//   item.soLuong -= 1;
//   capNhatSoLuongGioHang();
//   renderGioHang();
// };
// window.xoaSP = (phoneId) => {
//   gioHang = gioHang.filter((p) => p.id != phoneId);
//   capNhatSoLuongGioHang();
//   renderGioHang();
// };

// // const capNhatSoLuongGioHang = () => {
// //   const tongSoLuong = gioHang.reduce((tong, item) => tong + item.soLuong, 0);
// //   api.bangeGioHang.textContent = tongSoLuong;
// // };

// // window.showChiTietSP = (phoneId) => {
// //   const phone = danhSachSP.find((p) => p.id == phoneId);
// //   if (!phone) {
// //     alert(`không tìm thấy sản phẩm`);
// //     return;
// //   }

// //   api.popupContent.innerHTML = `
// //         <div class="grid md:grid-cols-2 gap-8">
// //             <div class="bg-gray-50 rounded-2xl p-6 flex items-center justify-center">
// //                 <img src="${phone.img}" class="w-full h-64 object-contain">
// //             </div>
// //             <div>
// //                 <span class="text-blue-600 font-bold uppercase tracking-widest text-xs">${phone.type}</span>
// //                 <h2 class="text-3xl font-black text-gray-800 mb-2 mt-1">${phone.name}</h2>
// //                 <p class="text-2xl font-bold text-gray-900 mb-6">${Number(phone.price).toLocaleString()}đ</p>
// //                 <div class="space-y-3 mb-8">
// //                     <div class="flex justify-between text-sm"><span class="text-gray-400 font-medium">Màn hình:</span><span class="font-bold text-gray-700">${phone.screen}</span></div>
// //                     <div class="flex justify-between text-sm"><span class="text-gray-400 font-medium">Camera:</span><span class="font-bold text-gray-700">${phone.backCamera} / ${phone.frontCamera}</span></div>
// //                     <p class="text-gray-500 text-sm pt-4 border-t">${phone.desc}</p>
// //                 </div>
// //                 <button onclick="themVaoGioHang('${phone.id}')" class="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg
// //                  shadow-blue-200 active:scale-95 transition-all">Thêm Vào Giỏ Hàng</button>
// //             </div>
// //         </div>
// //     `;
// //   api.popupChiTiet.classList.remove("hidden");
// // };

// // ================== SEARCH & FILTER ==================
// const filterSP = () => {
//   const keyword = api.searchInput.value.toLowerCase().trim();
//   const type = api.filterSelect.value;
//   let ketQua = danhSachSP.filter((p) => {
//     const matchKeyword =
//       p.name.toLowerCase().includes(keyword) ||
//       p.desc.toLowerCase().includes(keyword);
//     const matchType =
//       type === "" || p.type.toLowerCase() === type.toLowerCase();
//     return matchKeyword && matchType;
//   });
//   renderDanhSachSP(ketQua);
// };

// // ================== EVENTS ==================
// api.searchInput.addEventListener("input", () => {
//   clearTimeout(timerId);
//   timerId = setTimeout(filterSP, 500);
// });
// // api.filterSelect.addEventListener("change", filterSP);
// api.btnGioHang.addEventListener("click", renderGioHang);
// window.closePopupChiTiet = () => api.popupChiTiet.classList.add("hidden");
// window.btnCloseNoiDungGioHang = () => api.popupGioHang.classList.add("hidden");

// layDanhSachSP();
layDanhSachSP();
