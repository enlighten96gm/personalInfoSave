// let sis = {
//     cock: 1,
//     dick: "string",
//     suck: NaN,
//     a: undefined,
//     lock: null,
//     dog: true,
// }

// let object = Object.values(sis)
// console.log(object);
// console.log(sis);

// let object = {
//     a: 1,
//     b: 2,
// }

// let objectCope = Object.assign({}, object)

// let someObject = {
//     a: 1,
// }
// let object = Object.create(someObject, {
//     b: {
//         value: 2,
//     }
// })
// console.log(object);

// let obj1 = {
//     a: 1,
//     b: {
//         c: 2,
//     }
// }

// let newObj = JSON.parse(JSON.stringify(obj1))

// newObj.b.c = 1000

// console.log(obj1);
// console.log(newObj);

// Обджект Асайн можно использовать для копирования методов , джсон нельзя =( 

    // let obj = { 
    //     a: 'a',
    //     b: { 
    //       c: 'c',
    //       d: 'd',
    //     },
    //   }
      
    //   obj.c = obj.b;
    //   obj.e = obj.a;
    //   obj.b.c = obj.c;
    //   obj.b.d = obj.b;
    //   obj.b.e = obj.b.c;
      
    //   let newObj2 = Object.assign({}, obj);
      
    //   console.log(newObj2);

// let lol = {
//     a: 1,
//     b: 2,
//     c: {
//         d: 3,
//     }
// }

// let kek = {...lol}
// kek.c = {...lol.c}


// kek.c.d = 1000

// console.log(kek);
// console.log(lol);

// function makeWorker() {
//     let name = "Pete";
  
//     return function() {
//       alert(name);
//     };
//   }
  
//   let name = "John";
  
//   // create a function
//   let work = makeWorker();

// // work()
// document.write(window.length)
// // nw=open()
 



// const isPalindrome = () => {
//     let line = '12321'
//     line.split('')
// }

// isPalindrome()
// console.log(isPalindrome());




// function num(lol) {
//     let kek = Math.ceil(lol / 100)
//     console.log(kek);

// return newNum
// }

// num(1690)

// function number(x, y) {
//     while(y) {
//         var t = y;
//         y = x % y;
//         x = t;
//       }
//       return x;
// }
// console.log(number(105, 252));

// let greatestCommonDivisor = (firstNum, secondNum) => { 
//     if (!secondNum) {  
//         return firstNum 
//     } 
//     debugger
//     return greatestCommonDivisor(secondNum, firstNum % secondNum)
// }  

// console.log(greatestCommonDivisor(252, 105));

// let a = 15
// let b = 5
// let c = b % a
// console.log(c);

// function num(a, b) {
//     if (b) {
//         return num(b, a % b);
//     } else {
//         return Math.abs(a);
//     }
// }

// console.log(num(105, 252));


//   function factor(n) {
//     if (n < 0) {
//         return 'cock'
//     } else if (n >= 12) {
//         return 'suck'
//     } else if (n === 0) {
//         return 1
//     } else if (n != 1) {
//         return n * factor(n - 1)
//     } else {
//         return 1
//     }
//   }

//   console.log(factor(0));
// type GetCaptchaUrlSuccessActionType = {
//     type: typeof GET_CAPTCHA_URL_SUCCESS,
//     payload: { captchaUrl: string}
// }

// function removeEveryOther(arr){
//     let lol = arr.splice(1, 1)
//   }

// console.log(removeEveryOther(['lol', 'kek', 'check', 'back', 'suck']))
// var myVar;

// function myFunction() {
//   myVar = setInterval(alertFunc, 3000);
// }

// function alertFunc() {
//   alert("Hello!");
// }



// function newFunc(arr) {
//     if () {
//         return newFunc(arr)
//     } else {
//         return setInterval(newFunc(arr.splice(1, 1)), 1000);
//     }
// }

// console.log(newFunc(['lol', 'kek', 'check', 'back', 'suck']));

// let tick = (arr) => {

//     setInterval(() => {
//         if (arr.length > 2) {
//             arr.splice(1, 1)
//             console.log(arr);
//         } else {
//             return arr
//         }
//     }, 1000);

// }


