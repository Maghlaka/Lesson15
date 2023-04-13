
// 2. app.js ფაილში შექმენით ცვლადები და მიანიჭეთ მარტივი ტიპები (Primitive types). გამოიყენეთ ყველა მარტივი ტიპი რაც განვიხილეთ.


const mobileName = "Xiaomi";
console.log(typeof mobileName, mobileName)
const mobilePrice =  1000;
console.log(typeof mobilePrice, mobilePrice)
const mobileScreen = "6.67 inches"
console.log(typeof mobileScreen, mobileScreen)
const mobileMemory = '8 Gb'
console.log(typeof mobileMemory, mobileMemory)
const mobileOsAndroid = true;
console.log(typeof mobileOsAndroid, mobileOsAndroid)
const mobileUndefined = undefined
console.log(typeof undefined, undefined)
const mobileBattery = null;
console.log(typeof mobileBattery, mobileBattery)

// 3. დამატებით შექმენით ცვლადები  myComputerManufacturer, myComputerMemory,  myComputerOS,  computerBuyingYear, currentYear  და მიანიჭეთ თქვენი კომპიუტერის  მწარმოებლის, მეხსიერების, ოპერაციული

const myComputerManufacturer ="Dell"
const myComputerMemory = 32;
const myComputerOS = "Windows 10"
const computerBuyingYear = 2020;
const currentYear  =2023;

// 4. #3 დავალებაში შექმნილი ცვლადებისგან შექმენით წინადადება: 'my computer is (აქ myComputerManufacturer ცვლადი), it runs on (აქ myComputerOS ცვლადი) and I've been using it for (აქ გამთვალეთ კომპიუტერით სარგებლობის წლები  currentYear,   computerBuyingYear  ცვლადების გამოყენებით) years '. გამოიყენეთ წინადადების აწყობის ლექციაზე განხილული ორივე სინტაქსი.


let text1 = "my computer is "
let text2 = " it runs on "
let text3 = " and I've been using it for "
let text4 = " years"


let homework = text1 + myComputerManufacturer + text2 + myComputerOS + text3 + (currentYear - computerBuyingYear) + text4
console.log(homework)

let homework2 = `${ text1 + myComputerManufacturer}${text2 + myComputerOS}${text3}${currentYear - computerBuyingYear}${text4}`
console.log(homework2)

