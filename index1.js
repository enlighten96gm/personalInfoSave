// function duplicateEncode(word){
//     let state = {

//     }
//     result = []
//     var letters = word.toLowerCase().split('');
//     letters.forEach(letter => {
//         state[letter] = (state[letter] || 0) + 1
//     })
//     letters.forEach(letter => {
//         if (state[letter] === 1) {
//             result.push('(')
//         } else {
//             result.push(')')
//         }
//     })
//     return result.join('')
//   }

// console.log(duplicateEncode("recede"));

// function squares(x, n) {
//     var sqare = [];
//     for(var i=0; i<n; i++){
//         sqare.push(x);
//       x*= x;
//     }
//     return sqare
// }

// console.log(squares(5,3));

// Array(n).fill(1).map((e, item) => {
//     item++
//     arr.push(item)
// })

// function checkConcatenatedSum(num, n) {
//     let smt = Math.abs(num)
//     let newNum = smt.toString().split('')
//     console.log(newNum);
//     let arr = 0
//     for (let i = 0; i < newNum.length ; i++) {
//         arr += Number(newNum[i].repeat(n))
//     }
//     if (num === arr || num === -arr) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(checkConcatenatedSum(2997,3));

// var FilterString = function(value) {
//     let newArr = value.split('')
//     let arr = []
//     var filtered = newArr.filter(function (item) {
//         if (parseInt(item) == item) {
//             arr.push(item)
//         }
//       });
      
//       return Number(arr.join(''))
// }

// console.log(FilterString("a1b2c3"));

// const nthFibo = n => {
//     let newN = n - 1
//     return newN <= 1 ? newN : nthFibo(newN - 1) + nthFibo(newN - 2);
// }
// console.log(nthFibo(6));


const set = new Set([1, 5, 10, 9, 20])
const set2 = new Set([1, 3, 5, 10])

const inersaction = new Set()

for (let item of set) {
    if (set2.has(item)) {
        inersaction.add(item)
    }
}
console.log(inersaction);