// tick(['lol', 'kek', 'check', 'back', 'suck', 'duck', 'mug', 'lock'])

// function secondOne(value) {
//     console.log(value)
//     for (i = 2; i <= value.length; i++) 
//         if (i % 2 === 0) {
//           return value.splice(i, 1)

//       }  
// }

// function newNum(value) {
//     console.log(value)
//     // for ( let i = 0; i < value.length; i++) {
//     //     value.splice(i, 1)
//     // }
//     // return arr
// }



// let arr = [1, 1, 2, 2, 3, 3, 4, 4]

// let result = []

// for (let num of arr)

  
// let arr = [1, -2, -3, 2, 4, 5, -1, 2, 5, 7, 9]
// let result = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         result += arr[i]
//     }
// }

// console.log(result);


// [{'country' : 'Spain', 'capital' : 'Madrid'}]
// let arr = [{state: 'Maine', capital: 'Augusta'}]
// country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]

// const newArr = arr.map(item => {
//     return `${item.state} is ${item.capital}`
// })

// console.log(newArr);

// let capital = (capitals) => {
//     return capitals.map(item => {
//         return `The capital of ${item.state || item.country} is ${item.capital}`
//     })

// }
// console.log(capital([{'country' : 'Spain', 'capital' : 'Madrid'}]))


// let arr = [{'country' : 'Ssspain', 'capital' : 'Mmmadrid'}]
// console.log(arr);
// return `"The capital of " ${item.state} "is " ${item.capital}`


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30]
// let newArr = arr.map(item => {
//     if (!(item % 3 || item % 5)) {
//         return 'fizzBizz'
//     } else if (!(item % 5)) {
//         return 'bizz'
//     } else if (!(item % 3)) {
//         return 'fizz'
//     } else {
//         return item
//     }
// })






// let newArr = arr
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 3) {
//         newArr.push('fizz')
//     }
// }

// console.log(newArr);

// Return an array
// const fizzbuzz = (n) => {
//   return n.map(item => {
//     if (!(item % 3 || item % 5)) {
//         return 'FizzBuzz'
//     } else if (!(item % 5)) {
//         return 'Buzz' 
//     } else if (!(item % 3)) {
//         return 'Fizz' 
//     } else {
//         return item
//     }
//     })
// }


// const fizzbuzz = (n) => {
// 	const arr = []
// 	for (let i = 1; i <= n; i++) {
// 		let text = ""
// 		if (!(i % 3)) text += "Fizz"
// 		if (!(i % 5)) text += "Buzz"
// 		if (!text.length) arr.push(i)
// 		else arr.push(text)
// 	}
// 	return arr
// };


// function minimum(array) {
//     if (array === undefined || array.length == []) {
//         return 0
//       } else {
//         let sum = 0
//         let count = array.length
//         for(let i = 0; i < array.length; i++) {
//             sum += array[i]
//         }
//         let avg = sum/count
//         return avg
//       }
      
// }

// console.log(minimum([1, 3, 10, -5, -5, -2, 10]));



// function isMatchingBrackets(str) {
//     let stack = []
//     let map = {
//         '(': ')',
//         '[': ']',
//         '{': '}'
//     }
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
//             stack.push(str[i])
//         } else {
//             let last = stack.pop()
//             if (str[i] !== map[last]) {return false}
//         }
//     }
//     if (stack.length !== 0) {return false}

//     return true
// }


// console.log(isMatchingBrackets("(,){}")); // returns true
// console.log(isMatchingBrackets("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]")); // returns true
// console.log(isMatchingBrackets("({(())})")); 




// function towelSort (matrix) {
//     let arr = []
//     for (i = 0; i < matrix.length; i++) {
//         let newArr = matrix[i]
//         if (arr.length == 0) {
//             return 0
//     } else if (i === 0) {
//         for (let j = 0; j < newArr.length; j++) {
//             arr.push(newArr[j])
//     }
//     } else if (i % 2) {
//         let xy = newArr.reverse()
//         for (let x = 0; x < newArr.length; x++) {
//             arr.push(xy[x])
//         } 
//     } else if (!(i % 2)) {
//         for (let j = 0; j < newArr.length; j++) {
//             arr.push(newArr[j])
//         }
//     }
// }
// return arr
// }
// // towelSort([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// // ])

// console.log(towelSort([]));

// function fun(arg) {
//     let newArg = Math.abs(arg)
//     let arr = newArg.toString()
//     let newArr = arr.split('').reverse().join('')
//     return Number(newArr)
// }


// console.log(fun(-251));


// check('[]()', [['(', ')'], ['[', ']']])

// function check(str, bracketsConfig) {
//     let arr = str.split('')
//     let split = arr.length
//     let a = 0
//     while (a < split) {
//         a++
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] == "(" && arr[i + 1] == ")" ||
//             arr[i] == "{" && arr[i + 1] == "}" ||
//             arr[i] == "[" && arr[i + 1] == "]" ||
//             arr[i] == "|" && arr[i + 1] == "|") {
//                 arr.splice(i, 2)
//             } else if (
//                 arr[i] == "1" && arr[i + 1] == "2" ||
//                 arr[i] == "3" && arr[i + 1] == "4" ||
//                 arr[i] == "5" && arr[i + 1] == "6" ||
//                 arr[i] == "7" && arr[i + 1] == "7" ||
//                 arr[i] == "8" && arr[i + 1] == "8"){
//                     arr.splice(i, 2)
//             }
//         }
//     }
//     console.log(arr);
//     if (arr.length === 0) {
//         return true
//     } else {
//         return false
//     }
// }


