let age = 18
let isAdult = age >= 18
console.log(isAdult) // true
let canDrive = age >= 16
console.log(canDrive) // true
let isSenior = age >= 60
console.log(isSenior) // false
let isTeen = age >= 13 && age <= 19
console.log(isTeen) // true
let isNotTeen = !isTeen
console.log(isNotTeen) // false
let isNotAdult = !isAdult
console.log(isNotAdult) // false
let isNotSenior = !isSenior
console.log(isNotSenior) // true
let isYoung = age < 50
console.log(isYoung) // true

