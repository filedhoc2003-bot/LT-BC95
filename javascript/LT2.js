const phim = [
  { name: "A", type: "Action", rating: 7 },
  { name: "B", type: "Action", rating: 9 },
  { name: "C", type: "Animation", rating: 8.5 },
  { name: "D", type: "Animation", rating: 6 },
  { name: "E", type: "Adventure", rating: 8 },
];
// phim >=8
const rating8 = phim.filter((p) => p.rating >= 8);
console.log(rating8);
// tổng all phim
// let sum = 0;
const tongPhim = phim.reduce((sum, p) => {
  return sum + 1;
}, 0);
console.log(tongPhim);
// tổng rating
let sum1 = 0;
const tongRating = phim.reduce((sum1, p) => {
  return sum1 + p.rating;
}, 0);
console.log(tongRating);
// rating max
let max = 0;
const maxRating = phim.forEach((p) => {
  if (p.rating > max) {
    max = p.rating;
  }
  return max;
});
const maxRating1 = phim.filter((p) => p.rating === max);
console.log(maxRating1);
// cách gọn hơn
const max1 = Math.min(...phim.map((p) => p.rating)); // chỉ cần thay min max thôi là tìm lớn nhỏ
const maxRating2 = phim.filter((p) => p.rating === max1);
console.log(maxRating2);
// đếm số phim action
const phimAction = phim.filter((p) => p.type === "Action").length;
console.log(phimAction);
// lấy tên phim thôi
const namePhim = phim.map((p) => p.name);
console.log(namePhim);
// lấy phim type Animation >= 7
const animation7 = phim.filter((p) => p.type === "Animation" && p.rating >= 7);
console.log(animation7);
// đếm số lượng phim theo type
const typePhim = phim.filter((p) => p.type).length;
console.log(typePhim);
// lấy điểm cao nhất của từng type
const result1 = Object.values(
  phim.reduce((acc, p) => {
    const { type, rating } = p;
    if (!acc[type] || acc[type].rating < rating) acc[type] = p;
    return acc;
  }, {}),
);
console.log(result1);
