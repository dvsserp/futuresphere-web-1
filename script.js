const number=5
const string="word"
const boolean=true

let num = 5
let str = "word"
let bool = false


console.log(number)
console.log(string)
console.log(boolean)

console.log(typeof(number))
console.log(typeof(string))
console.log(typeof(boolean))

// let allows your variable to change

console.log('--------')
let variable = 5
console.log(variable)
variable++;
console.log(variable)

// constant is when u can't change variable

console.log('-------const-------')
const constant = 5
console.log(constant)
//constant++;
console.log(constant)

console.log('------addition------')
console.log(5+2)

console.log("------subtraction------")
console.log(7-2)

console.log("------multiplication------")
console.log(5*2)

console.log("------division------")
console.log(10/2)

console.log('------greater than----')
console.log(5>2)

console.log("----less than----")
console.log(5<2)

console.log('----greater than or equal to-----')
console.log(5>=5)

console.log('-----less than or equal to----')
console.log(4<=5)

console.log('-----equals to-----')
console.log(5===5)

console.log('-----strings------')
// 3 ways to declare string
const string1 = 'single quote'
const string2 = "double quote"
const string3 = `backtick`

//string embedding
const name1 = "Juan"
//only works on backticks
const greeting = `Hello ${name1}`
console.log(greeting)

// string concatenation
const greeting2 = "hello" + "Juan"
console.log(greeting2)

//special / escape characters
const quotes1 = `I said "yes"`;
console.log(quotes1)
const escape1 = `I\'m happy`
console.log(escape1)
const newLine = `line 1 \n line 2`
console.log(newLine)

//string number concatenation
console.log("number "+ 50)

console.log('------conditionals-----')
if(5>2){
    console.log("5 is greater than 2")
}

if (2>5){
    console.log("2 is greater than 5")
}else{
    console.log("2 is not greater than 5")
}

const num1 = 5
const num2 = 6
if(num1 > num2){
    console.log(`${num1} is greater than ${num2}`)
}else if(num1 < num2){
    console.log(`${num1} is less than ${num2}`)
}else{
    console.log(`${num1} is equal to${num2}`)
}

// undefined and null
console.log(undefined)
console.log(typeof undefined)
console.log(null)
console.log(typeof null)