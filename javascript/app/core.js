// core flow:
// endpoint API
// element DOM

// state (data)
// trạng thái hiện tại của ứng dụng, có thể thay đổi theo thời gian
// khi người dùng tương tác với ứng dụng
// VD: giỏ hàng (tăng, giảm, xóa sản phầm), sản phẩm (thêm, sửa, xóa),...
// danhSachSP, gioHang, timeId,...
// state: boolean, number, string, array, object,...

// ES6: import, export
// default các biến, hàm, class => private, tức là nội bộ trong file .js dùng
// được, không thể truy cập từ file khác => export để biến, hàm, class có thể truy cập được

export const API_URL =
  "https://69ca679fba5984c44bf31927.mockapi.io/api/v1/phone";
export const api = {
  btnGioHang: document.getElementById("btnGioHang"),
  bangeGioHang: document.getElementById("bangeGioHang"),
  searchInput: document.getElementById("searchInput"),
  filterSelect: document.getElementById("filterSelect"),
  loading: document.getElementById("loading"),
  danhSachSP: document.getElementById("danhSachSP"),
  popupChiTiet: document.getElementById("popupChiTiet"),
  popupContent: document.getElementById("popupContent"),
  popupGioHang: document.getElementById("popupGioHang"),
  noiDungGioHang: document.getElementById("noiDungGioHang"),
  tongTien: document.getElementById("tongTien"),
  btnClose: document.getElementById("btnClose"),
  overlayXemChiTiet: document.getElementById("overlayXemChiTiet"),
  overlayGioHang: document.getElementById("overlayGioHang"),
};
export const state = {
  gioHang: [],
  danhSachSP: [],
  timerId: null,
};
