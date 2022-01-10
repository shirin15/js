//FUNCTIONS
// 1.1Function Declaration
// function sum(a,b){
//     return a + b
// }
//
// console.log(sum(10,30))
//
// function greet(name){
//     console.log('Привет',name)
// }
// greet('Shirin')

//1.2Function Expression
// let greet1 = function greet1(age) {
//     console.log('Мне ', age)
// }
// greet1(19)
//
// console.log(typeof sum)
// console.dir(sum)

// 2 Анонимные функции
//  let x = 0
// setTimeout(function (){
//     console.log(++x)
//     },1000)
//
// let y = 0
// const interval = setInterval(function (){
//     if (y===5){
//         clearInterval(interval)
//     }else{
//         console.log(++y)
//     }
// },1000)

// 3 Стрелочные  функции
// const arrow = name => console.log('Shirin+',name)
// arrow('shirin')
//
// const arrow1 = (name, age)=>{
//     console.log('shirin',name, age)
// }
// arrow1('shirin2',19)
//
// const row = num=>num**2
// console.log(row(4))
//
//
// const rentalCarCost = (d) => {
//     //Your solution here
//     let firstDiscount = 50
//     let secondDiscount = 20
//     let  cost = 40
//     if(d >= 7){
//         return (d * cost) - firstDiscount
//     }else if (d >=3 && d < 7){
//         return (d * cost) - secondDiscount
//
//     }
//     return d * cost
// }
//
// console.log(rentalCarCost(10))
//ДОМАШНЯЯ РАБОТА  №1

// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
const task1 = a => {
    if (a === 10) {
        return true
    }
    return false
}
console.log(task1(11))

function sum1(a) {
    if (a === 10) {
        return true
    }
    return false
}

console.log(sum1(10))
// 2. Вам даны две переменные a=50, b=100. Составьте условие, по которому в консоль будет выводиться 'a больше b', 'a меньше b'.
const task2 = (a, b) => {
    if (a > b) {
        return 'a>b'
    } else if (a > b) {
        return 'a<b'
    }
    return 'a=b'
}
console.log(task2(100, 50))

function sum2(a, b) {
    if (a > b) {
        return 'a>b'
    } else if (a < b) {
        return 'a<b'
    } else {
        return 'a=b'
    }
}

console.log(sum2(22, 22))
// 3. Вам дана переменная a=-2. Составьте условие, по которому в консоль будет выводиться 'positive' - если число больше 0, 'равно' если число равно 0, "negative" если число меньше 0.
const task3 = (a) => {
    if (a > 0) {
        return 'positive'
    } else if (a < 0) {
        return 'negative'
    }
    return 'равно'
}
console.log(task3(-3))

function sum3(a) {
    if (a > 0) {
        console.log('positive')
    } else if (a < 0) {
        console.log('negative')
    } else {
        console.log('равно')
    }
}

