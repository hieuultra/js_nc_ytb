// var lang = ["vietnamese", "chinase", "japanese"];
// console.log(lang);
// var str = lang.toString();
// console.log(str);
// var str2= lang.join(' ');
// console.log(str2);

var arr = [11, 12, 21, 23, 33];
//filter:duyet va tim kiem value
var arr2 = arr.filter(function (value) {
  //   return value > 15 && value < 32;
  return value % 3 == 0;
});
// console.log(arr2);
var arr3 = [15, 75, 69, 96, 95, 125];
// var arr4 = arr3.filter(function (value) {
//   return (value % 3 == 0 && value % 5 == 0);
// });
var arr4 = arr3.filter((value) => value % 3 == 0 && value % 5 == 0);
// console.log(arr4);

var arr5 = [1, 2, 3, 4, 5];
// arr5.splice(2, 0, 15, 16);
// console.log(arr5);

var arr6 = ["fpoly", "fu", "fschool", "fu", "thschool", "fu"];
var arr7 = arr6.filter(function (value) {
  return value !== "fu";
});
// console.log(arr7);
//neu dung splice de xoa thi phai dung for lui(i--)
for (var i = arr6.length - 1; i >= 0; i--) {
  if (arr6[i] === "fu") {
    arr6.splice(i, 1);
  }
}
// console.log(arr6);

var mang = ["fpoly", "fu", "fschool", "fu", "thschool", "fu"];
var indices = [];
mang.forEach(function (value, index) {
  if (value === "fu") {
    indices.push(index);
  }
});
console.log(indices);
