// let arr = [10, 'Shirin' , true, null]
// arr[6] = '6'
// arr[5] = 5
// arr[0] = 100
// arr[100] = 100
// console.log(arr)
 // console.log(arr[0],arr[arr.length-1])
//
// console.log(typeof arr)
//

//
// // артына кошот
// array.push(11)
// console.log(array)
//
// // астына кошот
// array.unshift(12)
// console.log(array)
//
// // артынан алат
// console.log(array.pop())
//
// // астынан алат
// console.log(array.shift())

//MAP
//fill

// let array = [1,2,3,4,5,6,7,8,9,10]

// let result = array.map(function (el,idx,arr){
//     return el / 2
// })
// let secondArr = new Array(100).fill(0).map(function (el,index){
//     return el  + index + 1
// })
// console.log(secondArr.map( function (el){
//     if (el % 2===0){
//         return el*2
//     }else{
//         return  !!0
//     }
// }))
// let res = secondArr.map(function (el){
//     if (el % 2===0){
//         return el*2
//     }else{
//         return  !!0
//     }
// })
// console.log(res)

//ДОМАШНЯЯ РАБОТА
// №1
// let array1 = ['a','b','c']
// array1.push(1,2,3)
// console.log(array1)
// // №2
// let Array1 = [1,2]
// let Array2 = [3,4,5]
// console.log(Array1.concat(Array2))
// // №3
// let array3 = [1,2,3]
// array3.push(4,5,6)
// console.log(array3)
// // №4
// let array4 = [1,2,3]
// array4.unshift(4,5,6)
// console.log(array4)
// // №5
// let array5 = ['js','css','jq']
// console.log(array5.pop())
// // №6
// console.log(array5.shift())
// // №7
// let array7 = [1,2,3,4,5]
// console.log(array7.slice(0,3))
// // №8
// console.log(array7.slice(3,5))
// // // №9
// let array9 = array7.splice(1,2)
// console.log(array7)
// // №10
// let array10 = [1,2,3,4,5]
// // console.log(array10.splice(1,3))
// // 11  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// // let arr = array10.splice(3,0,'a','b','c')
// // console.log(array10)
// // 12  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let arr1 = array10.splice(1,0,'a','b')
// let arr2 = array10.splice(6,0,'c')
// let arr3 = array10.splice(8,0,'e')
// console.log(array10)
// // 13  Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
// let array13 = [2,1]
// // array13.sort(function (a, b) => a-b)
// let sorted = array13.sort(function (a,b){
//     return a-b
//     })
// console.log(sorted)
//
// let letters = ['a','d','m','b']
// let sorted1 = letters.sort((a,b)=>{
//     // if (a>b){
//     //     return 1
//     // }
//     // if (a<b){
//     //     return  -1
//     // }
//     // else{
//     //     return 0
//     // }
// return a>b ? 1: -1
// })
// console.log(sorted1)
// №14
// let array14 = [1,2,3,4,5,6,7,8,9,]
// function getFirst (array14){
//     return 1
// }
// console.log(getFirst(array14))
//
// // №15
// let array15 = [1,2,3,4,5,6,7,8,9,]
// function getLast(array15){
//     return 9
// }
//
// console.log(getLast(array15))
//
// let arr = ['yellow', 'red', 'white', 'purple', 'blue', 'magenta']
// let colors = arr.filter((el) =>{
//     return el.includes('m')
// })
// console.log(colors)
//
// let num = [11,33,55,88,10]
//
// //Reduce
//
// let arr1 = num.reduce((i,d,)=>{
//     console.log(i, d)
//     return i+d
// })
// console.log(arr1)


// //1 100
// let secondArr = new Array(100).fill(0).map(function (el,index){
//     return el  + index + 1
// })
// console.log(secondArr)
// let arr1 = secondArr.reduce((i,d,)=>{
//     console.log(i, d)
//     return (i+d)
// })/secondArr.length
// console.log(arr1)

