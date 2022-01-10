//currying - каррирование
//this , context
//closure

//curring
function createWebApi(http){
    return function (www){
        return function (name){
            return function (domain){
                return`${http}://${www}.${name}${domain}`
            }
        }
    }
}

console.log(createWebApi('https')('www')('amazon')('.com'))


// function sum(num){
//     return function a(num2){
//         return function b(num3){
//             return function c(num4){
//                 return num + num2 +num3 + num4
//             }
//         }
//     }
// }


const sum = num=>num2=>num3=>num4=>num+num2+num3+num4
console.log(sum(10)(20)(30)(40))

// function sayHi(){
//     let name = 'Shirin'
//   return   function getName(){
//         console.log(name)
//       return name
//     }
// }
//
// console.log(sayHi()())
// const person = sayHi()
// console.log(person())

function sayHi(){
    let name = 'Shirin'
     function getName(){
        console.log(name)
         return name
    }
    getName()
}

console.log(sayHi())

const  person = {
    age: 20,
    name: 'Shirin',
    know: function (city,country){
        console.log(`${this.name} in from ${city},${country}`)
    }
}
console.log(person.know('Bishkek','Kyrgyzstan'))
const obj = {key : 'a',key2 :'f'}
obj['key'] = 'n'
console.log(obj)

if (0 == ''){
    console.log(true)
}else{
    console.log(false)
}
let test = 3;
if (test) {
    console.log('верно')
} else {
    console.log('неверно');
}
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    console.log(elem);
}
function checkForFactor (base, factor) {
    // code here
    if (base%factor===0){
        return true
    }else{
        return  false
    }
}
console.log(checkForFactor(10,3))

function incrementer(nums) {
    // code goes here
  for (let i = 1;i<nums.length;i++) {

  }
}
//RECURSION РЕКУРСИЯ
// КАЧАН ОЗУ ЧАКЫРГАНДА


//5!

function factorial(n){
    if (n===0 || n===1){
        return 1
    }
    return n* factorial(n-1)
}

console.log(factorial(5))

let number = 1
let counter = 5
while (counter>0){
    number = number * counter
    counter --
}
console.log(number)