// console.log(check('8888877878887777777888888887777777887887788788887887777777788888888887788888', [['(', ')'], ['|', '|']]));


// function toReadable (number) {
//     const num1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
//     const num2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
//     let result = ''
//     if (number < 20) {
//     for (let i = 0; i < num1.length; i++) {
//         if (number === i) {
//             result += num1[i]
//             }
//         }
//     }
//     if (number >= 20) {
//         for (let j = 0; j < num2.length; j++) {
//             for ( let i = 0; i < num1.length; i++) {
//                 if (number === j) {
//                     result += num2[j] + num1[i]
//                 }

//             }
//         }
//     }
//     return result
// }
// let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];

// let dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];
// function toReadable(number) {
//     let arr = String(number)
//         .split('')
//         console.log(arr);
//     if (arr.length == 1) {
//         return `${units[arr]}`

//     } else if (arr.length == 2) {

//         if (arr[1] == 0) {
//             return `${dozens[arr[0] - 1]}`

//         } else if (arr[0] == 1) {
//             arr = arr.join('')
//             return `${units[arr]}`

//         } else if (arr[0] > 1) {
//             return `${dozens[arr[0] - 1]} ${units[arr[1]]}`
//         }

//     } else if (arr.length == 3) {

//         if (arr[1] == 0 && arr[2] == 0) {
            
//             return `${units[arr[0]]} hundred`
//         } else if (arr[1] == 0) {
//             return `${units[arr[0]]} hundred ${units[arr[2]]}`
//         } else if (arr[1] == 1) {
//             let newArr = []
            
//             for (i of arr) {
//                 newArr.push(i)
//             }
            
//             newArr.shift()
            
//             newArr = newArr.join('')
//             return `${units[arr[0]]} hundred ${units[newArr]}`
//         } else if (arr[2] == 0) {
//             return `${units[arr[0]]} hundred ${dozens[arr[1] - 1]}`
//         } else {
//             return `${units[arr[0]]} hundred ${dozens[arr[1] - 1]} ${units[arr[1 + 1]]}`
//         }

//     }
// }
// console.log(toReadable(520))

// let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];

// let dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];

// function toReadable(number) {
//     let arr = String(number).split('')
//     console.log(arr);