// // 1. Вам дан массив: [315, 64, 75, 43, 65, 63].Найдите сумму каждого числа.
// let array = [315, 64, 75, 43, 65, 63]
// arr1 = array.reduce((i,d)=>{
//     return (i+d)
// },0)
// console.log(arr1)
//
// // 2. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию, изменяющую букву а в каждом имени на я и выведите в консоль.
// let names = ['Аскар', 'Баяман', 'Калмамат']
// const change = (name) => {
//     return name.map(el =>{
//         return el.split("").map(el=>{
//             if(el==='а'){
//                 return 'я'
//             }else {
//                 return el
//             }
//         }).join('')
//     })
// }
// console.log(change(names))
// // 3. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию, которая выводит только те имена, где есть буква к и выведите в консоль.
// let array2 = ['Аскар', 'Баяман', 'Калмамат']
// let arr3 = array2.filter((el)=>{
//     return el.includes('к') || el.includes('К')
// })
// console.log(arr3)
// // 4. Вам дан массив: [4, 54, 49]. Сделайте из него массив, состоящий из квадратов этих чисел.
// let array4 = [4, 54, 49]
// let arr4 = array4.map(function (el){
//   return Math.sqrt(el)
// })
// console.log(arr4)
// // // let array4 = ['Shirin','Diana']
// // // let arr4 = array4.filter((array3=>array3.length>5))
// // // console.log(arr4)
// //
// // // 5. Вам дан массив [3134, 4, -143, -245, -214]. Оставьте в нем только отрицательные числа.
// let array5 = [3134, 4, -143, -245, -214]
// let arr5 = array5.filter((el)=>{
//     return el<0
// })
// console.log(arr5)
// // // 6. Вам дан массив [3, 51, 30, 54, 60]. Оставьте в нем только четные числа.
// let array6 = [3,51,30,54,60]
// let arr6 = array6.filter((el)=>{
//     return el % 2===0
// })
// console.log(arr6)
// // 7. Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// let array7 = ['Бегимай','Баяман','Калмамат']
// let arr7 = array7.filter((names=>names.length<8))
// console.log(arr7)
// // // 8. Вам дан массив [-13, 96, -41, -28, 40]. Посчитайте количество отрицательных чисел в этом массиве.
// let array8 = [-13, 96, -41, -28, 40]
// let arr8 = array8.filter((el)=>{
//     return el<0.
// })
// console.log(arr8.length)
// // 9. Вам дан массив [3, 51, -30, -54, 60]. Оставьте в нем только положительные числа.
// // Затем извлеките квадратный корень из этих чисел, если эти числа больше 30.
// let array9 = [3, 51, -30, -54, 60]
// let arr9 = array9.filter((el)=>{
//     return el>0
// })
// let Array9 = arr9.map(function (il){
//     return il > 30 ? Math.sqrt(il): il
// })
// console.log(Array9)
// // 10. Вам дан массив [55, 44, 55, 44, 15, 49]. Оставьте в нем только неповторяющиеся числа.
// let array10 = [55, 44, 55, 44, 15, 49]
// let arr10 = array10.filter((el,ind)=>{
//     return array10.indexOf(el) === ind
// })
// console.log(arr10)
// // // 11. Вам дан массив [NaN, 0, 77, false, -17, '',undefined, 99, null]. Создайте функцию,
// // // которая очищает массив от ложных (false) значений: false, null, undefined, 0, –0, NaN и "" (пустая строка).
// let array11 = [NaN, 0, 77, false, -17, '',undefined, 99, null]
// let arr11 = array11.filter((el)=>{
//     return el
// })
// console.log(arr11)
// // 12. Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Выведите длину каждой строки.
// let array12 = ['Бегимай', 'Баяман', 'Калмамат']
// let arr12 = array12.map((el)=>{
//     return el.length
// })
// console.log(arr12)

// // Во всех задачах используйте только методы map, reduce.

