let arr = new Array();
let itCompanies = [
  "Facebook",
  "Google",
  "Microsaoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies.length)
for(let i=0; i<itCompanies.length; i++){
    console.log(itCompanies[i]);
}
console.log(itCompanies[0])
console.log(itCompanies[parseInt(itCompanies.length/2)])
console.log(itCompanies[itCompanies.length-1])


let arra = [];
for(let i=0; i< itCompanies.length;i++){
//    console.log( itCompanies[i].toLocaleUpperCase());
   arra.push( itCompanies[i].toLocaleUpperCase())
}
console.log(arra)
