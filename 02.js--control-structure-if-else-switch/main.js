// Task1
let temperature = 45

if( temperature >= 22 ) {
    console.log(`Nazik geyin`)
}else if( temperature >= 15) {
    console.log(`Pencek geyin`)
} else{
    console.log(`Qalin geyin`)
}
// Task2
let herf = `s`
if( herf === `a` || herf === "o" || herf === "e" ){
    console.log(`Sait`)
}else{
    console.log(`Samit`)
}
// Task3
let a = 40
let b = 32
let c = 12

if(a>b && a>c){
    console.log(`${a} is greater`)
} else if(b>a && b>c){
    console.log(`${b} is greater`)
} else{
    console.log(`${c} is greater`)
}
// Task4
let grade = 95  

if(grade >=91){
    console.log(`Exam grade: A`)
}else if(grade >= 81){
    console.log(`Exam grade: B`)
}else if(grade >= 71){
    console.log(`Exam grade: C`)
}else if(grade >= 61){
    console.log(`Exam grade: D`)
}else if(grade >= 51){
    console.log(`Exam grade: F`)
}else{
    console.log(`Kesilibsen`)
}
// Task5
let firstName = `Sharife`
console.log(firstName.length)
if(firstName.length <= 5){
    console.log(`Qisa adiniz var.`)
}else if(firstName.length <= 10){
    console.log(`Orta uzunluqda adiniz var.`)
}else{
    console.log(`Uzun adiniz var.`)
}