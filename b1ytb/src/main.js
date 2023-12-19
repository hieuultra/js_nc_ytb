const menuList = ["menu 1", "menu 2", "menu 3"];

//b1: Selector: querySelector(),getElementById()
//b2: loop: for, for..in, foreach,for..in, for..of,map()
//b3:show:innerHTML

const menuElement = document.querySelector("#menu");

// if (menuElement) {
//   //for: most speeding
//   for (let i = 0; i < menuList.length; i++) {
//     menuElement.innerHTML += `<li>${menuList[i]}</li>`;
//   }
//   //for in
//   //moi phan tu tra ve index
//   for (let i in menuList) {
//     // console.log(i);
//     menuElement.innerHTML += `<li>${menuList[i]}</li>`;
//   }
//   //for of
//   //moi phan tu tra ve la 1 gia tri
//   for (let item of menuList) {
//     // console.log(item);
//     menuElement.innerHTML += `<li>${item}</li>`;
//   }

//   //foreach
//   // co the tra ve ca index hoac value
//   menuList.forEach(function (item, index) {
//     // console.log("value",item);
//     // console.log("index",index);
//     menuElement.innerHTML += `<li id=${index}>${item}</li>`;
//   });
//   // method map
//   //giu nguyen array cu va tao ra array moi
//   const result = menuList
//     .map(function (item) {
//       return `<li>${item}</li>`;
//     })
//     .join("");
//   // console.log(result);
//   menuElement.innerHTML = result; //vi no la string nen co dau phau dang truoc =>.join(""):noi chuoi
// }

//=======================
const productList = [
  {
    id: 1,
    name: "product A",
    price: 200,
    img: "https://th.bing.com/th/id/OIP.O5nRaRaHbItc1JMYxOMAIgHaEL?w=328&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  }, // moi phan tu gan cho 1 bien product
  {
    id: 2,
    name: "product B",
    price: 200,
    img: "https://th.bing.com/th/id/OIP.O5nRaRaHbItc1JMYxOMAIgHaEL?w=328&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  }, //product
  {
    id: 3,
    name: "product C",
    price: 200,
    img: "https://th.bing.com/th/id/OIP.O5nRaRaHbItc1JMYxOMAIgHaEL?w=328&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  }, //product
];
// const product = {
//   name: "product A",
// };
// console.log(product["name"]);
// console.log(product.name);
//selector
const productElement = document.querySelector("#products");
//neu element ton tai
// if (productElement) {
//   //tao ra mang moi va gan vao bien result
//   const result = productList
//     .map(function (product) {
//       return `<div class="border p-4 rounded shadow">
//       <img
//         src="${product.img}"
//         alt=""
//       />
//       <h3><a href="" class="font-bold block my-3">${product.name}</a></h3>
//       <span class="text-red-500">${product.price}</span>
//     </div>`;
//     })
//     .join("");
//   //hien thi ra ngoai man hinh
//   productElement.innerHTML = result;
// }

//====================
//to chuc lai code
const state = {
  products: [],
};
const getProduct = () => {
  state.products = productList;
};
//xoa
window.removeProduct = (id) => {
  state.products = productList.filter((item) => item.id !== id);
  render();
};
const template = (s) =>
  s.products
    .map(
      (product) =>
        `<div class="border p-4 rounded shadow">
      <img
        src="${product.img}"
        alt=""
      />
      <h3><a href="" class="font-bold block my-3">${product.name}</a></h3>
      <span class="text-red-500">${product.price}</span>
      <button onclick="removeProduct(${product.id})">Delete</button>
    </div>`
    )
    .join("");

const render = () => {
  getProduct();
  productElement.innerHTML = template(state);
};
render();

//function name
function sum(a, b) {
  return a + b;
}
console.log("function delcaration", sum(3, 4));

//function expression
const sum2 = function (a, b) {
  return a + b;
};
console.log("function expression", sum2(3, 5));

//arrow function: cu phap viet tat cua function expression
const sum3 = (a, b) => a + b;
console.log("arrow function", sum3(3, 5));
