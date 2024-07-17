function findStudentIndex(students, searchStudent) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let left = 0;
  let right = students.length - 1;
  let index = -1;
  while (left <= right) {
    let min = Math.floor((right + left) / 2);
    // console.log(min);
    if (students[min] < searchStudent) {
      left = min + 1;
    } else if (students[min] > searchStudent) {
      right = min - 1;
    } else {
      index = min;
      break;
    }
  }
  return index;
}

// ตอบคำถามตรงนี้จ้า
students = [
  "Andrew",
  "Bobby",
  "Diana",
  "George",
  "Hannah",
  "Isaac",
  "Jasmine",
  "John",
];
console.log(findStudentIndex(students, "Isaac"));

// Big O = O(log n) เพราะชุกข้อมูลมีการเรียงลำดับ สามารถใช้ binary search
