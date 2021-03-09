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

// function findOutlier(integers){
//   let a = []
//   let b = []
//   for (let i = 0; i < integers.length; i++) {
//       if (integers[i] % 2 !== 0) {
//           a.push(integers[i])
//       } else if (integers[i] % 2 === 0) {
//           b.push(integers[i])
//       }
//   }
//   if (a.length == 1) {
//       for (let i of a ) {
//           return i
//       }
//   }
//   if (b.length == 1) {
//       for (let j of b ) {
//           return j 
//       }
//   }
// }
// console.log(findOutlier([0, 1, 2]))

// function starSign(date) {
//     let month = date.getMonth() + 1
//     let dateNumber = date.getDate()
//     if (month === 1 && dateNumber >= 21 || month === 2 && dateNumber <= 19) return 'Aquarius'
//     if (month===2 && dateNumber >= 20 ||month===3 && dateNumber <= 20 ) return 'Pisces'
//     if (month===3 && dateNumber >= 21 ||month===4 && dateNumber <= 20 ) return 'Aries'
//     if (month===4 && dateNumber >= 21 ||month===5 && dateNumber <= 21 ) return 'Taurus'
//     if (month===5 && dateNumber >= 22 ||month===6 && dateNumber <= 21 ) return 'Gemini'
//     if (month===6 && dateNumber >= 22 ||month===7 && dateNumber <= 22 ) return 'Cancer'
//     if (month===7 && dateNumber >= 23 ||month===8 && dateNumber <= 23 ) return 'Leo'
//     if (month===8 && dateNumber >= 24 ||month===9 && dateNumber <= 23 ) return 'Virgo'
//     if (month===9 && dateNumber >= 24 ||month===10 && dateNumber <= 23 ) return 'Libra'
//     if (month===10 && dateNumber >= 24 ||month===11 && dateNumber <= 22 ) return 'Scorpio'
//     if (month===11 && dateNumber >= 23 ||month===12 && dateNumber <= 21 ) return 'Sagittarius'
//     if (month===12 && dateNumber >= 22 ||month===1 && dateNumber <= 20 ) return 'Capricorn'
// }

// console.log(starSign(new Date(1970, 5, 5)));


    // let a = [1, 2, 5, 10, 8]
    // let set = new Set(a)
    // let set1 = new Set([3, 4, 5, 8, 1])


    // let includes = new Set()

    // for (item of set) {
    //     if (set1.has(item)) {
    //         includes.add(item)
    //     }
    // }
    // console.log(set);
    
    // let a = {
    //     x: 1,
    //     y: 2,
    // }
    // let b = [...a]
    // b.x = 3
    // console.log(b);

// function killer(suspectInfo, dead) {
//     return /(?=.+[a-z])(?=.+\d)^[a-z\d]{3,20}$/i.test(password) ? 'VALID'
//  : 'INVALID'}
// console.log(killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']));

// /^(?=.*\d)(?=.*[A-Z])[A-Z\d]{4,19}$/i.test(password) ? 'VALID'
// : 'INVALID'