// 1. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму этих чисел.
// let array1 = [5,15,315,2,13,20,9]
// let arr1 = array1.reduce((el,ind)=>{
//     console.log(el,ind)
//     return el+ind
// })
// console.log(arr1)
// // 2. Вам дан массив с числами [5,12,314,2,13,20,9]. Найдите сумму всех четных чисел.
// let array2 = [5,12,314,2,13,20,9]
// let arr2 = array2.filter((el)=>{
//     return el%2===0
// })
// let Array2 = arr2.reduce((el,ind)=>{
//     console.log(el,ind)
//     return el+ ind
// })
// console.log(Array2)
// // 3. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму чисел, которые больше 10.
// let array3 = [5,15,315,2,13,20,9]
// let arr3 = array3.filter((el)=>{
//     return el>10
// })
// let Array3 = arr3.reduce((el,ind)=>{
//     console.log(el,ind)
//     return el+ind
//
// })
// console.log(Array3)
// // 4. Вам дан массив с числами [3,13,54,15,335, 39]. Найдите разность чисел, которые больше 10.
// let array4 = [5,15,315,2,13,20,9]
// let arr4 = array4.filter((el)=>{
//     return el>10
// })
// let Array4 = arr4.reduce((el,ind)=>{
//     console.log(el,ind)
//     return el-ind
//
// })
// console.log(Array4)
// // 5. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Сложите все строки и выведите длину результата.
// let array5 = ['Аскар', 'Баяман', 'Калмамат']
// console.log(array5.join('').length)
// // 6. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Выведите все строки в верхнем регистре, используя map.
// let arr6 = array5.map((el)=>{
//     return el.toUpperCase()
// })
// console.log(arr6)
// // 7. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Выведите все вторые строки в верхнем регистре.
// let arr7 = array5.map((el)=>{
//     return arr7.indexOf(el).toUpperCase([2])
// })
// console.log(arr7)
// // 8. Напишите функцию, которая принимает str, target. И возвращает true или false, если targer присутствует в str.
// // Использовать .reduce для этого.
const func = (str, target) => {
    return str.split("").reduce((acc,el) => {
        if(target === el){
            return true
        } else {
            return acc
        }
    }, false)
}
console.log(func("qwerty", "q"))
//
//
//
// //     Пример: isPresent ('abcd', 'b') => true
// // isPresent ('efghi', 'a') // => false
//
// // 9. Вам дан массив с строками ['асКар', 'бЯяман', 'калМмамат']. Используйте заглавные буквы в каждом массиве имен.
// //     Пример: (["john", "JACOB", "jinGleHeimer", "schmidt"])), => ["John", "Jacob", "Jingleheimer", "Schmidt"]
//
// // 10. Вам дан массив со строками ['Баяман', 'Калмамат']. Поменяйте местами первые буквы строк.
// const task1 = (arr) => {
//     let x = arr [0]
//     let y = arr [1]
//     console.log(x,y)
//     return [x[0] + arr[0].slice(1), y[0] + arr[1].slice(1)]
// }
// console.log(task1(['Баяман', 'Калмамат']))

