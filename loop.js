// function hello(){
//     console.log('hello students')
// }
// for (let i = 1 ; i <100; i++){
//     console.log(i)
//
// }
// let arr = []
// for (let i = 0; i < 101; i++) {
//     arr.push(i)
// }
//
//     for (let i = 0; i<=arr.length;i++){
//         if (arr[i] % 2 ===0){
//             arr[i] ="e"
//         }
//         else{
//             arr[i] = 'o'
//         }
//     }
//
// console.log(arr)

// let str = ' motionwebkompany'
// str=str.split('')
// for (let i=0; i<str.length; i++ ){
//     if (i%2 === 0){
//         str[i] = str[i].toUpperCase()
//     }else{
//         str[i] = str[i].toLowerCase()
//     }
// }
// console.log(str.join(''))
//
// function drawTree(height) {
//     for ( let i = 0; i < height ; i++ ) {
//         let star = '*';
//         let space = ' ';
//
//         for ( let j = 1; j <= i; j++ ) {
//             star = star + '***';
//         }
//
//         for ( let k = height - 1 ; k > 0; k-- ) {
//             spacesBefore = space.repeat(k);
//             star = spacesBefore + star;
//         }
//         console.log(star);
//     }
// }
//
//
// function drawTree(height) {
//     for ( let i = 0; i < height ; i++ ) {
//         let star = '*';
//         let space = ' ';
//
//         for ( let j = 1; j <= i; j++ ) {
//             star = star + '**';
//         }
//
//         let spacesBefore = space.repeat(height-i-1);
//         star = spacesBefore + star;
//         console.log(star);
//     }
// }


// for (let i = 0; i < 8; i++) {
//     for (let j = 0; j <= i; j++) {
//         document.write("^");
//     }
//     document.write("<br>");
// }

let txt = "";
for(let i=1;i<=10;i++){
    txt = "";
    for(let j=i;j<10;j++){
        txt += " ";
    }
    for(let k=0;k<(i*2)-1;k++){
        txt += "*";
    }
    console.log(txt);
}

// 1. Выведите столбец чисел от 1 до 50.
for (let i = 0 ; i < 51; i++){
    console.log(i)
}
// 2. Создайте переменную с пустым массивом, заполните массив 10-ю элементами X с помощью цикла.
let loop2 = []
for(let i = 0; i < 11;i++){
    loop2.push(i)
}
console.log(loop2)
// 3. Вам дан массив с элементами [5, 3, 1, 2, 7]. С помощью цикла for выведите все эти элементы в консоль.
let loop3 = [5,3,1,2,7]
for (let i = 0; i<loop3.length; i++){
    console.log(loop3[i])
}

// 4. Вам дан массив с элементами [5, 2, 1, 2]. С помощью цикла for найдите произведение элементов этого массива.
let result1 = 1
let arr1= [2, 3, 4, 5]
for (let i = 0; i < arr1.length; i++) {
    result1 *= arr1[i]
}
console.log(result1)
// // 5. Выведите в консоль столбец четных чисел в промежутке от 0 до 100.
for (let i = 0; i<101;i++){
    if(i%2===0){
        console.log(i)
    }
}
// // 6. С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.
let loop6 = []
for (let i = 0; i<101;i++){
    loop6.push(i)
}
let l = loop6.reduce((acc,el)=>{
    return acc  + el
},0)
console.log(l)
// 7. Вам дан массив с элементами [2, 4, 5, 6, 8]. С помощью цикла for найдите сумму элементов этого массива.
// Запишите ее в переменную result.
let array = [1, 2, 3, 4, 5];
let result = 0;
for (let i = 0; i < array.length; i++) {
    result += array[i];
}
console.log(result);
// 8. Вам дан массив [3, 4, 6, 12, 3, 5].
// С помощью цикла for и оператора if выведите на экран столбец тех элементов массива,
// которые больше 3-х, но меньше 10.
let loop8 = [3, 4, 6, 12, 3, 5]
for (let i = 0; i<loop8.length; i++){
    if (loop8[i] > 3 && loop8[i] < 10){
        console.log(loop8[i])
    }
}
// 9. Вам дан массив с числами. Числа могут быть положительными и
// отрицательными. Найдите сумму положительных элементов массива.
let loop9 = [2,3,4,5,6,-9,-7,-4,-3]
for(let i = 0 ; i<loop9.length;i++){
    if( loop9[i]>0){
        console.log(loop9[i])
    }
}
// 10. Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20]. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4.
// Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
let loop10 = [5, 1, 3, 7, 6, 15, 3, 20]
for(let i = 0 ; i < loop9.length; i++){
    if(loop10[i]===3){
        loop10[i]='есть'
        break
    }
}
console.log(loop10)