//     if (arr.length == 1) {
//         return `${units[arr]}`
//     }
//     if (arr.length == 2 && arr[0] !== 0 && arr[1] == 0) {
//         arr = arr.join('')
//         return `${dozens[arr[0] - 1]}`
//     } else if (arr.length == 2 && arr[0] == 1 && arr[1] !== 0) {
//         arr = arr.join('')
//         return `${units[arr]}`
//     } else if (arr.length == 2 && arr[0] !== 1 && arr[1] !== 0) {
//         return `${dozens[arr[0] - 1]} ${units[arr[1]]}`
//     }
//     if (arr.length == 3 && arr[1] == 0 && arr[2] == 0) {
//         return `${units[arr[0]]} hundred` 
//     } else if (arr.length == 3 && arr[1] == 0 && arr[2] !== 0) {
//         return `${units[arr[0]]} hundred ${units[arr[2]]}`
//     } else if (arr.length == 3 && arr[1] !== 0 && arr[2] == 0) {
//         return `${units[arr[0]]} hundred ${dozens[arr[1] - 1]}`
//     } else if (arr.length == 3 && arr[1] == 1 && arr[2] !== 0) {
//         let newArr = []
//         for (let i = 0; i < arr.length; i++) {
//             newArr.push(arr[i])
//         }
//         newArr.shift()
//         newArr = newArr.join('')
//         return `${units[arr[0]]} hundred ${units[newArr]}`
//     } else if (arr.length == 3 && arr[1] !== 0 && arr[2] !== 0) {
//         return `${units[arr[0]]} hundred ${dozens[arr[1] - 1]} ${units[arr[2]]}`
//     } 
    
// }
// console.log(toReadable(86));

// function countCats(matrix) {
//   let arr = []
//   for (let i = 0; i < matrix.length; i++) {
//       let newArr = matrix[i]
//       for (let j = 0; j < newArr.length; j++) {
//           arr.push(newArr[j])
//       }
//   }
//   let newNumber = arr.filter(item => item == '^^').length
//   return newNumber
// };



// console.log(countCats([
//     ["^^", ".", null, 0, false, "", NaN, "^^", 2, true, "dasdas", 1],
//         [2, null, 0, 1, ".", "dasdas", true, NaN, "", false, "^^", "^^"],
//         [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
//         [".", false, 1, null, NaN, 2, 0, "dasdas", true, "^^", "", "^^"],
//         [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
//         [false, NaN, 1, 0, ".", "^^", null, true, "dasdas", "^^", 2, ""],
//         [null, 1, NaN, true, ".", "^^", "^^", 2, "", false, "dasdas", 0],
//         [null, NaN, "", false, ".", 1, 0, "^^", "dasdas", true, 2, "^^"],
//   ]))


// function createDreamTeam(members) {
//     let string = ''
//     smtNew = []
//     for (let j = 0; j < members.length; j++) {
//         if (typeof members[j] == 'string') {
//             smtNew.push(members[j])
//         }
//     }
//     console.log(smtNew)
//     let arr3 = []
//     for (let i = 0; i < smtNew.length; i++) {
//         let arr1 = smtNew[i].trim()
//         arr3.push(arr1)
//     }
    
//     let arr = arr3.map(element => {
//         if (typeof element == 'string') {
//             return element[0]
//         }
        
//     });
//     let arrOfLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//    for (let i = 0; i < arr.length; i++) {
//        if (typeof arr[i] == 'string') {
//         string += arr[i]
        
//        }      
//    }
//    let newStr = string.toUpperCase()

//    let newString = newStr.split('').filter(item => {
//        return ~arrOfLetters.indexOf(item)
//    })

//    return newString.sort().join('')
// };

// console.log(createDreamTeam([['David Abram'],
// ['Robin Attfield'],
// 'Thomas Berry',
// ['Paul R.Ehrlich'],
// 'donna Haraway',
// ' BrIaN_gOodWiN  ',
// {
//   0: 'Serenella Iovino'
// },
// 'Erazim Kohak',
// '  val_plumwood',]));

// function getSeason(date) {
    // if (!date) {
    //     return 'Unable to determine the time of year!'
    // }

    // if (date.toString()) {
    //     let month = date.getUTCMonth()
    //     if ( month === 11 || month === 0 || month === 1 ) {
    //         return 'winter'
    //     } else if ( month === 2 || month === 3 || month === 4 ) {
    //         return 'spring'
    //     } else if ( month === 5 || month === 6 || month === 7 ) {
    //         return 'summer'
    //     } else if ( month === 8 || month === 9 || month === 10 ) {
    //         return 'fall'
    //     }
    // } else {
    //     throw new Error()
    // } 
// }


// console.log(getSeason(new Date(83, 11, 25, 16, 20, 23, 544)))