sum3(-5)
// 4. Вам дана переменная number=45. Составьте условие, по которому будет выводиться в консоль "Четное число", "Нечетное число".
const task4 = (x) => {
    if (x === 0)
        return 'null'
    if (x % 2 === 0) {
        return 'четный'
    } else {
        return 'нечетный'
    }
}
console.log(task4(10))
// 5. Вам даны две переменные a=10, b=2. Составьте условие, по которому, остаток деления a на b, будет выводиться консоль "Четное число", "Нечетное число".
const task5 = (a, b) => {
    if ((a % b) === 0)
        return 'null'
    if ((a % b) % 2 === 0) {
        return 'четный'
    } else {
        return 'false'
    }
}
console.log(task5(12, 6))
// 6. Вам дана переменная s. Составьте условие, по которому в консоль будет выводится тип этой переменной - "boolean", "number", "string".
const task6 = (x) => {
    console.log(typeof x)
}
task6(false)
// 7. Вам дана переменная а. Если переменная a больше одного и меньше 9-ти, то выведите 'Верно', иначе выведите 'Неверно'.
const task7 = (x) => {
    if (x > 1 && x < 9) {
        return true
    }
    return false
}
console.log(task7(9))
// 8. Вам дана переменная а. Если переменная a равна трем или равна семи, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной в консоль.
const task8 = (a) => {
    if (a === 3 || a === 7) {
        return a + 7
    }
    return a / 10
}
console.log(task8(20))
// 9. Вам даны переменные а , b. Если переменная a равна или меньше 0, а переменная b больше или равна 5, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания).
const task9 = (x, y) => {
    if (x <= 0 && y >= 5) {
        return x + y
    }
    return x - y
}
console.log(task9(-2, 6))
// 10. Вам даны переменные a , b. Если переменная a больше 4-х и меньше 10-ти, или переменная b больше или равна 7-ми и
// меньше 17-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
const task10 = (a,b) => {
  if((a>4 && a<10) && (b>=7 && b<17)){
      return true
  }
  return false
}
console.log(task10(15,12))
// // 11. Вам дана переменная month. В ней лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
const task11 = (month) => {
    if (month === 12 || (month >= 1 && month < 3)) {
        return `кыш`
    } else if (month >= 3 && month <= 5) {
        return `жаз`
    } else if (month >= 6 && month <= 8) {
        return `жай`
    } else if (month >= 9 && month <= 11) {
        return `kuz`
    } else {
        return `нет такого сезона`
    }
}
console.log(task11(5))
// // 12. Вам дана переменная day. В ней лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
const task12 = (day) => {
    if (day >= 1 && day < 11) {
        console.log(`Первая декада`)
    } else if (day >= 11 && day < 21) {
        console.log(`Вторая декада`)
    } else if (day >= 21 && day <= 31) {
        console.log(`Третья декада`)
    } else {
        console.log(`Нет такого дня`)
    }
}
task12(43)
// // 13. Вам дана переменная a='12345'. Проверьте, что первым символом этой переменной является цифра 1, 2 или 3. Если это так – выведите ‘да’, в противном случае выведите ‘нет’.
// const task13 = (a) => {
//   return +a[0] === 1 || +a[0] === 2 || +a[0] === 3;
//     if (+a[0]===1 || +a[0]===2 || +a[0]===3){
//         return true
//     }
//     return false
//
// // // 14. Вам дана переменная age=*любое двузначное число*. Составьте условие, по которому, в консоль будет выводиться "Мне  год", "Мне  лет", в зависимости от возраста. Наример мне 21 год, мне 20 лет.
// const task14 = (age) => {
//     let a =age % 10
//     if (age > 0){
//         if (a === 1 && age !==11){
//             return `мне ${age} год`
//         }else if (age>10 && age<15){
//             return `мне ${age} лет`
//         }else if (a>1 && a<5){
//             return `мне ${age} года`
//         }
//         else {
//             return `мне ${age} лет`
//         }
//     }
// }
// console.log(task14(1))
// // // 15. Вам дана переменная time= *любое чило от 1 до 59*. Составьте условие, по которому время будет делиться на четверти. Пример: time = 12 - Первая четверть. Если число больше 60, то в консоли будет выдаваться "Неверное число".
// const time= (time) => {
//     if ( time >0 && time <16){
//         console.log(`Первая четверть`)
//     } else if (time >15 && time <31){
//         console.log(`Вторая четверть`)
//     } else if ( time > 30 && time < 46) {
//         console.log(`Третья четверть`)
//     } else if ( time > 45 && time <61){
//         console.log(`Четвертая четверть`)
//     } else {
//         console.log(`Неверное число`)
//     }
// }


