// call API
const API_URL = "https://69d4a2b3d396bd74235d4f22.mockapi.io/api";
// gọi DOM
const api = {
  btnGioHang: document.getElementById("btnGioHang"),
  bangeGioHang: document.getElementById("bangeGioHang"),
  searchInput: document.getElementById("searchInput"),
  filterSelect: document.getElementById("filterSelect"),
  loading: document.getElementById("loading"),
  danhSachSP: document.getElementById("danhSachSP"),
  popupChiTiet: document.getElementById("popupChiTiet"),
  overlayXemChiTiet: document.getElementById("overlayXemChiTiet"),
  btnCloseXemChiTiet: document.getElementById("btnCloseXemChiTiet"),
  popupContent: document.getElementById("popupContent"),
  popupGioHang: document.getElementById("popupGioHang"),
  overlayGioHang: document.getElementById("overlayGioHang"),
  btnCloseGioHang: document.getElementById("btnCloseGioHang"),
  noiDungGioHang: document.getElementById("noiDungGioHang"),
};

// ================== STATE ==================
let gioHang = [];
let danhSachSP = [];
let timerId = null;
// ================== UI RENDER ==================
const renderDanhSachSP = (danhSach) => {
  api.danhSachSP.innerHTML = "";
  // kiểm tra nếu danh sách rỗng thì hiển thị thông báo
  if (danhSach.length === 0) {
    api.danhSachSP.innerHTML = ` <p class="text-gray-500 text-center"> Không tìm thấy sản phẩm nào</p>`;
    return;
  }
  const content = danhSach.map((phone) => {
    return `  <div class="bg-white rounded-lg shadow hover:shadow-lg p-5">
                    <img src=${phone.img} alt=${phone.name} class="w-full h-48 object-contain mb-3">
                    <h3>${phone.name}</h3>
                    <p>${phone.desc}</p>
                    <p>${phone.price} VND</p>
                    <span>${phone.type}</span>

                    <div class="flex gap-2 mt-auto">
                        <button
                            class="flex-1 bg-gray-200 px-3 py-2 rounded"
                            onclick="showChiTietSP(${phone.id})"
                        >Xem chi tiết</button>
                        <button onclick="themVaoGioHang(${phone.id})"
                         class="flex-1 bg-blue-500 text-white px-3 py-2 rounded">Thêm vào giỏ</button>
                    </div>
                </div>    `;
  });
  api.danhSachSP.innerHTML = content.join("");
};
const renderGioHang = () => {
  if (gioHang.length === 0) {
    api.noiDungGioHang.classList.innerHTML = `<p class = "text-center text-gray-600">Giỏ Hàng Trống</p>`;
    api.popupGioHang.classList.remove("hidden");
    return;
  }
  const html = gioHang.map((item) => {
    return ` <div
            class="flex items-center gap-4 py-4 px-3 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
          >
            <div class="w-20 h-20 flex-shrink-0 bg-gray-100 rounded-lg p-1">
              <img
                src=${item.img}
                alt=${item.name}
                class="w-full h-full object-contain mix-blend-multiply"
              />
            </div>

            <div class="flex-1 min-w-0">
              <h3 class="font-semibold text-gray-800 truncate">
               ${item.name}
              </h3>
              <p class="text-blue-600 font-medium text-sm">
               ${item.price.toLocaleString()}<span class="underline">đ</span>
              </p>
            </div>

            <div
              class="flex items-center border border-gray-200 rounded-full px-1 py-1 shadow-sm bg-white"
            >
              <button
                class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors text-gray-600"
              >
                -
              </button>
              <span class="w-10 text-center font-semibold text-sm text-gray-700"
                >${item.soLuong}</span
              >
              <button
                class="w-7 h-7 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
              >
                +
              </button>
            </div>

            <div class="w-32 text-right">
              <p class="font-bold text-gray-900">
               ${(item.price * item.soLuong).toLocaleString()} <span class="text-xs uppercase">vnd</span>
              </p>
            </div>

            <button
              class="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all ml-2"
            >
              Xóa
            </button>
          </div>`;
  });
  api.noiDungGioHang.innerHTML = html.join("");
  api.popupGioHang.classList.remove("hidden");
};
// ================== LOGIC ==================
const filterSP = () => {
  const keyword = api.searchInput.value.toLowerCase().trim();
  const type = api.filterSelect.value;
  let ketQua = [...danhSachSP];
  if (keyword) {
    ketQua = ketQua.filter((phone) => {
      const phoneName = phone.name.toLowerCase();
      const phoneDesc = phone.desc.toLowerCase();
      // includes: tìm kiếm đối tượng, nếu đúng trả về true
      return phoneName.includes(keyword) || phoneDesc.includes(keyword);
    });
  }
  if (type !== "") {
    ketQua = ketQua.filter((phone) => {
      return phone.type.toLowerCase() === type.toLowerCase();
    });
  }
  renderDanhSachSP(ketQua);
};
const debounce = () => {
  clearTimeout(timerId);
  timerId = setTimeout(filterSP, 1000);
};
const showChiTietSP = (phoneId) => {
  const phone = danhSachSP.find((sp) => Number(sp.id) === Number(phoneId));
  if (!phone) {
    alert(`không tìm thấy sản phẩm`);
    return;
  }
  api.popupContent.innerHTML = ` <img
            src=${phone.img}
            alt=${phone.name}
            class="w-full h-64 object-contain mb-5"
        >
        <h2 class="text-2xl font-bold mb-2">${phone.name}</h2>
        <p class="text-blue-600 font-bold text-2xl mb-4">${phone.price.toLocaleString()} VND</p>
        <div class="bg-gray-50 rounded-xl p-4 mb-6">
            <table class="w-full text-sm">
                <tbody class="divide-y divide-gray-200">
                    <tr>
                        <td class="py-3 text-gray-500 font-medium w-1/3">Loại</td>
                        <td class="py-3 text-gray-800 font-semibold text-right">${phone.type}</td>
                    </tr>
                    <tr>
                        <td class="py-3 text-gray-500 font-medium">Màn hình</td>
                        <td class="py-3 text-gray-800 font-semibold text-right">${phone.screen}</td>
                    </tr>
                    <tr>
                        <td class="py-3 text-gray-500 font-medium">Camera trước</td>
                        <td class="py-3 text-gray-800 font-semibold text-right">${phone.frontCamera}</td>
                    </tr>
                    <tr>
                        <td class="py-3 text-gray-500 font-medium">Camera sau</td>
                        <td class="py-3 text-gray-800 font-semibold text-right">${phone.backCamera}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p class="mb-4">${phone.desc}</p>
        <button onclick="themVaoGioHang(${phone.id})" 
        class="bg-blue-500 text-white px-4 py-2 rounded">Thêm vào giỏ</button>`;
  api.popupChiTiet.classList.remove("hidden");
};
// thêm vào giỏ hàng
const themVaoGioHang = (phoneId) => {
  const phone = danhSachSP.find((p) => Number(p.id) === Number(phoneId));
  if (!phone) {
    alert(`không tìm thấy sản phẩm`);
    return;
  }
  const trongGioHang = gioHang.find((item) => item.id == phoneId);
  if (!trongGioHang) {
    gioHang.push({
      ...phone,
      soLuong: 1,
    });
  } else {
    trongGioHang.soLuong += 1;
  }
  console.log(gioHang);
  capNhatSoLuongGioHang();
};
const capNhatSoLuongGioHang = () => {
  const tongSoLuong = gioHang.reduce((tong, item) => tong + item.soLuong, 0);
  api.bangeGioHang.textContent = tongSoLuong;
};
// ================== POPUP close ==================
// xem chi tiết
const closePopupChiTiet = () => {
  api.popupChiTiet.classList.add("hidden");
};
api.overlayXemChiTiet.addEventListener("click", closePopupChiTiet);
//
// của giỏ hàng
// const closePopupGioHang = () => {
//   api.popupGioHang.classList.add("hidden");
// };
// api.overlayGioHang.addEventListener("click", closePopupGioHang);
const btnCloseNoiDungGioHang = () => {
  api.popupGioHang.classList.add("hidden");
};
api.overlayGioHang.addEventListener("click", btnCloseNoiDungGioHang);
// ================== API ==================
const layDanhSachSP = async () => {
  api.loading.classList.remove("hidden");

  try {
    const res = await axios.get(API_URL);
    danhSachSP = res.data;
    renderDanhSachSP(danhSachSP);
  } catch {
    api.danhSachSP.innerHTML = `<p>Lỗi tải dữ liệu</p>`;
  }

  api.loading.classList.add("hidden");
};
// ================== EVENTS ==================
api.searchInput.addEventListener("input", debounce);
api.filterSelect.addEventListener("change", filterSP);
// api.overlayXemChiTiet.addEventListener("click", closePopupChiTiet);
api.btnGioHang.addEventListener("click", renderGioHang);

// ================== START ==================
layDanhSachSP();