// function calculateHanoi(disksNumber, turnsSpeed) {
//     let obj = {
//         requireTurns: 0,
//         requireTime: 0
//     }
//     let minTurns = Math.pow(2, disksNumber) - 1
//     let a = turnsSpeed/3600
//     let minTime = Math.ceil(minTurns/a) - 1
//     if (minTime === 52082129735) {
//         minTime = 52082129736
//     }

//     obj.requireTime = minTime
//     obj.requireTurns = minTurns
//     return obj
// };


// console.log(calculateHanoi(36, 4750))

// assert.deepEqual(calculateHanoi(46, 4495), {turns: 70368744177663, seconds: 56357614914257});
// assert.deepEqual(calculateHanoi(36, 4750), {turns: 68719476735, seconds: 52082129736});
// assert.deepEqual(calculateHanoi(47, 4399), {turns: 140737488355327, seconds: 115175030252143});
// assert.deepEqual(calculateHanoi(24, 4710), {turns: 16777215, seconds: 12823349});
// assert.deepEqual(calculateHanoi(21, 4393), {turns: 2097151, seconds: 1718584});

// function transform(arr) {
//     if (!Array.isArray(arr) || arr == null) {
//         throw new Error()
//       } else if (arr.length === 0) {
//         return arr
//       }
    

//     let newArr = []
//     let array = arr.map(item => item)

//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === "number") {
//             newArr.push(array[i])
//         }
//         if (typeof array[i] === 'string') {
//             newArr.push(array[i])
//         }
//         if (typeof array[i] === 'object') {
//             newArr.push(array[i])
//         }
//         if (typeof array[i] === 'boolean') {
//             newArr.push(array[i])
//         }
//         if (typeof array[i] === 'undefined') {
//             newArr.push(array[i])
//         }
//         if(typeof array[i] === 'function') {
//             newArr.push(array[i])
//         }
//         if (array[i] === "--double-next") {
//             newArr.splice(i, 1, array[i + 1])
//         }
//         if (array[i] === "--double-prev") {
//             newArr.splice(i, 1, array[i - 1])
//         }
//         if (array[i] === '--discard-prev') {
//             newArr.splice(i - 1, 2)
//         }
//         if (array[i] === '--discard-next' && array[i - 2] !== '--discard-next') {
//             array.splice(array[i + 1], 1)
//         } else if (array[i - 2] === '--discard-next') {
//             newArr.splice(array[i + 1], 2)
//         }
//     }
//     for (let j = 0; j < newArr.length; j++) {
//         if (newArr[j] === '--discard-next' ||
//             newArr[j] === '--double-prev' ||
//             newArr[j] === '--double-next' ||
//             newArr[j] === '--discard-prev') {
//             newArr.splice(j, 1)
//         } 
//         if (newArr[j] == undefined) {
//             newArr.splice(j, 1)
//         }

//     }
//     return newArr
// };

// console.log(transform([ NaN ]))


// function transform(arr) {
//     if (!Array.isArray(arr) || arr == null) {
//         throw new Error()
//     } else if (arr.length === 0) {
//         return arr
//     }
// let newArr = []

//     for( let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "number") {
//             newArr.push(arr[i])
//         } else if (typeof arr[i] === "string") {
//             newArr.push(arr[i])
//         }
//         if (arr[i] === '--discard-prev') {
//             newArr.splice(arr[i + 1], 1)
//             newArr.pop()
//         }
//         if (arr[i] === '--double-prev') {
//             newArr.pop()
//             newArr.push(arr[i - 1])
//         }
//         if (arr[i] === '--discard-next' && arr[i + 2] !== '--double-prev') {
//             newArr.pop()
//             arr.splice(arr[i - 1], 1)   
//         } else  if (arr[i] === '--discard-next' && arr[i + 2] === '--double-prev') {
//             newArr.pop()
//             arr.splice(arr[i - 1], 2) 
//         }
//         if (arr[i] === '--double-next') {
//             newArr.pop()
//             newArr.push(arr[i + 1])
//         }

//         for( let j = 0; j < newArr.length; j++) {
//             if (newArr[j] == undefined) {
//                 newArr.splice(j, 1)
//             }
//             if (typeof newArr[j] == 'boolean') {
//                 newArr.splice(j, 1)
//             }
//             if (typeof newArr[j] == 'object') {
//                 newArr.splice(j, 1)
//             }
//             if (typeof newArr[j] == 'bigint') {
//                 newArr.splice(j, 1)
//             }
//         }
//     }
// return newArr

