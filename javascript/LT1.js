const students = [
  { name: "Nguyễn Thành Đạt", age: 24, gender: "Nam", core: 10 },
  { name: "Huỳnh Minh Thư", age: 24, gender: "Nữ", core: 10 },
  { name: "Nguyễn Trường Giang", age: 24, gender: "Nam", core: 7 },
  { name: "Võ Kim Ngân", age: 25, gender: "Nữ", core: 5 },
  { name: "Nguyễn Thị Hồng Hiệp", age: 24, gender: "Nữ", core: 8 },
  { name: "Lê Văn A", age: 22, gender: "Nam", core: 3 },
  { name: "Trần Thị B", age: 23, gender: "Nữ", core: 6.5 },
];
const movies = [
  { name: "Doraemon", genre: "Animation", rating: 8.5 },
  { name: "Pikachu", genre: "Animation", rating: 7.5 },
  { name: "Conan", genre: "Detective", rating: 9.2 },
  { name: "One Piece", genre: "Adventure", rating: 9.5 },
  { name: "Naruto", genre: "Action", rating: 8.8 },
  { name: "Dragon Ball", genre: "Action", rating: 7.9 },
  { name: "Attack on Titan", genre: "Action", rating: 9.6 },
];
// forEach(): output name and core
const outputCore = students.forEach((sv) => {
  if (sv.core >= 5) {
    console.log(sv.name + " " + sv.core);
  }
});
// filter(): lọc ai có điểm >=8
const filterOutput8 = students.filter((sv) => sv.core >= 8);
console.dir(filterOutput8);
// find(): tìm sv tên Võ Kim Ngân
const findVoKimNgan = students.find((sv) => sv.name === "Võ Kim Ngân");
console.log(findVoKimNgan);
// some(): kiểm tra xem có ai bị liệt dưới 4 không
const isSomeDuoi4 = students.some((sv) => sv.core < 4);
console.log(`students có ai dưới điểm liệt không: ${isSomeDuoi4}`);
// map(): kết quả trả về 1 mảng mới
let xepLoai = "";
const newStudents = students.map((sv) => {
  if (sv.core >= 8) {
    xepLoai = "giỏi";
  } else if (sv.core >= 6.5) {
    xepLoai = "Khá";
  } else if (sv.core >= 5) {
    xepLoai = "Trung Bình";
  } else if (sv.core >= 3.5) {
    xepLoai = "Yếu";
  } else {
    xepLoai = "Kém";
  }
  return { ...sv, xepLoai };
});
console.log(newStudents);
// every() kiểm tra tất cả có lớn hơn bằng 5 không
const everyCore = students.every((sv) => sv.core >= 5); // kq = false nếu 2 thì true
console.log(everyCore);
// findIndex() kiểm tra vị trí trong mảng
const findIndexName = students.findIndex(
  (sv) => sv.name === "Nguyễn Trường Giang", // viết luôn dấu nếu ko trả về false: -1
);
console.log(findIndexName);
// lấy map và filter (name, core)
const mapAndFilter = students
  .filter((sv) => {
    return sv.core >= 8;
  })
  .map((sv) => {
    return {
      name: sv.name,
      core: sv.core,
    };
  });

console.log(mapAndFilter);
// reduce() tổng điểm tất cả sinh viên
const tong = students.reduce((sum, sv) => {
  return sum + sv.core;
}, 0);
console.log(`tống điểm sinh viên là: ${tong}`);
// tính trung bình
let sum =
  students.reduce((sum, sv) => {
    return sum + sv.core;
  }, 0) / students.length;
console.log(sum);
// tìm sv có điểm cao nhất
let max = 0;
const maxCore = students.forEach((sv) => {
  if (sv.core > max) {
    max = sv.core;
  }
});
const maxCoreSV = students.filter((sv) => sv.core === max);
console.dir(maxCoreSV);

//Bài 12 – reduce nâng cao

// 👉 Trả về object:

// {
//   gioi: ?,       // >= 8
//   kha: ?,        // 6.5 - <8
//   trungBinh: ?,  // 5 - <6.5
//   yeu: ?         // <5
// }
{
  gioi: 0;
  kha: 0;
  trungBinh: 0;
  yếu: 0;
}
const result = students.reduce(
  (acc, sv) => {
    if (sv.core >= 8) {
      acc.gioi++;
    } else if (sv.core >= 6.5) {
      acc.kha++;
    } else if (sv.core >= 5) {
      acc.trungBinh++;
    } else {
      acc.yeu++;
    }
    return acc;
  },
  {
    gioi: 0,
    kha: 0,
    trungBinh: 0,
    yeu: 0,
  },
);
console.log(result);

//🎬 BONUS (mảng movies)
// Bài 13

// 👉 Lọc phim rating > 8

const filterPhim8 = movies.filter((phim) => phim.rating > 8);
console.log(filterPhim8);

//Bài 14

// 👉 Tìm phim có chữ "on" (không phân biệt hoa thường)
const filterON = movies.filter((phim) =>
  phim.name.toLowerCase().includes("on"),
);
console.log(filterON);
//Bài 15

// 👉 Tìm phim rating cao nhất (reduce)
let max1 = 0;
const checkRatingMax = movies.forEach((phim) => {
  if (phim.rating > max1) {
    max1 = phim.rating;
  }
});
const outputRatingMax = movies.filter((phim) => phim.rating === max1);
console.log(outputRatingMax);

//Bài 16

// 👉 Kiểm tra:

// Có phim nào < 7 không?
const outputRating7 = movies.some((phim) => phim.rating < 7);
console.log(outputRating7);

//Bài 17

// 👉 Kiểm tra:

// Tất cả phim có phải "Action" không?
const checkAllPhim = movies.every((phim) => phim.name === "Action");
console.log(checkAllPhim);
//🔥 SUPER BONUS (pro hơn xíu)
// Bài 18

// 👉 Tính:

// Tổng rating tất cả phim
const tongPhim = movies.reduce((sum1, phim) => {
  return sum1 + phim.rating;
}, 0);
console.log(tongPhim);

//Bài 19

// 👉 Đếm:

// Có bao nhiêu phim "Action"
// cách 1
const demPhimAction = movies.reduce(
  (acc, phim) => {
    if (phim.genre === "Action") {
      acc.count++;
      acc.list.push(phim);
    }
    return acc;
  },
  {
    count: 0,
    list: [],
  },
);
console.log(demPhimAction.count);
console.log(demPhimAction.list);
// cách 2
// const demPhimAction1 = movies.filter((phim) => phim.genre === "Action").length;
// console.log(demPhimAction1);
const list = movies.filter((phim) => phim.genre === "Action");
console.log(list);
//Bài 20 (xịn nhất 💀)

// 👉 Gom dữ liệu:

// {
//   Action: [...],
//   Animation: [...],
//   Adventure: [...]
// }

const gomDataGenre = movies.reduce((acc, phim) => {
  if (!acc[phim.genre]) {
    acc[phim.genre] = [];
  }
  acc[phim.genre].push(phim);
  return acc;
}, {});
console.log(gomDataGenre);

const gomDataRating = movies.reduce((acc, phim) => {
  if (!acc[phim.rating]) {
    acc[phim.rating] = [];
  }
  acc[phim.rating].push(phim);
  return acc;
}, {});
console.log(gomDataRating);