const task2 = (names) => {
  let x = names[0]
    let y = names[1]
    return names.map((el,ind)=>{
        if (ind===0){
            return x[0] + y.slice(1)
        }else{
            return y[0] + x.slice(1)
        }
    })
}
console.log(task2(['Баяман', 'Калмамат']))
// 11. Вам дан массив . Напишите функцию, которая проверяет, все ли элементы массива относятся к одному типу данных.
// const task10 = (arr) => {
//     return arr.reduce((acc,el,ind)=>{
//         if (ind===arr.length-1){
//             return acc
//         }
//             return  acc && typeof el===typeof arr[ind  + 1]
// },true)
// }
// console.log(task10(true,123))
// 12. Вам дана строка 'тестинг'. Ваша задача - вернуть средний символ слова. Если длина слова нечетная, верните средний символ.
// Если длина слова четная, вернуть 2 средних символа.
// const task1= (str) => {
//   if (str.length % 2===0){
//       return str[str.length/2-1] + str[str.length/2]
//   }else {
//       return  str[Math.floor(str.length/2)]
//   }
// }
// console.log(task1('symbol'))
// // // 13. Вам дан массив с числами [5, -3, 13, -7, 45]. Верните сумму всех положительных чисел.
// let array13 = [5, -3, 13, -7, 45]
// let arr13 = array13.filter((el)=>{
//     return el>0
// })
// let Array13 =arr13.reduce((el,ind)=>{
//     return el+ind
// })
// console.log(Array13)
// // 14. Вам дан массив с числами [5, -54, 13, -7, 45, -15, -34]. Верните сумму всех отрицательных чисел, которые больше 10.
// let array14 = [5, -54, 13, -7, 45, -15, -34]
// let arr14 = array14.filter((el)=>{
//     return el<0
// })
// let Array14 =arr14.reduce((el,ind)=>{
//     console.log(el,ind)
//     return el+ind
// })
// console.log(Array14)
// // 15. Вам дан массив с числами  - все числа - доллары.
// // Вам нужно обменять эти доллары по курсу сома и вывести все числа в сомах.
//  let Array15 = [1, 65, 13 , 30, 100]
// let arr15 = Array15.map((el)=>{
//     return el*83
// })
// console.log(arr15)
// // 16. Вам дан массив со строками ['Lorem ipsum dor sit omet devour il ela sit']. Выведите каждый нечетный индекс в строке в верхнем регистре.
// const task16 = (x) => {
//    x = x.split("")
//     return x.map((el, idx) => {
//         if(idx % 2 === 0){
//             return el.toLowerCase()
//         } else {
//             return el.toUpperCase()
//         }
//     }).join("")
// }
// console.log(task16('Lorem ipsum dor sit omet devour il ela sit'))
// // 17. Вам дан массив с строками ['Оскар', 'Баяман', 'Калмамат']
// // Добавьте к каждой строке нумерацию.
// const task17 = (x) => {
//   return x.map((el,ind)=>{
//       return ind+1+'. '+el
//   })
// }
// console.log(task17(['Оскар', 'Баяман', 'Калмамат']))
// //
// // // 18. Вам дан массив с числами [2,456,6,8]. Напишите функцию , которая вставляет дефис (-) между каждыми двумя четными числами.
// // // Например, если вы принимаете 025468, на выходе должно быть 0-254-6-8.
// const task18 = (x) => {
//     return x.reduce((acc,el,idx) => {
//         if(el % 2 === 0 && x[idx+1] % 2 === 0){
//             return acc + el + "-"
//         }
//             return acc + el
//
//     },"")
// }
//     console.log(task18([2,456,6,8]))
// // 20. Вам дан массив с числами [5,15,315,2,13,20,9]. Посчитайте среднее арифметическое чисел в массиве.
//
// let array20 = [5,15,315,2,13,20,9]
// let arr20= Math.floor(array20.reduce((el,ind)=>{
//     return el+ind
// })/array20.length)
// console.log(arr20)

// REST OPERATOR ...


// На входе два одномерных массива. В каждом массиве всегда по два элемента. Верните третий массив результат которого будет сумма элементов предыдущих
// Input: [2,4], [1,3]
// Actions:
//     Output: [3,7]
//
// Input: [1,7], [9,3]
// Actions:
//     Output: [10, 10]