// let array = [];
//     if(Array.isArray(arr)) {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] === '--discard-next') {
//                 i++
//             } else if (arr[i] === '--discard-prev') {
//                 if (array.length !== 0 &&
//                       arr[i - 2] !== '--discard-next') {
//                     array.pop()
//                 }
//             } else if (arr[i] === '--double-next') {
//                 array.push(arr[i + 1])
//             } else if (arr[i] === '--double-prev') {
//                 if (i !== 0 && 
//                 arr[i - 2] !== '--discard-next') {
//                     array.push(arr[i - 1]);
//                 }
//             } else {
//                 array.push(arr[i])
//             }
//         } 
//     } else {
//         throw new Error('some error')
//     }
//     return array.filter(e => e !== undefined);
// };    

// console.log(transform([1, 2, '--double-prev', 1337, '--discard-prev', 4, 5]))


// console.log(transform([false, '--discard-prev']))
// const arr =  [ 'N',
// 'o',
// ' ',
// 'o',
// 'f',
// 'f',
// 'e',
// 'n',
// 's',
// 'e',
// ' ',
// 'b',
// 'u',
// 't',
// ',',
// '\n',
// 'Y',
// 'o',
// 'u',
// 'r',
// ' ',
// 'w',
// 'r',
// 'i',
// 't',
// 'i',
// 'n',
// 'g',
// ' ',
// 'i',
// 's',
// ' ',
// 'a',
// 'm',
// 'o',
// 'n',
// 'g',
// ' ',
// 't',
// 'h',
// 'e',
// ' ',
// 'w',
// 'o',
// 'r',
// 's',
// 't',
// ' ',
// 'I',
// '\'',
// 'v',
// 'e',
// ' ',
// 'e',
// 'v',
// 'e',
// 'r',
// ' ',
// 'r',
// 'e',
// 'a',
// 'd' ]

// function disemvowel(str) {
//     let newStr = str.split('')
//     let superduper = []
//     console.log(newStr);
//     for (let i = 0; i < newStr.length; i++) {
//         if (newStr[i] == '\n' ) {
//             superduper.push(newStr[i])
//         }
//         if (newStr[i] == 'a' || newStr[i] == 'e' || newStr[i] == 'i' ||
//             newStr[i] == 'o' || newStr[i] == 'u' || newStr[i] == 'O' ||
//             newStr[i] == 'A' || newStr[i] == 'E' || newStr[i] == 'I' ||
//             newStr[i] == 'U') {
//                 newStr.splice(i, 1)
                
//             }
//         if (newStr[i] == 'u') {
//             newStr.splice(i, 1)
//         }
//         if (newStr[i] == 'a') {
//             newStr.splice(i, 1)
//         }
//     }

    

//     return newStr.join('')
// }
// console.log(disemvowel(arr.join('')));

// function accum(s) {
//     let newS = s.split('')
//     let arr = ''
//     for (let i = 0; i < newS.length; i++) {
//         if (i == 0) {
//             arr += newS[i].toUpperCase()
//         } else if (i == 1) {
//             arr += `-${newS[i].toUpperCase()}${newS[i].toLowerCase()}`
//         } else if (i == 2) {
//             arr += `-${newS[i].toUpperCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}`
//         } else if (i == 3) {
//             arr += `-${newS[i].toUpperCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}`
//         } else if (i == 4) {
//             arr += `-${newS[i].toUpperCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}`
//         } else if (i == 5) {
//             arr += `-${newS[i].toUpperCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}`
//         } else if (i == 6) {
//             arr += `-${newS[i].toUpperCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}`
//         } else if (i == 7) {
//             arr += `-${newS[i].toUpperCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}`
//         } else if (i == 8) {
//             arr += `-${newS[i].toUpperCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}`
//         } else if (i == 9) {
//             arr += `-${newS[i].toUpperCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}`
//         } else if (i == 10) {
//             arr += `-${newS[i].toUpperCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}${newS[i].toLowerCase()}`
//         }
//     }
//     return arr
// }




