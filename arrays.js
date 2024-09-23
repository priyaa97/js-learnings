let myArr=[1,2,3,4]
//console.log(myArr)
myArr.push(6)
console.log(myArr)
myArr.pop(6)
console.log(myArr)
myArr.unshift(-1)
console.log(myArr)
myArr.shift(1)
console.log(myArr)
console.log(myArr.includes(9));
console.log(myArr.indexOf(4));
const newArr = myArr.join()
console.log(newArr)
console.log(myArr)
console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1)
const myn2 = myArr.splice(1, 3)
console.log(myn2)
console.log(myArr)