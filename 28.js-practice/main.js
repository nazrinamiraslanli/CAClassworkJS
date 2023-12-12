// TASK 1

const employees = [
  { name: "Jamil", salary: 1500, department: "IT" },
  { name: "Jale", salary: 5000, department: "HR" },
  { name: "Bayram", salary: 24000, department: "IT" },
  { name: "Sahil", salary: 6000, department: "HR" },
  { name: "Maryam", salary: 18000, department: "IT" },
  { name: "Elnara", salary: 20000, department: "HR" },
  { name: "Davud", salary: 14000, department: "IT" },
];

// #ortalama maaşı 20000-dən çox olan departamentləri çapa verən program tərtib edin.
// let arr = [];
// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].salary>20000) {
//     arr.push(employees[i].department);
//   }
// }
// console.log(arr);
// #ortalama maaşı 10000-dən çox olan və departamenti "IT" olanları çapa verən program tərtib edin.
// let arr = [];
// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].salary>10000&&employees[i].department.toLocaleLowerCase()==="it") {
//     arr.push(employees[i]);
//   }
// }
// console.log(arr);
// #sadecə department "HR" olanları yeni array'a yığıb, həmin arrayı console edin
// let arr = [];
// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].department.toLocaleLowerCase() === "hr") {
//     arr.push(employees[i]);
//   }
// }
// console.log(arr);

// TASK 2

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   city: "Ganja",
//   website: "code.edu.az",
//   languageInfo: {
//     eng: "Advance",
//     aze: "Fluenty",
//     rus: "Intermediate",
//   },
// };

// person adlı object-dən firstName-i, languageInfo-dan eng və rus property-ni destructing edin, əlavə olaraq
// let { firstName, languageInfo: {eng, rus} } = person;

// console.log(eng); // "Advance"

// personda yerdə qalan bütün property-ləri otherInfo adı altında rest operatoru ilə bir dəyişənə çıxarın.
// let{firstName,languageInfo,...otherInfo}=person
// console.log(otherInfo); // {lastName: 'Doe', city: 'Ganja', website: 'code.edu.az'}

// TASK 3

const person = {
  firstName: "Michael",
  lastName: "Pam",
  age: "26",
  city: "Poland",
};

// 1. employees object-nin sadəcə key-lərini console-a çıxardın.
// console.log(Object.keys(person));
// 2. employees object-nin sadəcə value-lərini console-a çıxardın.
// console.log(Object.values(person));
// 3. Aşağıdakı kimi console-a çıxardın.
// [firstName: 'Michael']
// [lastName: 'Pam']
// [age:26]
// [city: 'Poland']
// const entries = Object.entries(person);
// console.log(entries);
// 4. object-in age propertysini silin.
// delete person.age;
// let json = JSON.stringify(person);
// console.log(json);
// 5. Ən uzun string value-nu console-a çıxardın.
let arr = Object.values(person);
var longest = arr.reduce(function(a, b) {
  return a.length > b.length ? a : b
}, '');
console.log(longest);
// TASK 4

const text = "Java is awesome. Java is fun.";

// text dəyişəndə Java sözünün əvəzinə Javascript yazdırın
// ====>> JavaScript is awesome. Javascript is fun.
// let newText = text.replaceAll("Java", "Javascript");
// console.log(newText);

// TASK 5

// Sözün palindrom olub olmadığını yoxlayın.

function isPalindrome(string) {
    if(string===string.split("").reverse().join("")){
        console.log("is palindrom")
    }else{
        console.log("is not polidrom")
    }
}
isPalindrome("hello");

// TASK 6

// Ən uzun sözü tapın.  ======>> programmers
function longestWord(elem){
  let arr=elem.split("").sort((a,b)=>{
    return b.length-a.length
  })
  return arr[0]
}
console.log(longestWord("Hello word hi programmers"));

// TASK 7

const persons = [
  { name: "Akif", age: 25 },
  { name: "Aysu", age: 32 },
  { name: "Ali", age: 35 },
];

// find metodu vasitəsilə array-in içindəki, yaşı 30-dan yuxarı olan ilk şəxsi "firstPerson" adlı dəyişkənə
// mənimsədib console-a çıxardın. ====> { name: 'Aysu', age: 32 }

// ------------------------------ part II

// tapdığınız objectin index-ni də ikinci bir console-da çıxardın.(metod ilə)
