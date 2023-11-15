let person = {
  firstName: "Nazrin",
  lastName: "Amiraslanli",
  age: 20,
  country: "Azerbaijan",
  university: "GDU",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: false,
};
person["phone number"] = 11223344;
person.city = "Ganja";
// console.log(person);
// 1
// console.log(Object.keys(person));
// 2
// console.log(Object.values(person));
// 3
// console.log(Object.entries(person));
// 4
let valuess = Object.values(person);
let resulte = valuess[0];
for (let i = 1; i < valuess.length; i++) {
  if (resulte.length < valuess[i].length) {
    resulte = valuess[i];
  }
}
// console.log(resulte);
// 5
delete person.age;
// console.log(person);
// Task2
// 1
let library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    readingStatus: true,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    readingStatus: true,
  },
  {
    title: "Suzanne Collins",
    author: "Mockingjay: The Final Book",
    readingStatus: false,
  },
];

library.forEach(item => {
    if(item.readingStatus===true){
        console.log(`Already read ${item.title} by ${item.author}`)
    }else {
        console.log(`You still need to read ${item.title} by ${item.author}`)
    }
    
});
