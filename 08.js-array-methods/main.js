// ----------------------------------------------------- TASK 1 -----------------------------------------------------

// console.log(findFirstNotRepeatedChar('abacddbecz'));

// findFirstNotRepeatedChar adlı bir function yaradın. Bu function göndərdiyiniz string-in ilk təkrarlanmayan
// hərfini qaytarsın. Nəticə =====>> "e"
// console.log(findFirstNotRepeatedChar('abacddbecz'));
function findFirstNotRepeatedChar(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    str.indexOf(str[i]) === str.lastIndexOf(str[i])
     ? (newStr += str[i]) 
     : null;
  }
  return newStr[0];
}
console.log(findFirstNotRepeatedChar("abacddbecz"));

// ----------------------------------------------------- TASK 2 -----------------------------------------------------

// console.log(charCount('w3rescource.com', 'c'));

// charCount adlı function yaradın. Bu function 2 ədəd argument qəbul edir. 2-ci göndərdiyiniz hərf 1-cinin içərisində
// neçə dəfə təkrarlanıbsa onun sayısını göstərin.

// Nəticə: 3
function charCount(str,item){
    let count=0
    for (let i = 0; i < str.length; i++) {
        str[i]==item && (count+=1)
    }
    console.log(count);
}
charCount('w3rescource.com', 'c')





// ----------------------------------------------------- TASK 3 -----------------------------------------------------

// console.log(makeId(8));

// makeId adlı function yaradın. Bu function qəbul etdiyi rəqəm uzunluğunda random ID verməlidir.
// Məsələn =====>> 4SGqCfrz

// var charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function makeId(item)
var text=""
var charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for (let i = 0; i <length; i++) {
    const element = array[i];
    
}




makeId(8)


// ----------------------------------------------------- TASK 4 -----------------------------------------------------

// // console.log(uniqueChar("abccddee"));  ====>> abcde

// ----------------------------------------------------- TASK 5 -----------------------------------------------------

// console.log(Arrays_sum([1, 0, 2, 3, 4], [3, 5, 6, 7, 8]));

// Nəticə: =====>> [4, 5, 8, 10, 12]

// ----------------------------------------------------- TASK 6 -----------------------------------------------------

// var a = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27],
//   [7, 4, 28, 14],
//   [3, 10, 26, 7],
// ];

// Nəticə: =====>>
// row 0
//  1
//  2
//  1
//  24
// row 1
//  8
//  11
//  9
//  4
// row 2
//  7
//  0
//  7
//  27
// row 3
//  7
//  4
//  28
//  14
// row 4
//  3
//  10
//  26
//  7
