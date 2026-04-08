// data bẩn cty hay sài
const movies = [
  { id: 1, title: "A", type: "Action", rating: "8.5", views: 1000 },
  { id: 2, title: "B", type: "action", rating: 9, views: 2000 },
  { id: 3, title: "C", type: "Action ", rating: null, views: 1500 },
  { id: 4, title: "D", type: "Animation", rating: 8.8, views: 800 },
  { id: 5, title: "E", type: "Animation", rating: "9.1", views: 1200 },
  { id: 6, title: "F", type: "Animation", rating: "10", views: 500 },
  { id: 7, title: "G", type: "Adventure", rating: 9.5, views: 3000 },
  { id: 8, title: "H", type: "Adventure", rating: "invalid", views: 100 },
  { id: 9, title: "I", type: null, rating: 7, views: 400 },
];

// cách cty làm
// function getTopMoviesByType(movies) {
//   const grouped = {};

//   for (const movie of movies) {
//     // 1. Clean data
//     const type = movie.type?.trim()?.toLowerCase();
//     const rating = Number(movie.rating);

//     // 2. Validate
//     if (!type || isNaN(rating)) continue;

//     // 3. Filter
//     if (rating < 7) continue;

//     // 4. Group
//     if (!grouped[type]) {
//       grouped[type] = [];
//     }

//     grouped[type].push({
//       ...movie,
//       type,
//       rating,
//     });
//   }

//   // 5. Sort + lấy top 2
//   for (const type in grouped) {
//     grouped[type] = grouped[type]
//       .sort((a, b) => b.rating - a.rating)
//       .slice(0, 2);
//   }

//   return grouped;
// }
// console.log(getTopMoviesByType(movies));

// tự làm
// chuẩn hóa dữ liệu
const cleanData = movies.map((p) => {
  return {
    ...p,
    type: p.type?.toLowerCase().trim() || "Chữa lỗi",
    rating: isNaN(Number(p.rating)) ? 0 : Number(p.rating),
  };
});
console.log(cleanData);
// lấy type action và rating >= 8
const typeActionRating8 = movies.filter(
  (p) => p.type === "action" && p.rating >= 8,
);
console.log(typeActionRating8);
// sữa lại đúng
const typeActionRating81 = movies.filter((p) => {
  const type = p.type?.toLowerCase().trim();
  const rating = Number(p.rating);
  return type === "action" && !isNaN(rating) && rating >= 8;
});
console.log(typeActionRating81);
// sort
const sortPhim = movies
  .map((p) => ({
    ...p,
    rating: isNaN(Number(p.rating)) ? 0 : Number(p.rating),
  }))
  .sort((a, b) => {
    if (b.rating !== a.rating) {
      b.rating - a.rating;
    }
    return b.views - a.views;
  });
console.log(sortPhim);
// cách ngắn và dễ hiểu
const sortPhim1 = movies
  .map((p) => ({
    ...p,
    rating: Number(p.rating) || 0,
  }))
  .sort((a, b) => a.rating - b.rating || a.views - b.views);
console.log(sortPhim1);
// tổng rating từng type
const avgByType = movies.reduce((acc, p) => {
  // ép kiểu về chuẩn
  const type = p.type?.toLowerCase().trim();
  const rating = Number(p.rating);
  if (!type || isNaN(rating)) {
    return acc;
  }
  // init nếu chưa có
  if (!acc[type]) {
    acc[type] = { total: 0 };
  }
  acc[type].total += rating;

  return acc;
}, {});
console.log(avgByType);

//
const getBestMoviesByType = (movies) =>
  movies.reduce((acc, movie) => {
    const type = movie.type?.trim().toLowerCase() || "unknown";
    const rating = isNaN(Number(movie.rating)) ? 0 : Number(movie.rating);

    const best = acc[type];

    if (
      !best ||
      rating > best.rating ||
      (rating === best.rating && movie.views > best.views)
    ) {
      acc[type] = {
        ...movie,
        type,
        rating,
      };
    }

    return acc;
  }, {});

console.log(getBestMoviesByType(movies));

const epKieu = movies.reduce((acc, p) => {
  const type = p.type?.toLowerCase().trim() || "unkonow";
  const rating = Number(p.rating);
});
console.log(epKieu);
