//1
function shortcut(string) {
    return string.split("").filter(el => {

    return el !== "a" && el !== "e" && el !== "i" && el !== "o" && el !== "u"
}).join("")}
console.log(shortcut('hello'))

//2
let stringToNumber = function(str){
    return Number(str)
}
//3
function findOdd(arr) {
    //happy coding!

    let result = 0
    let res = []
    for(let i = 0; i<= arr.length; i++){
        for(let j = 0; j <= arr.length; j++){

            if(arr[i] === arr[j]){
              result++
            }
        }
        if(result % 2 !== 0){
              res.push(arr[i])
        }
    }
    return res[0];
}

console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))
//4
function countSheeps(arrayOfSheep) {
return arrayOfSheep.filter(el=>{
    return el===true
}).length
}
console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]))

//5
function finalGrade(exam,projects) {
    if (exam>90||projects>10){
        return 100
    }else if (exam>75 && projects>=5){
        return 90
    }else if (exam>50 && projects>=2){
        return 75
    }
    else {
        return 0
    }
}

console.log(finalGrade(81,2))
//6
function otherAngle(a,b){
    return 180-(a+b)
}
console.log(otherAngle(130,60))

//7
// function howMuchILoveYou(nbPetals) {
//     const w = ['I love you',
//         'a little',
//         'a lot',
//         'passionately',
//         'madly',
//         'not at all']
//     return nbPetals===w
// }
//
// console.log(howMuchILoveYou(3))

//8
function repeatStr(n, str)
{
    return str.repeat(n)
}
console.log(repeatStr(9,'o'))

// 9
function abbrevName(nam){
    return nam.split('').map(el=>{
        return el[0].toUpperCase()
    })

}

console.log(abbrevName('shirin','shirin'))
//10
// function correct(string) {
//     // todo
//     if (string.includes('0')){
//         return  'O'
//     }
// return 'k'
// }
//
// console.log(correct(LOND0N))

function falsyOrTruthy(arr) {
//your code...
if(arr.length%2===0){
    return arr.filter(el=>{
        return el
    })
}else if (arr.length%2){
    return arr.filter(el=>{
        return !el
    })
}else {
    return []
}

}

console.log(falsyOrTruthy([false,NaN,NaN]))


function hero(bullets, dragons) {
//Get Coding!
    if (dragons === (bullets *2) || dragons < (2 * bullets)) {
     return true
    }else{
        return  false
    }
}

console.log(hero(2,2))

// function doubleEveryOther(a) {
//     return a.map((ind)=>{
//         return a[ind % 2]
//     })
// }
//
// console.log(doubleEveryOther([1,2,3,4,5]))


function remainder(a, b){
    // Divide the larger argument by the smaller argument and return the remainder
if(a>b){
    return a % b
}
else {
    return  b%a
}
}

console.log(remainder(-3,-2))

function isItANum(str) {
// your code here;
return  str.filter((el)=>{
    return  el
})


}
console.log(isItANum(['efRFS:)0207ERGQREG88349F82!']))

function smallEnough(a, limit){
    if(  a===limit || a>limit){
        return true
    }else {
        return false
    }
}

console.log(smallEnough(12,13))

let replaceDots = function(str) {
    return str.replace(/\./g, '-');
}
console.log(replaceDots('one.two.three'))


function capitalizeWord(word) {
    return word[0].toUpperCase()  + word.substr(1,10)
}
console.log(capitalizeWord('shirin'))

function multiply(number){
    //your code here
    if(number<10 && number>-10){
        return number * 5
    }else if(number<200 && number>-200){
        return number * 25
    }else{
        return number * 125
    }
}

console.log(multiply(-200))

function getStatus(isBusy) {
    let msg = isBusy
    if (isBusy === 'isBusy'){
        return 'busy'
    }
    return 'available'
}
console.log(getStatus('isBusy'))

function nthEven(n){
    // your code here
    return 2*2-2
}

console.log(nthEven(2))


//break
//continue



let arr = [0,1,2,3,4,5,6,7,8,9,10,12]

for (let i = 0; i < arr.length; i ++){
    if (arr[i] % 2 ===0){
        console.log(arr[i],"odd")
    }
    console.log(arr[i])
}
for (let i = 0;i<arr.length;i++){
    if (arr[i]===10){
        console.log(arr[i])
        break
    }
}

 for (let i = 0; i <arr.length;i++){
     if (i===4 || i){

     }
 }