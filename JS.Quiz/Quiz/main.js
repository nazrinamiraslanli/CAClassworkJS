// 1) Verilmiş ədədin bölənlərinin sayını tapan funksiya tərtib edin.

function findNumberOfDivisors(n) {
  let c = 0;
  for (let i = 0; i < n; i++) {
    if (n % i == 0) {
      c++;
    }
  }
  return c;
}
console.log(findNumberOfDivisors(6));

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }
// findNumberOfDivisors(6); // 4
// findNumberOfDivisors(9); // 3

// 2) 1-100 arası tək ədədləri console'a yazan proqram tərtib edin

for (let i = 0; i < 100; i++) {
  if (i % 2 == 1) console.log(i);
}

// 3) sampleNews  mətnində olan boşluqların sayını təyin edən proqram yazın

let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`;

const numbers = [3, 7, 2, 19, 13];

// 4) Array-in bütün elementlərini kvadrata yüksəldib yeni array qaytaran proqram yazın.
let a2 = numbers.map((num)=> {
  return num ** 2;
});

// console.log(a2)
// 5) Array elementlərinin cəmini tapın
const products = [
  {
    id: 1,
    title: "Smartphone",
    description: "A high-end smartphone with the latest features.",
    price: 799.99,
  },
  {
    id: 2,
    title: "Laptop",
    description: "Powerful laptop with a large screen and fast processor.",
    price: 1299.99,
  },
  {
    id: 3,
    title: "Coffee Maker",
    description: "An automatic coffee maker with a built-in grinder.",
    price: 99.99,
  },
  {
    id: 4,
    title: "Headphones",
    description: "Wireless over-ear headphones with noise-cancellation.",
    price: 199.99,
  },
  {
    id: 5,
    title: "Smart TV",
    description: "55-inch 4K Smart TV with streaming apps built-in.",
    price: 699.99,
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description:
      "Track your steps, heart rate, and more with this fitness tracker.",
    price: 49.99,
  },
  {
    id: 7,
    title: "Digital Camera",
    description: "High-resolution digital camera with various lenses.",
    price: 799.99,
  },
  {
    id: 8,
    title: "Wireless Keyboard and Mouse",
    description: "Ergonomic keyboard and mouse combo for your workstation.",
    price: 39.99,
  },
  {
    id: 9,
    title: "Microwave Oven",
    description: "Compact microwave oven for quick and easy cooking.",
    price: 69.99,
  },
  {
    id: 10,
    title: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with rich, clear sound.",
    price: 49.99,
  },
  {
    id: 11,
    title: "Coffee Table",
    description: "Modern coffee table with storage and a glass top.",
    price: 149.99,
  },
];

// 5) products arrayını price'a görə artan və azalan sıra ilə düzün
// let arr = newArray;

// 7) products arrayını title'a görə a'dan z'yə və z'dən a'ya düzün

// 8) price'ı 500'dən çox olan productları tapın (array şəklində)
let arr = [];
products.forEach((element) => {
  if (element.price > 500) {
    arr.push(element);
  }
});
console.log(arr);

// 9) id'si 9 olan elementi arraydan silin
// products.splice(8,1)
// console.log(products)

// 10) price cəmini, və ortalamasını tapın
let sum = 0;
products.forEach((element) => {
  sum += element.price;
  console.log("sum", sum);
});

console.log(sum / products.length);
// BONUS;

// 11) verilmiş iki stringin eyni hərflərdən təşskil olunub olunmadığını müəyyən edən funksiya yazın

// function isStringsArrangedSameLetters(a, b) {
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (a[i] === b[j]) {
//         console.log("yes");
//       } else {
//         console.log("no");
//       }
//     }
//   }
// }

// isStringsArrangedSameLetters("fired", "fried"); //no
// isStringsArrangedSameLetters("listen", "silent"); // yes
// isStringsArrangedSameLetters("hello", "hi"); // no
