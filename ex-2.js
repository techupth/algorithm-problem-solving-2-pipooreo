function findBookIndex(books, searchTitle) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let left = 0;
  let right = books.length - 1;
  let index = -1;
  while (left <= right) {
    min = Math.floor((right + left) / 2);
    if (books[min].title < searchTitle) {
      left = min + 1;
    } else if (books[min].title > searchTitle) {
      right = min - 1;
    } else {
      index = min;
      break;
    }
  }
  return index;
}
const books = [
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" },
];

console.log(findBookIndex(books, "Gone with the Wind"));
