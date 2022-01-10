// MUTATION
//
// let a = [4,6,8,3,2,5,8]
// let b = a
// let x = [...b]
// a=a.sort((s,f)=>s-f)
// console.log(a)
// console.log(b)
// console.log(x)
// //SPREAD OPERATOR -- ...
const task1 = (arr) => {
  arr=arr.split('')
    return  arr.map((el)=>{
        if (el>5){
            return arr.reverse()
        }else {
            return arr
        }
    })

}
console.log(task1([Shrin,Diana,Umut]))

// REST OPERATOR ...
function myFunc(a,b,...rest){
    return rest.length
}

console.log(myFunc(1,2,3,5,6,'Shirin'))

function sum(...rest){
    return arguments.length
}

console.log(sum(1,2,3,4,5))