// 11. Вам дан массив числами [10, 20, 30, 40, 135, 2000].
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
let arr = [10, 20, 30, 50, 235, 3000]
console.log(arr.filter(num => ['1','2','5'].includes(num.toString()[0])))

let arr11 = [10, 20, 30, 50, 235, 3000];

// for (let i = 0; i < arr11.length; i++) {
//     let num = String(arr11[i])
//     let char = num[0]
//     if (char === 1 || char === 2 || char = 5) {
//         console.log(num);
//     }
// }
// 12. Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9]. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
let loop12 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < loop12.length; i++){
    console.log(  '-' + loop12[i])
}
// function loop(x){
//     return x.map(el=>{
//         return el.replace(/,/g,'-')
//     })
// }
// console.log(loop([1, 2, 3, 4, 5, 6, 7, 8, 9]))
// 13. Вам дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50.
// Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
let n = 1000
// let num = 0
// while (n>50){
//     n/=2
//     num++
// }
// console.log(n,num)
for (let i = 0; n > 50; i++){
     n/=2
}
console.log(n)
// 14. Вам дан массив с числами [1, 2, 3, 7, 6, 9]. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).
let  arr14 = [1, 2, 3, 7, 6, 9];
let sum1 = 0;
for (let i = 0; i < arr14.length; i++) {
    sum1 += arr14[i];
}
let result14 = sum1 / arr.length;
console.log(result14);

//  15. Вам дан массив с числами [1, 2, 3, 4, 5]. С помощью цикла найдите сумму квадратов элементов этого массива.
let arr15 = [1, 2, 3, 4, 5]
let sum = 0
for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * arr[i];
}
console.log(sum);
// 16. Вам дан массив с числами [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]. С помощью цикла выведите только те элементы массива,
// которые больше нуля и меньше 10-ти.
let arr16 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for (let i = 0; i < arr.length; i++) {
    if(arr[i] > 0 && arr[i] < 10) {
        console.log(arr[i]);
    }
}
// 17. Создайте переменную с пустым массивом, заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.
let arr17 = [];
for (let i = 0; i < 10; i++) {
    arr17.push(Math.round(Math.random() * 10) + 1);
}
console.log(arr17);
// 18. Создайте цикл, который суммирует числа, кратные 3 и 5 до 1000.
let sum3 = 0
for(let i= 0; i<=1000;i++){
    if (i%3===0 && i%5===0){
        sum += i
    }
}
console.log(sum3)
// 19. Вам дан массив [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].Создайте цикл,
// который выводит нечетные числа, которые больше 10.
let loop19=[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
for (let i = 0 ; i<loop19.length;i++){
    if (loop19[i]%2!==0 && loop19[i]>10){
        console.log(loop19[i])
    }

}
// 20. Вам дана строка 'jzvzszrzpz'. Измените каждую вторую букву на верхний регистр.
let loop20 = 'jzvzszrzpz'
loop20 = loop20.split('')
for(let i = 0; i<loop20.length;i++){
    if (i%2===0){
        loop20[i] = loop20[i].toLowerCase()
    }else{
        loop20[i] = loop20[i].toUpperCase()
    }
}
let num = Math.pow(2,10)
console.log(num)