// // -------
//
// //     1. Вам дана переменная str = . Выведите в консоль длину первого слова.
// const str1 = (x) => {
//     return (x.length)
// }
// console.log(str1('Nevis ITDB TECH'))
// // 2. Вам дана переменная str = 'Максимально УЖАСНО'. Выведите в консоль слово УЖАСНО, только нижним регистром.
// const str2 = (x) => {
//     return (x.slice(12, 18).toLowerCase())
// }
// console.log(str2('Максимально УЖАСНО'))
// // 3. Вам дана переменная str = 'максимально УЖАСНО'. Выведите в консоль слово максимально, только верхним регистром.
// const str3 = (x) => {
//     return (x.substr(0, 11).toUpperCase())
// }
// console.log(str3('максимально УЖАСНО'))
// // 4. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль каждый символ этой строки, используя метод split. Пример : [ 'C','o','d','i','n','g',' ','i','s',' ','t','h','e',' ', 'L','O','V','E',' ','o','f',' ','m','y',' ','L','I','F','E','!' ]
// const str4 = (x) => {
//     return (x.split('limit'))
// }
// console.log(str4('Максимально Ужасно'))
// // 5. Вам дана переменная str = 'Максимально Ужасно, переделывай'. Выведите в консоль все слова этой строки, используя метод split. Пример: [ 'Максимально' 'ужасно', 'переделывай'. ]
//
// // 6. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль 'мально Ужасно', используя метод slice.
// const str6 = (x) => {
//     return (x.slice(5, 18))
// }
// console.log(str6('Максимально Ужасно'))
// // 7. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль букву У, использую метод charAt.
// const str7 = (x) => {
//     return (x.charAt(12))
// }
// console.log(str7('Максимально Ужасно'))
// // 8. Вам даны переменные str = 'Максимально', str2 = 'Ужасно'. Выведите в консоль соединенные строки, используя метод concat.
// const str8 = (x, y) => {
//     // return x.concat(y)
//     return (x + " " + y)
// }
// console.log(str8('Максимально', 'Ужасно'))
// // 9. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс слова 'Ужасно'.
// const str9 = (x) => {
//     return (x.substring(12, 18))
// }
// console.log(str9('Максимально Ужасно'))
// // 10. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль "встречается более 1 раза", если букв 'a' встречается более 1 раза, иначе "встречается менее одного раза"
// const str10 = (x) => {
//     if (x.includes('а')) {
//         return 'true'
//     }
//     return 'false'
// }
// console.log(str10('Максимально Ужасно'))
// // 11. Вам дана переменная str = 'макСИМАЛЬНО ужаСНО'. Выведите в консоль первую букву каждого слова строки в верхний регистр.
// const str11 = (x) => {
//     return (x[0].toUpperCase() + x.substr(1, 10).toLowerCase() + " " + x[12].toUpperCase() + x.slice(13, 18).toLowerCase())
// }
// console.log(str11('макСИМАЛЬНО ужаСНО'))
// // 12. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого вхождения буквы а
// const str12 = (x) => {
//     return (x.indexOf('а'))
// }
// console.log(str12('Максимально Ужасно'))
// // 13. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого последнего буквы о.
// const str13 = (x) => {
//     return (x.lastIndexOf('а'))
// }
// console.log(str13('Максимально Ужасно'))
// // 14. Вам дана переменная str = 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice) и выведите в консоль.
// const str14 = (x) => {
//     console.log(x.substr(4, 3))
//     console.log(x.slice(4, 7))
//     console.log(x.substring(4, 7))
// }
// str14('aaa bbb ccc')
//
// // 15. Вам дана переменная str = '17-02-2021'. Преобразуйте эту дату в формат '31/12/2025' и выведите в консоль.
// const str15 = (x) => {
//     console.log(x.replace(/-/g, '/'))
//     console.log(x.replace('-', '/'))
// }
// str15('17-02-2021')
// // 16. Вам дана переменная str = 'Максимально Ужасно'. Проверьте, есть ли буква "в" в данной строке, если да, то выведите "Да", иначе - "нет".
// const str16 = (x) => {
//     if (x.includes('в')) {
//         return 'да'
//     }
//     return 'нет'
// }
// console.log(str16('Максимально Ужасно'))
// // 17. Вам дана переменная str = 'АаааааА'. Проверьте, если первая буква в строке совпадает с последней, если да, то выведите в консоль "Совпадает", иначе - "Не совпадает".
// const str17 = (x) => {
//     if (x[0] === x[x.length - 1]) {
//         return 'true'
//     }
//     return 'false'
// }
// console.log(str17('AaaaaA'))
// // 18. Вам дана переменная str = 'Максимально'. Проверьте, если буква л, встречается в первой половине строки, или последней. Если в первой, то выведите в консоль - "В первой половине", иначе - "Во второй половине".
// const str18 = (x) => {
//     if (x.length / 2 < x.indexOf('л')) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }
// str18('Максимально')




//4 Параметры по умолчению
// let  sum1 = (a, b) =>a+b
// console.log(sum1(3,3))
// console.log(sum1())
//4.1 массив и цикл
// function sumAll(...all){
//     let result = 0
//     for (let num of all){
//         result +=num
//     }
//     return result
// }
// const res = sumAll(1,2,3,4,5,6)
// console.log(res)

// //Замыкание

// function creat(name){
//     return function (lastName){
//         console.log(name + lastName)
//     }
// }
// const logWithLastName =creat('Shirin ')
// console.log(logWithLastName('Aibek'))
// console.log(logWithLastName('umut'))

