// Task 1 Part 1
const number = [1, 2, 3, 4, 5, 6, 7, 8];
let nums = number.filter((item, i) => item % 2 == 1);
console.log(nums);
// Task 1 Part 2
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let num = array.filter((item, i) => item > 0 && item <= 10);
console.log(num);
// Task 2
const users = [
  {
    first_name: "Mike",
    last_name: "Sheridan",
  },
  {
    first_name: "Tim",
    last_name: "Lee",
  },
  {
    first_name: "John",
    last_name: "Carte",
  },
];
let usersname = users.map((user, i) => {
  return `${user.first_name} ${user.last_name}`;
});
console.log(usersname);
// Task 3 Part 1
const persons = [
  { name: "Akif", age: 25 },
  { name: "Aysu", age: 32 },
  { name: "Ali", age: 35 },
];
let firstperson = persons.find((item, i) => {
  console.log(i);
  return item.age > 30;
});
console.log(firstperson);
// Task 3 Part 2
// Task 4
const array1 = [1, 4, 9, 16];
let array2 = array1.map((item) => {
  return item ** 2;
});
console.log(array2);
// Task 5
const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice(2));
console.log(animals.slice(2, 5));
console.log(animals.slice(1));
console.log(animals.slice(3));
console.log(animals.slice(2, 4));
console.log(animals.slice());
// Task 6
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
console.log(months);
months.splice(4, 0, "May");
console.log(months);
// Task 7
const company = [
  { firstName: "John", lastName: "Doe", salary: 50000, yearsWorked: 5 },
  { firstName: "Alice", lastName: "Johnson", salary: 60000, yearsWorked: 8 },
  { firstName: "Bob", lastName: "Smith", salary: 75000, yearsWorked: 3 },
  { firstName: "Eve", lastName: "Williams", salary: 55000, yearsWorked: 7 },
];
console.log(`${company.firstName}${company.lastName}illik${company.salary}maas alir`)