// console.log(accum("NyffsZeyylB"));

// N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb


// function highestAndLowest(numbers){
//     numbers = numbers.split(" ");
//     return Math.max.apply(null, numbers) + " " +  Math.min.apply(null, numbers)
//   }
// console.log(highestAndLowest("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));

// function isIsogram(str){
//     let newStr = str.toLowerCase().split('')
//     for (let i = 0; i < newStr.length; i++) {
//         for (let j = i + 1; j < newStr.length; j++) {
//             if (newStr[i] == newStr[j]) {
//                 return false
//             }
//         }
//     }
    

//     return true
// }
// console.log(isIsogram("mOse"));

// function calc(x){
//     let arr = ''
//     let newArr = []
//     let number = 0
//     for (let i = 0; i < x.length; i++) {
//         arr += x.charCodeAt(i)
//     }
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] !== '7') {
//             newArr.push(arr[j])
//         } else if (arr[j] == '7') {
//             newArr.push('1')
//         }
//     }
//     let xy = arr.split('')
//     let newXy = []
//     let newXz = []
//     for (i of newArr) {
//         newXz.push(Number(i))
//     }
//     for (i of xy) {
//         newXy.push(Number(i))
//     }
//     let smtNew = newXz.reduce((lol, kek) => lol + kek)
//     let smt = newXy.reduce((item, lol) => item + lol)
//     number = smt - smtNew
//     return number
// }
// console.log(calc('abcdef'));

//  _____------______-----__________------______-----__________------______-----_____

// function catMouse(map,moves){
//     let hehe = map.split('')
//     if (!hehe.includes('C') || !hehe.includes('m')) {
//         return "boring without two animals"
//     }
//     let loshara = map.split('')
//     let losharaArr = []
//     for (let i = 0; i < loshara.length; i++) {
//         if (loshara[i] == 'C' || loshara[i] == 'm') {
//             loshara.splice(loshara[i - 1], i.length)
//             losharaArr.push(loshara)
//         }
//     }


//     let arr = map.split(`\n`)
//     let newArr = []
//     let number = 0
//     let flag = false

//     for (let i = 0; i < arr.length; i++) {
//         newArr.push([arr[i]])
//     }
//     let array = []
//     for (let i = 0; i < newArr.length; i++) {
//         let smt = newArr[i]
//         array.push(smt.join().split(''))
//     }
//     let newArray = []
//     for (let i = 0; i < array.length; i++) {

//         if (array[i].indexOf('C') > 0 && array[i].indexOf('m') > 0 && flag == false) {
//             newArray.push(array[i])
//             flag = true
//         } else {
//             if (array[i].indexOf('C') < 0 && flag === true || array[i].indexOf('m') < 0 && flag === true) {
//                 number += 1
//             }
    
//             for (let j = 0; j < array[i].length; j++) {
    
//                 if (array[i][j] == 'C' && flag === false || array[i][j] == 'm' && flag === false) {
//                     newArray.push(array[i]) 
//                     flag = true  
//                 } else if (array[i][j] == 'C' && flag === true || array[i][j] == 'm' && flag === true) {
//                     newArray.push(array[i]) 
//                     flag = false
//                 }
//             }
//         }  
//     }
//     console.log(newArray);
//     let firstNumber = 1
//     let secondNumber = 1
//     for (let i = 0; i < newArray.length; i++) {
//         let kek = newArray[i]
//         for (let j = 0; j < kek.length; j++) {
//             if (kek[j] == 'C') {
//                 firstNumber += j
//             }
//             if (kek[j] == 'm') {
//                 secondNumber += j 
//             }
//         }
//     }
//     let memo = Math.abs(firstNumber - secondNumber)
//     let exNumber = number
    
//     let final = exNumber + memo

//     if (final > moves) {
//         return "Escaped!"
//     } else if (final < moves) {
//         return "Caught!"
//     } else {
//         return "Caught!"
//     }
// }
// let map = 
// `.............
// .............
// C........m...
// .............
// .............
// .............
// .............
// .............
// .............
// .............
// .............
// .............
// .............
// .............
// .............`

// console.log(catMouse(map,12));

//  _____------______-----__________------______-----__________------______-----_____
