// Task 1
function fullName(lastName = "Lorem", firstName = "Impus") {
  return `I am ${lastName} ${firstName}.`;
}
console.log(fullName("Amiraslanli", "Nazrin"));
// Task 2
function sum(num1 = 0, num2 = 0) {
  let sum = num1 + num2;
  return sum;
}
function multiply(num1 = 0, num2 = 0) {
  let multiply = num1 * num2;
  return multiply;
}
function subtruct(num1 = 0, num2 = 0) {
  let subtruct = num1 - num2;
  return subtruct;
}
function divide(num1 = 0, num2 = 0) {
  let divide = num1 / num2;
  return divide;
}

console.log(sum(2, 3));
console.log(multiply(2, 3));
console.log(subtruct(2, 3));
console.log(divide(2, 3));

// Task 3
function calculate(num1 = 0, num2 = 0, operator) {
  if (operator === "+") {
    let sum = num1 + num2;
    return sum;
  } else if (operator === "-") {
    let subtruct = num1 - num2;
    return subtruct;
  } else if (operator === "*") {
    let multiply = num1 * num2;
    return multiply;
  } else if (operator === "/") {
    let divide = num1 / num2;
    return divide;
  } else {
    console.log(`Bele emel yoxdur.`);
  }
}
console.log(calculate(2, 3, "+"));
console.log(calculate(2, 3, "-"));
console.log(calculate(2, 3, "*"));
console.log(calculate(2, 3, "/"));
// Task 4
const employees = [
  { name: "Jamil", salary: 50000, department: "IT" },
  { name: "Jale", salary: 60000, department: "HR" },
  { name: "Bayram", salary: 55000, department: "IT" },
  { name: "Sahil", salary: 75000, department: "HR" },
  { name: "Maryam", salary: 65000, department: "IT" },
  { name: "Elnara", salary: 80000, department: "HR" },
  { name: "Davud", salary: 70000, department: "IT" },
];
function filterEmployees(arr) {
  let empity = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].salary > 60000) {
      empity.push(arr[i]);
    }
  }
  return empity;
}
console.log(filterEmployees(employees));
// Task 5
function reverseString(string) {
  let str = "";
  for (i = string.length - 1; i >= 0; i--) {
    str += string[i];
  }
  return str;
}
console.log(reverseString(`hello`));
// Task 6
let str =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna aliqua.";
function alfhabet(arra){
    let alfa =0;
    for(let i=0;i<arra.length; i++){
        if(arra[i]!=" "&& arra[i]!=","&& arra[i]!="."){
            alfa=alfa+1;

        }
        
    }return alfa;

}
console.log(alfhabet(str));
