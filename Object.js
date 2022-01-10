// OBJECT

// const user = {
//     name : "Bill",
//     age: 25,
//     city: "Bishkek",
//     "born in country": "USA",
//     placeOfResidence: "Bishkek",
//     address: "Bishkek city, Novopavlovka",
//     hobbies: ["football", "chess", "volleyball"],
//     books: {
//         western: "Всадник без головы",
//         thriller: "Шерлок Холмс",
//         romance: "Romeo and Juliet",
//     },
//     email: "bill25@gmail.com",
//     siblings: {
//         br68=ъ\=\8н\\ъ прсм п++/others: ["Sasha", "Bob", "Andrew"],
//         sisters: ["Juliet", "Helen"]
//     },
//     bankAccount: "$1000 000 000 000",
//     "crypto currency": "Bitcoin"
// }
// user.car = "Bugatti"
//
// console.log(user.name, user.age)
// console.log(user["born in country"])
// console.log(user.siblings.sisters)
// console.log(user)
//
//
// // object.keys
// // object.values
// // object.entries
//
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))
//
// // delete
// // Object.freeze()
//
// Object.freeze(user)
// delete user.name
// user.job ='businessman'
// console.log(user)
//
//
// // mutation
//
// //Object.assign()
// const player = {
//     name : 'Ponaldo',
//     age : 35
// }
// const player2 ={
//     name : 'essi',
//     car : 'BMW'
// }
// const player3={
//     name : 'Mbappe'
// }
// // const newPlayer = Object.assign({},player2)
// // console.log(newPlayer)
// const obj4 = Object.assign(player,player2,player3)
// const obj5 = Object.assign({},player,player2,player3)
// console.log(player2)
// console.log(obj4)
// console.log(obj5)
//ДОМАШНЯЯ ЗАДАНИЕ
//1
const obj = {
    a:1,
    b:2,
    c:3
}
console.log(Object.keys(obj).length)
// 2
console.log(obj.c)
console.log()
//3
const obj3 = {
    Shirin:'1000',
    Aijan:'500',
    Atai:'200',
}
console.log(obj3.Shirin,obj3.Atai)
//4

//5
obj3.Medet = '1500'
console.log(obj3)
//6
const obj6 = {
    Shirin:'1000',
    Aijan:'500',
    Atai:{
        salary:'500'
    }
}

//
console.log(obj6.Atai.salary)
//9
console.log(Object.keys(obj6))
// 10
console.log(Object.values(obj6))
// 11
console.log(Object.entries(obj6))
//12
const task = (obj) => {
  return obj.name.length %2===0?1:0
}
console.log(task({name:"Shirin"}))
//13

const task13 = (obj) => {
  return obj.map((el)=>{
      return el.id
  })
}
console.log(task13([ {id: 3}, {id: 5}, {id: 6}, {id: 7} ]))
//14

//15

function greet(language){
    let dataBase =
        {english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'}
    return dataBase[language]|| 'welcome'

}
let list1 = {

}
console.log(greet('swedish'))

//date
function addUserName(list){
    return list.map
}

console.log(addUserName(list))
console.log(+new Date())
console.log(new Date())
console.log(+new Date().getFullYear())


