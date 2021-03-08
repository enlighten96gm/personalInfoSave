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


// const set = new Set([1, 5, 10, 9, 20])
// const set2 = new Set([1, 3, 5, 10])

// const inersaction = new Set()

// for (let item of set) {
//     if (set2.has(item)) {
//         inersaction.add(item)
//     }
// }
// console.log(inersaction);


// function divCon(x){
// let a = new Set()
// let b = new Set()
// x.forEach(element => {
//     if ( typeof element === 'number') {
//         a.add(Number(element))
//     } else if ( typeof element === 'string') {
//         b.add(element)
//     }
// });
// let newNumber = 0
//     for (let i of b) {
//         let number = Number(i)
//         newNumber -= number
        
//     }
//     for (let i of a) {
//         let number = Number(i)
//         newNumber += number
//         console.log(number)
//     }
//     return newNumber
// }

// function divCon(x){
//     let number = 0
//     let a = []
//     let b = []
//     x.forEach(element => {
//         if (typeof element === 'number') {
//             a.push(element)
//         } else if (typeof element === 'string') {
//             b.push(Number(element))
//         }
//     });
//     for (let i of a) {
//         number += i
//     }
//     for (let i of b) {
//         number -= i
//     }
//     return number
// }

// console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']));

// function findOdd(A) {
//     let number = 0
//     for (let i = 0; i < A.length; i++) {
//         for (let j = 0; j < A.length; j++) {
//             if (A[i] === A[j]) {
//                 number++
//             }
//         }
//         if (number % 2 != 0) {
//             return A[i]
//         }
//     }
// }

// console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));

function findOutlier(integers){
  let a = []
  let b = []
  for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 !== 0) {
          a.push(integers[i])
      } else if (integers[i] % 2 === 0) {
          b.push(integers[i])
      }
  }
  if (a.length == 1) {
      for (let i of a ) {
          return i
      }
  }
  if (b.length == 1) {
      for (let j of b ) {
          return j 
      }
  }
}
console.log(findOutlier([0, 1, 2]))