const arr1 = (input,output) => {

}
// Task 2
// Напишите функцию, которая принимает массив чисел и возвращает массив этих чисел умноженных на два
// Input: [1,2,3,4,5]
// Output: [2,4,6,8,10]
//
// Input: [7,14]
// Output: [14,28]
// Task 3 -----
//     Напишите функцию, которая принимает массив объектов с полем id. Например [[{id: '100'}, {id: 2}]] и возвращает массив этих id
// Input: [{id: 1},{id: 2},{id: 3},{id: 4}]
// Output: [1,2,3,4]
//
// Input: [{id: true}]
// Output: [true]
// Task 4
// Напишите функцию, которая принимает массив чисел и возвращает массив строк по шаблону <h1>{number}</h1>
// Input: [1,2]
// Output: ['<h1>1</h1>','<h1>2</h1>']
//
// Input: ['Ivan']
// Output: ['<h1>Ivan</h1>']
// Task 5
// Напишите функцию, которая принимает массив строк и возвращает массив строк с четным количеством букв
// Input: ['ab','abc','abcd']
// Output: ['ab','abcd']
//
// Input: ['abc','abcde']
// Output: []
// Task 6
// Напишите функцию, которая принимает массив чисел и возвращает массив чисел умноженных на два, которые делятся на 10 без остатка
// Input: [1,2,3,7,10,5]
// Output: [20,10]
function task(arr){
    return arr.filter((el)=>{
        return el%10===0 ? el * 2 :null
    })*2
}
//
// Input: [1,2,3,7,9,4]
// Output: []
// Task 7
// Напишите функцию, которая принимает массив булевых значений и возвращает массив только со значениями true
// Input: [true,false,true,true]
// Output: [true,true,true]
//
// Input: [false,true]
// Output: [true]
// Task 8
// Напишите функцию, которая принимает массив значений в т.ч и значения undefined и возвращает массив только без значений undefined
// Input: [true, false, true,true, undefined, true, undefined]
// Output: [true, false, true, true, true]
//
// Input: [undefined, true, undefined]
// Output: [true]
// Task 9
// Напишите функцию, которая принимает массив чисел и возвращает их сумму. Использовать reduce
// Input: [1,2,3,4,5]
// Output: 15
//
// Input: [2, 11, 5]
// Output: 18
// Task 10
// Напишите функцию, которая принимает массив булевых значений и возвращает результат логического И над ними. Использовать reduce
// Логическое И - это операция &&
// Input:
// Output: true
function  task10(arr){
    return arr.reduce((acc,el)=>{
        return acc && el
    },true)
}

console.log(task10([true,true,true,true]))
// Input: [true,false,true]
// Output: false
// Task 11
// Напишите функцию, которая принимает массив чего угодно и возвращает объект с полями {field1, field2, field3, field4}.
// Использовать reduce. Готовим баночки и не отчаиваемся. Будет 🔥
// Input: [true,1,'wow','you are smart, bro']
// Output: {field1: true, field2:1, field3: 'wow', field4: 'you are smart, bro'}
const task11 = (arr) => {
  return arr.reduce((acc,el,ind)=>{
      return {...arr ,[`field${ind + 1}`] : el}
  },{})
}
console.log(task11([true,1,'wow','you are smart, bro']))
// Task 12 ------
//     Напишите функцию, которая принимает объект, как аргумент и возвращает новый объект. Только с полями, у которых тип значения - строка;
// Input: { name: 'Baha', isAdmin: true }
// Actions:
//     Output: { name: 'Baha' }
//
// Input: { isAdmin: true }
// Actions:
//     Output: {}
// Task 13 ------
//     Напишите функцию, которая принимает объект, как аргумент и возвращает новый массив с именами ключей - значение, которых false
// Input: { isAdmin: false, isBaha: true }
// Actions:
//     Output: ['isAdmin']

// Task 14
// Вам задан массив - верните среднее число массива. (сумма всех элементов деленное на количество элементов)
// Input: [4, 6]
// Actions:
//     Output: 5
// Input:
// Actions:
function task14(arr) {
    return arr.reduce((acc,el)=>{
        return acc + el
    })
}
console.log(task14([2, 4]))

let fruits = []; // создаём массив

fruits[99999] = 5; // создаём свойство с индексом, намного превышающим длину массива

fruits.age = 25; // создаём свойство с произвольным именем
console.log(fruits)