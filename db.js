// Database of questions

const basicQuestions = [
    {
        question: "/* Declare a variable 'words' and set it to an array containing the strings 'apple', 'artichoke', 'almond' and 'apricot'. */",
        test: "/* console.log(words) */",
        category: "Basic",
        difficulty: 1 
    },
    {
        question: "/* Declare a variable 'numbers' and set it to an array containing the integers 11 through 17. */",
        test: "/* console.log(numbers) */",
        category: "Basic",
        difficulty: 1 
    }
];

const functionQuestions = [
    // Easy
    {
      question: '/* Write a function called "multiplyByTwo" that takes a number as an argument and returns the result of multiplying that number by 2. */',
      test: '/* function multiplyByTwo(number) {<br>   return number * 2;<br> }<br><br> const result = multiplyByTwo(5);<br> console.log(result);  // Should output 10 */',
      category: "Functions",
      difficulty: 1
    },
    {
      question: '/* Write a function called "addTwoNumbers" that takes two numbers as arguments and returns the sum of these two numbers. */',
      test: '/* function addTwoNumbers(num1, num2) {<br>   return num1 + num2;<br> }<br><br> const sum = addTwoNumbers(3, 7);<br> console.log(sum);  // Should output 10 */',
      category: "Functions",
      difficulty: 1
    },
    {
      question: '/* Write a function called "isEven" that takes a number as an argument and returns true if the number is even and false if it is odd. */',
      test: '/* function isEven(number) {<br>   return number % 2 === 0;<br> }<br><br> console.log(isEven(4));  // Should output true<br> console.log(isEven(7));  // Should output false */',
      category: "Functions",
      difficulty: 1
    },
    {
      question: '/* Write a function called "square" that takes a number as an argument and returns the square of that number. */',
      test: '/* function square(number) {<br>   return number * number;<br> }<br><br> const squared = square(3);<br> console.log(squared);  // Should output 9 */',
      category: "Functions",
      difficulty: 1
    },
  
    // Medium
    {
      question: '/* Write a function called "calculate" that takes two numbers and returns the sum, difference, product, and quotient of these two numbers in an object. */',
      test: '/* function calculate(num1, num2) {<br>   return {<br>     sum: num1 + num2,<br>     difference: num1 - num2,<br>     product: num1 * num2,<br>     quotient: num1 / num2,<br>   };<br> }<br><br> const result = calculate(5, 2);<br> console.log(result);  // Should output { sum: 7, difference: 3, product: 10, quotient: 2.5 } */',
      category: "Functions",
      difficulty: 2
    },
    {
      question: '/* Write a function called "generateRandomNumber" that takes a minimum and maximum value and returns a random number within that range (inclusive). */',
      test: '/* function generateRandomNumber(min, max) {<br>   return Math.floor(Math.random() * (max - min + 1)) + min;<br> }<br><br> const randomNum = generateRandomNumber(1, 10);<br> console.log(randomNum);  // Should output a random number between 1 and 10 */',
      category: "Functions",
      difficulty: 2
    },
    {
      question: '/* Write a function called "reverseString" that takes a string as an argument and returns the reversed version of that string. */',
      test: '/* function reverseString(str) {<br>   return str.split("").reverse().join("");<br> }<br><br> const reversed = reverseString("hello");<br> console.log(reversed);  // Should output "olleh" */',
      category: "Functions",
      difficulty: 2
    },
    {
      question: '/* Write a function called "calculateFactorial" that takes a number as an argument and returns its factorial. */',
      test: '/* function calculateFactorial(num) {<br>   if (num === 0 || num === 1) {<br>     return 1;<br>   } else {<br>     return num * calculateFactorial(num - 1);<br>   }<br> }<br><br> const factorial = calculateFactorial(5);<br> console.log(factorial);  // Should output 120 */',
      category: "Functions",
      difficulty: 2
    },
  
    // Hard
    {
      question: '/* Write a function called "capitalizeWords" that takes a sentence as an argument and returns the sentence with each word capitalized. */',
      test: '/* function capitalizeWords(sentence) {<br>   return sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");<br> }<br><br> const capitalized = capitalizeWords("this is a test sentence");<br> console.log(capitalized);  // Should output "This Is A Test Sentence" */',
      category: "Functions",
      difficulty: 3
    },
    {
      question: '/* Write a function called "findLargestNumber" that takes an array of numbers as an argument and returns the largest number in the array. */',
      test: '/* function findLargestNumber(numbers) {<br>   return Math.max(...numbers);<br> }<br><br> const numbers = [15, 3, 7, 22, 18];<br> const largest = findLargestNumber(numbers);<br> console.log(largest);  // Should output 22 */',
      category: "Functions",
      difficulty: 3
    },
    {
      question: '/* Write a function called "countOccurrences" that takes an array of elements and a target element as arguments. It should return the number of occurrences of the target element in the array. */',
      test: '/* function countOccurrences(array, target) {<br>   return array.reduce((count, element) => (element === target ? count + 1 : count), 0);<br> }<br><br> const numbers = [1, 2, 3, 2, 4, 2, 5];<br> const count = countOccurrences(numbers, 2);<br> console.log(count);  // Should output 3 */',
      category: "Functions",
      difficulty: 3
    },
    {
      question: '/* Write a function called "findLongestWord" that takes a sentence as an argument and returns the longest word in the sentence. */',
      test: '/* function findLongestWord(sentence) {<br>   const words = sentence.split(" ");<br>   return words.reduce((longest, word) => (word.length > longest.length ? word : longest), "");<br> }<br><br> const longestWord = findLongestWord("This is a test sentence");<br> console.log(longestWord);  // Should output "sentence" */',
      category: "Functions",
      difficulty: 3
    }
  ];
  
const callbackQuestions = [
    // Easy
    {
      question: '/* Write a function called "multiplyByTwo" that takes a number as an argument and returns the result of multiplying that number by 2. */',
      test: '/* function multiplyByTwo(number) {<br>   return number * 2;<br> }<br><br> const result = multiplyByTwo(5);<br> console.log(result);  // Should output 10 */',
      category: "Callbacks",
      difficulty: 1
    },
    {
      question: '/* Write a function called "addTwoNumbers" that takes two numbers as arguments and returns the sum of these two numbers. */',
      test: '/* function addTwoNumbers(num1, num2) {<br>   return num1 + num2;<br> }<br><br> const sum = addTwoNumbers(3, 7);<br> console.log(sum);  // Should output 10 */',
      category: "Callbacks",
      difficulty: 1
    },
    {
      question: '/* Write a function called "isEven" that takes a number as an argument and returns true if the number is even and false if it is odd. */',
      test: '/* function isEven(number) {<br>   return number % 2 === 0;<br> }<br><br> console.log(isEven(4));  // Should output true<br> console.log(isEven(7));  // Should output false */',
      category: "Callbacks",
      difficulty: 1
    },
    {
      question: '/* Write a function called "square" that takes a number as an argument and returns the square of that number. */',
      test: '/* function square(number) {<br>   return number * number;<br> }<br><br> const squared = square(3);<br> console.log(squared);  // Should output 9 */',
      category: "Callbacks",
      difficulty: 1
    },
  
    // Medium
    {
      question: '/* Write a function called "calculate" that takes two numbers and a callback function as arguments. It should apply the callback function to the two numbers and return the result. */',
      test: '/* function calculate(num1, num2, callback) {<br>   return callback(num1, num2);<br> }<br><br> const add = (a, b) => a + b;<br> const result = calculate(3, 4, add);<br> console.log(result);  // Should output 7 */',
      category: "Callbacks",
      difficulty: 2
    },
    {
      question: '/* Write a function called "filterEvenNumbers" that takes an array of numbers and a callback function. It should use the callback function to filter and return only the even numbers from the array. */',
      test: '/* function filterEvenNumbers(numbers, callback) {<br>   return numbers.filter(callback);<br> }<br><br> const isEven = (number) => number % 2 === 0;<br> const numbers = [1, 2, 3, 4, 5, 6];<br> const evenNumbers = filterEvenNumbers(numbers, isEven);<br> console.log(evenNumbers);  // Should output [2, 4, 6] */',
      category: "Callbacks",
      difficulty: 2
    },
    {
      question: '/* Write a function called "mapSquareNumbers" that takes an array of numbers and a callback function. It should use the callback function to map and return an array of the squares of the numbers. */',
      test: '/* function mapSquareNumbers(numbers, callback) {<br>   return numbers.map(callback);<br> }<br><br> const square = (number) => number * number;<br> const numbers = [1, 2, 3, 4, 5];<br> const squaredNumbers = mapSquareNumbers(numbers, square);<br> console.log(squaredNumbers);  // Should output [1, 4, 9, 16, 25] */',
      category: "Callbacks",
      difficulty: 2
    },
    {
      question: '/* Write a function called "calculateAverage" that takes an array of numbers and a callback function. It should use the callback function to calculate and return the average of the numbers. */',
      test: '/* function calculateAverage(numbers, callback) {<br>   const sum = numbers.reduce((acc, num) => acc + num, 0);<br>   return callback(sum, numbers.length);<br> }<br><br> const average = (sum, count) => sum / count;<br> const numbers = [2, 4, 6, 8, 10];<br> const result = calculateAverage(numbers, average);<br> console.log(result);  // Should output 6 */',
      category: "Callbacks",
      difficulty: 2
    },
  
    // Hard
    {
      question: '/* Write a function called "asyncSquare" that takes a number and a callback function. It should simulate an asynchronous operation by using setTimeout to calculate the square of the number after 1 second and then invoke the callback with the result. */',
      test: '/* function asyncSquare(number, callback) {<br>   setTimeout(() => {<br>     const result = number * number;<br>     callback(result);<br>   }, 1000);<br> }<br><br> asyncSquare(5, (result) => {<br>   console.log(result);  // Should output 25 after 1 second<br> }); */',
      category: "Callbacks",
      difficulty: 3
    },
    {
      question: '/* Write a function called "calculateWithRetry" that takes two numbers and a callback function. It should apply the callback function to the two numbers and return the result. If the callback function throws an exception, it should retry the operation up to three times, each time waiting 500 milliseconds before retrying. If all retries fail, it should return "Operation failed". */',
      test: '/* function calculateWithRetry(num1, num2, callback) {<br>   let retries = 3;<br>   let result;<br>   while (retries > 0) {<br>     try {<br>       result = callback(num1, num2);<br>       break;<br>     } catch (error) {<br>       retries--;<br>       if (retries === 0) {<br>         return "Operation failed";<br>       }<br>       setTimeout(() => {}, 500);<br>     }<br>   }<br>   return result;<br> }<br><br> const divide = (a, b) => {<br>   if (b === 0) {<br>     throw new Error("Cannot divide by zero");<br>   }<br>   return a / b;<br> };<br><br> const result = calculateWithRetry(10, 2, divide);<br> console.log(result);  // Should output 5 */',
      category: "Callbacks",
      difficulty: 3
    },
    {
      question: '/* Write a function called "parallelAsync" that takes an array of asynchronous functions and a callback function. It should execute all the asynchronous functions in parallel and invoke the callback with an array of results once all the functions have completed. */',
      test: '/* function parallelAsync(asyncFunctions, callback) {<br>   let count = 0;<br>   const results = [];<br>   for (let i = 0; i < asyncFunctions.length; i++) {<br>     asyncFunctions[i]((result) => {<br>       results[i] = result;<br>       count++;<br>       if (count === asyncFunctions.length) {<br>         callback(results);<br>       }<br>     });<br>   }<br> }<br><br> const asyncFunction1 = (callback) => {<br>   setTimeout(() => {<br>     callback(1);<br>   }, 1000);<br> };<br><br> const asyncFunction2 = (callback) => {<br>   setTimeout(() => {<br>     callback(2);<br>   }, 500);<br> };<br><br> parallelAsync([asyncFunction1, asyncFunction2], (results) => {<br>   console.log(results);  // Should output [1, 2] after 1 second<br> }); */',
      category: "Callbacks",
      difficulty: 3
    }
  ];
  
const closureQuestions = [
    // Easy
    {
      question: '/* Write a function called "createCounter" that creates a counter function. The counter should start at 1 and increment by 1 with each call. */',
      test: '/*<br>function createCounter() {<br>  let count = 0;<br>  return function() {<br>    count++;<br>    return count;<br>  };<br>}<br><br>const counter = createCounter();<br>console.log(counter()); // Should return 1<br>console.log(counter()); // Should return 2<br>*/',
      category: "Closures",
      difficulty: 1
    },
    {
      question: '/* Write a function called "multiplyBy" that takes a number as an argument and returns a function. The returned function should take another number as an argument and return the product of the two numbers. */',
      test: '/*<br>function multiplyBy(x) {<br>  return function(y) {<br>    return x * y;<br>  };<br>}<br><br>const multiplyByTwo = multiplyBy(2);<br>console.log(multiplyByTwo(5)); // Should return 10<br>*/',
      category: "Closures",
      difficulty: 1
    },
    {
      question: '/* Write a function called "counterWithReset" that creates a counter function. The counter should start at 1 and increment by 1 with each call. The returned function should also have a "reset" method that resets the counter to 1. */',
      test: '/*<br>function counterWithReset() {<br>  let count = 0;<br>  return {<br>    increment: function() {<br>      count++;<br>      return count;<br>    },<br>    reset: function() {<br>      count = 0;<br>    }<br>  };<br>}<br><br>const counter = counterWithReset();<br>*/',
      category: "Closures",
      difficulty: 1
    },
    {
      question: '/* Write a function called "createCounterWithLimit" that creates a counter function. The counter should start at 1 and increment by 1 with each call, but it should not exceed a specified limit. If the counter reaches the limit, it should stop incrementing and return "Limit reached". The returned function should also have a "reset" method that resets the counter to 1. */',
      test: '/*<br>function createCounterWithLimit(limit) {<br>  let count = 0;<br>  return {<br>    increment: function() {<br>      if (count >= limit) {<br>        return "Limit reached";<br>      } else {<br>        count++;<br>        return count;<br>      }<br>    },<br>    reset: function() {<br>      count = 0;<br>    }<br>  };<br>}<br><br>const counter = createCounterWithLimit(3);<br>console.log(counter.increment()); // Should return 1<br>console.log(counter.increment()); // Should return 2<br>console.log(counter.increment()); // Should return 3<br>console.log(counter.increment()); // Should return "Limit reached"<br>*/',
      category: "Closures",
      difficulty: 2
    },
  
    // Medium
    {
      question: '/* Write a function called "memoize" that takes a function as an argument and returns a memoized version of that function. The memoized function should cache the results of previous calls and return the cached result when the same inputs occur again. */',
      test: '/*<br>function memoize(func) {<br>  const cache = {};<br>  return function(...args) {<br>    const key = JSON.stringify(args);<br>    if (cache.hasOwnProperty(key)) {<br>      return cache[key];<br>    } else {<br>      const result = func(...args);<br>      cache[key] = result;<br>      return result;<br>    }<br>  };<br>}<br><br>const add = (a, b) => a + b;<br>const memoizedAdd = memoize(add);<br>console.log(memoizedAdd(2, 3)); // Should return 5<br>console.log(memoizedAdd(2, 3)); // Should return 5 (cached result)<br>*/',
      category: "Closures",
      difficulty: 2
    },
    {
      question: '/* Write a function called "createSafeAdder" that takes an initial value as an argument and returns a function. The returned function should take a value to add and return the sum. However, if the sum exceeds a specified limit, it should return "Limit exceeded". */',
      test: '/*<br>function createSafeAdder(initial, limit) {<br>  return function(value) {<br>    const sum = initial + value;<br>    return sum <= limit ? sum : "Limit exceeded";<br>  };<br>}<br><br>const safeAdder = createSafeAdder(5, 10);<br>console.log(safeAdder(3)); // Should return 8<br>console.log(safeAdder(7)); // Should return "Limit exceeded"<br>*/',
      category: "Closures",
      difficulty: 2
    },
    {
      question: '/* Write a function called "createCounterWithDelay" that creates a counter function. The counter should start at 1 and increment by 1 with each call, but there should be a delay of 500 milliseconds before each increment. */',
      test: '/*<br>function createCounterWithDelay() {<br>  let count = 0;<br>  return function() {<br>    setTimeout(() => {<br>      count++;<br>      console.log(count);<br>    }, 500);<br>  };<br>}<br><br>const counter = createCounterWithDelay();<br>counter(); // Should log 1 after 500 milliseconds<br>counter(); // Should log 2 after another 500 milliseconds<br>*/',
      category: "Closures",
      difficulty: 2
    },
  
    // Hard
    {
      question: '/* Write a function called "createFunctionSequence" that takes an array of functions as an argument and returns a function. The returned function should execute each function in the array sequentially, passing the result of each function as an argument to the next function. */',
      test: '/*<br>function createFunctionSequence(functions) {<br>  return function(initial) {<br>    let result = initial;<br>    for (const func of functions) {<br>      result = func(result);<br>    }<br>    return result;<br>  };<br>}<br><br>const addTwo = (x) => x + 2;<br>const multiplyByThree = (x) => x * 3;<br>const subtractTen = (x) => x - 10;<br>const sequence = createFunctionSequence([addTwo, multiplyByThree, subtractTen]);<br>console.log(sequence(5)); // Should return 11<br>*/',
      category: "Closures",
      difficulty: 3
    },
    {
      question: '/* Write a function called "createCancelableFunction" that takes a function as an argument and returns a cancelable version of that function. The cancelable function should be able to be canceled by calling a "cancel" method. When canceled, the function should not execute, and subsequent calls to the cancelable function should return "Canceled". */',
      test: '/*<br>function createCancelableFunction(func) {<br>  let canceled = false;<br>  return {<br>    execute: function(...args) {<br>      if (!canceled) {<br>        return func(...args);<br>      } else {<br>        return "Canceled";<br>      }<br>    },<br>    cancel: function() {<br>      canceled = true;<br>    }<br>  };<br>}<br><br>const add = (a, b) => a + b;<br>const cancelableAdd = createCancelableFunction(add);<br>console.log(cancelableAdd.execute(2, 3)); // Should return 5<br>cancelableAdd.cancel();<br>console.log(cancelableAdd.execute(2, 3)); // Should return "Canceled"<br>*/',
      category: "Closures",
      difficulty: 3
    },
    {
      question: '/* Write a function called "createThrottledFunction" that takes a function and a time interval in milliseconds as arguments and returns a throttled version of that function. The throttled function should only execute once within the specified time interval. Subsequent calls to the throttled function within the interval should be ignored. */',
      test: '/*<br>function createThrottledFunction(func, interval) {<br>  let lastExecutionTime = 0;<br>  return function(...args) {<br>    const currentTime = Date.now();<br>    if (currentTime - lastExecutionTime >= interval) {<br>      lastExecutionTime = currentTime;<br>      return func(...args);<br>    } else {<br>      return "Throttled";<br>    }<br>  };<br>}<br><br>const logMessage = (message) => console.log(message);<br>const throttledLog = createThrottledFunction(logMessage, 1000);<br>throttledLog("Message 1"); // Should log "Message 1"<br>throttledLog("Message 2"); // Should return "Throttled"<br>*/',
      category: "Closures",
      difficulty: 3
    }
  ];
  
const recursionQuestions = [
    // Easy
    {
      question: '/* Write a recursive function called "countDown" that takes a positive integer n and prints the numbers from n to 1. */',
      test: '/*<br>function countDown(n) {<br>  if (n === 0) {<br>    return;<br>  }<br>  console.log(n);<br>  countDown(n - 1);<br>}<br><br>countDown(5); // Should log: 5, 4, 3, 2, 1<br>*/',
      category: "Recursion",
      difficulty: 1
    },
    {
      question: '/* Write a recursive function called "calculateFactorial" that takes a non-negative integer n and returns its factorial. */',
      test: '/*<br>function calculateFactorial(n) {<br>  if (n === 0 || n === 1) {<br>    return 1;<br>  }<br>  return n * calculateFactorial(n - 1);<br>}<br><br>const result = calculateFactorial(4); // Should return 24<br>console.log(result);<br>*/',
      category: "Recursion",
      difficulty: 1
    },
    {
      question: '/* Write a recursive function called "sumArray" that takes an array of numbers and returns the sum of all elements. */',
      test: '/*<br>function sumArray(arr) {<br>  if (arr.length === 0) {<br>    return 0;<br>  }<br>  return arr[0] + sumArray(arr.slice(1));<br>}<br><br>const result = sumArray([1, 2, 3, 4, 5]); // Should return 15<br>console.log(result);<br>*/',
      category: "Recursion",
      difficulty: 1
    },
    {
      question: '/* Write a recursive function called "reverseString" that takes a string and returns the reversed version of it. */',
      test: '/*<br>function reverseString(str) {<br>  if (str === "") {<br>    return "";<br>  }<br>  return reverseString(str.substr(1)) + str[0];<br>}<br><br>const result = reverseString("hello"); // Should return "olleh"<br>console.log(result);<br>*/',
      category: "Recursion",
      difficulty: 1
    },
    {
      question: '/* Write a recursive function called "fibonacciSequence" that generates the nth term in the Fibonacci sequence. */',
      test: '/*<br>function fibonacciSequence(n) {<br>  if (n <= 1) {<br>    return n;<br>  }<br>  return fibonacciSequence(n - 1) + fibonacciSequence(n - 2);<br>}<br><br>const result = fibonacciSequence(6); // Should return 8<br>console.log(result);<br>*/',
      category: "Recursion",
      difficulty: 1
    },
    {
      question: '/* Write a recursive function called "powerOfTwo" that takes an integer n and returns 2^n. */',
      test: '/*<br>function powerOfTwo(n) {<br>  if (n === 0) {<br>    return 1;<br>  }<br>  return 2 * powerOfTwo(n - 1);<br>}<br><br>const result = powerOfTwo(3); // Should return 8<br>console.log(result);<br>*/',
      category: "Recursion",
      difficulty: 1
    },
    {
      question: '/* Write a recursive function called "findMaxValue" that takes an array of numbers and returns the maximum value. */',
      test: '/*<br>function findMaxValue(arr) {<br>  if (arr.length === 1) {<br>    return arr[0];<br>  }<br>  const restMax = findMaxValue(arr.slice(1));<br>  return arr[0] > restMax ? arr[0] : restMax;<br>}<br><br>const result = findMaxValue([3, 8, 2, 5, 10]); // Should return 10<br>console.log(result);<br>*/',
      category: "Recursion",
      difficulty: 1
    },
    {
      question: '/* Write a recursive function called "isPalindrome" that takes a string and returns true if it\'s a palindrome, false otherwise. */',
      test: '/*<br>function isPalindrome(str) {<br>  if (str.length <= 1) {<br>    return true;<br>  }<br>  return (str[0] === str[str.length - 1]) && isPalindrome(str.slice(1, -1));<br>}<br><br>const result = isPalindrome("radar"); // Should return true<br>console.log(result);<br>*/',
      category: "Recursion",
      difficulty: 1
    },
  
    // Medium
    {
      question: '/* Write a recursive function called "flattenArray" that takes a nested array and returns a flat array containing all the elements. */',
      test: '/*<br>function flattenArray(arr) {<br>  let result = [];<br>  arr.forEach((element) => {<br>    if (Array.isArray(element)) {<br>      result = result.concat(flattenArray(element));<br>    } else {<br>      result.push(element);<br>    }<br>  });<br>  return result;<br>}<br><br>const result = flattenArray([[1, 2, [3, 4]], 5, [6]]); // Should return [1, 2, 3, 4, 5, 6]<br>console.log(result);<br>*/',
      category: "Recursion",
      difficulty: 2
    },
    {
      question: '/* Write a recursive function called "calculateGCD" that calculates the greatest common divisor of two numbers. */',
      test: '/*<br>function calculateGCD(a, b) {<br>  if (b === 0) {<br>    return a;<br>  }<br>  return calculateGCD(b, a % b);<br>}<br><br>const result = calculateGCD(24, 36); // Should return 12<br>console.log(result);<br>*/',
      category: "Recursion",
      difficulty: 2
    },
    {
      question: '/* Write a recursive function called "generateCombinations" that generates all possible combinations of a given array. */',
      test: '/*<br>function generateCombinations(arr) {<br>  // Your code here<br>}<br><br>const result = generateCombinations([1, 2, 3]); // Should return [[1, 2], [1, 3], [2, 3], [1, 2, 3]]<br>console.log(result);<br>*/',
      category: "Recursion",
      difficulty: 2
    },
    {
      question: '/* Write a recursive function called "sumDigits" that takes a positive integer n and returns the sum of its digits. */',
      test: '/*<br>function sumDigits(n) {<br>  // Your code here<br>}<br><br>const result = sumDigits(123); // Should return 6<br>console.log(result);<br>*/',
      category: "Recursion",
      difficulty: 2
    },
    {
      question: '/* Write a recursive function called "capitalizeWords" that takes an array of words and returns a new array with each word capitalized. */',
      test: '/*<br>function capitalizeWords(words) {<br>  // Your code here<br>}<br><br>const result = capitalizeWords(["hello", "world"]); // Should return ["Hello", "World"]<br>console.log(result);<br>*/',
      category: "Recursion",
      difficulty: 2
    },
    {
      question: '/* Write a recursive function called "binarySearch" that searches for a target value in a sorted array and returns its index. If not found, return -1. */',
      test: '/*<br>function binarySearch(arr, target) {<br>  // Your code here<br>}<br><br>const result = binarySearch([1, 2, 3, 4, 5, 6, 7], 5); // Should return 4<br>console.log(result);<br>*/',
      category: "Recursion",
      difficulty: 2
    },
    {
      question: '/* Write a recursive function called "countOccurrences" that counts the number of occurrences of a specified element in an array. */',
      test: '/*<br>function countOccurrences(arr, target) {<br>  // Your code here<br>}<br><br>const result = countOccurrences([1, 2, 2, 3, 4, 4, 5], 2); // Should return 2<br>console.log(result);<br>*/',
      category: "Recursion",
      difficulty: 2
    },
    {
      question: '/* Write a recursive function called "deepCloneObject" that creates a deep copy of a nested object. */',
      test: '/*<br>function deepCloneObject(obj) {<br>  // Your code here<br>}<br><br>const result = deepCloneObject({ a: 1, b: { c: 2 } }); // Should return { a: 1, b: { c: 2 } }<br>console.log(result);<br>*/',
      category: "Recursion",
      difficulty: 2
    },
  
    // Hard
    {
      question: '/* Write a recursive function called "findLongestIncreasingSubsequence" that finds the length of the longest strictly increasing subsequence in an array. */',
      test: '/*<br>function findLongestIncreasingSubsequence(arr) {<br>  // Your code here<br>}<br><br>const result = findLongestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]); // Should return 6<br>console.log(result);<br>*/',
      category: "Recursion",
      difficulty: 3
    },
    {
      question: '/* Write a recursive function called "towerOfHanoi" that solves the Tower of Hanoi puzzle for a given number of disks. */',
      test: '/*<br>function towerOfHanoi(n) {<br>  // Your code here<br>}<br><br>const result = towerOfHanoi(3); // Should return an array of moves: [[1, 3], [1, 2], [3, 2], [1, 3], [2, 1], [2, 3], [1, 3]]<br>console.log(result);<br>*/',
      category: "Recursion",
      difficulty: 3
    },
    {
      question: '/* Write a recursive function called "findSubarrayWithSum" that finds a subarray with a given sum in an array. Return the indices of the subarray. */',
      test: '/*<br>function findSubarrayWithSum(arr, targetSum) {<br>  // Your code here<br>}<br><br>const result = findSubarrayWithSum([1, 2, 3, 4, 5], 9); // Should return [2, 4]<br>console.log(result);<br>*/',
      category: "Recursion",
      difficulty: 3
    }
  ];
  
const oopQuestions = [
    // Easy
    {
      question: '/* Create a class called "Person" with properties name and age. Add a method "getInfo" that returns a string with the person\'s name and age. */',
      test: '/*<br>' +
            ' * class Person {<br>' +
            ' *   constructor(name, age) {<br>' +
            ' *     this.name = name;<br>' +
            ' *     this.age = age;<br>' +
            ' *   }<br>' +
            ' *<br>' +
            ' *   getInfo() {<br>' +
            ' *     return `${this.name} is ${this.age} years old.`;<br>' +
            ' *   }<br>' +
            ' * }<br>' +
            ' * const person = new Person("John Doe", 25);<br>' +
            ' * console.log(person.name); // Should output "John Doe"<br>' +
            ' * console.log(person.getInfo()); // Should output "John Doe is 25 years old."<br>' +
            ' */',
      category: 'OOP',
      difficulty: 1
    },
    {
      question: '/* Create a class called "Rectangle" with properties width and height. Add methods "getArea" and "getPerimeter" that return the area and perimeter of the rectangle, respectively. */',
      test: '/*<br>' +
            ' * class Rectangle {<br>' +
            ' *   constructor(width, height) {<br>' +
            ' *     this.width = width;<br>' +
            ' *     this.height = height;<br>' +
            ' *   }<br>' +
            ' *<br>' +
            ' *   getArea() {<br>' +
            ' *     return this.width * this.height;<br>' +
            ' *   }<br>' +
            ' *<br>' +
            ' *   getPerimeter() {<br>' +
            ' *     return 2 * (this.width + this.height);<br>' +
            ' *   }<br>' +
            ' * }<br>' +
            ' * const rectangle = new Rectangle(5, 8);<br>' +
            ' * console.log(rectangle.getArea()); // Should output 40<br>' +
            ' * console.log(rectangle.getPerimeter()); // Should output 26<br>' +
            ' */',
      category: 'OOP',
      difficulty: 1
    },
    {
      question: '/* Create a class called "Dog" with properties name and breed. Add a method "bark" that returns a string representing the dog\'s bark. */',
      test: '/*<br>' +
            ' * class Dog {<br>' +
            ' *   constructor(name, breed) {<br>' +
            ' *     this.name = name;<br>' +
            ' *     this.breed = breed;<br>' +
            ' *   }<br>' +
            ' *<br>' +
            ' *   bark() {<br>' +
            ' *     return `Woof, woof! I\'m ${this.name}, the ${this.breed}.`;<br>' +
            ' *   }<br>' +
            ' * }<br>' +
            ' * const dog = new Dog("Buddy", "Golden Retriever");<br>' +
            ' * console.log(dog.bark()); // Should output "Woof, woof! I\'m Buddy, the Golden Retriever."<br>' +
            ' */',
      category: 'OOP',
      difficulty: 1
    },
    // Medium
    {
      question: '/* Create a class called "BankAccount" with properties accountNumber and balance. Add methods "deposit" and "withdraw" that modify the balance. */',
      test: '/*<br>' +
            ' * class BankAccount {<br>' +
            ' *   constructor(accountNumber, balance) {<br>' +
            ' *     this.accountNumber = accountNumber;<br>' +
            ' *     this.balance = balance;<br>' +
            ' *   }<br>' +
            ' *<br>' +
            ' *   deposit(amount) {<br>' +
            ' *     this.balance += amount;<br>' +
            ' *   }<br>' +
            ' *<br>' +
            ' *   withdraw(amount) {<br>' +
            ' *     if (amount <= this.balance) {<br>' +
            ' *       this.balance -= amount;<br>' +
            ' *     } else {<br>' +
            ' *       console.log("Insufficient funds.");<br>' +
            ' *     }<br>' +
            ' *   }<br>' +
            ' * }<br>' +
            ' * const account = new BankAccount("123456", 1000);<br>' +
            ' * account.deposit(500);<br>' +
            ' * account.withdraw(200);<br>' +
            ' * console.log(account.balance); // Should output 1300<br>' +
            ' */',
      category: 'OOP',
      difficulty: 2
    },
    {
      question: '/* Create a class called "Library" with properties books (an array of book objects). Add methods "addBook" to add a book to the library and "findBooksByAuthor" to find books by a specific author. */',
      test: '/*<br>' +
            ' * class Library {<br>' +
            ' *   constructor() {<br>' +
            ' *     this.books = [];<br>' +
            ' *   }<br>' +
            ' *<br>' +
            ' *   addBook(book) {<br>' +
            ' *     this.books.push(book);<br>' +
            ' *   }<br>' +
            ' *<br>' +
            ' *   findBooksByAuthor(author) {<br>' +
            ' *     return this.books.filter(book => book.author === author);<br>' +
            ' *   }<br>' +
            ' * }<br>' +
            ' * const library = new Library();<br>' +
            ' * const book1 = { title: "Book 1", author: "Author 1" };<br>' +
            ' * const book2 = { title: "Book 2", author: "Author 2" };<br>' +
            ' * library.addBook(book1);<br>' +
            ' * library.addBook(book2);<br>' +
            ' * const booksByAuthor = library.findBooksByAuthor("Author 1");<br>' +
            ' * console.log(booksByAuthor.length); // Should output 1<br>' +
            ' */',
      category: 'OOP',
      difficulty: 2
    },
    {
      question: '/* Create a class called "Car" with properties make, model, and year. Add a method "start" that returns a string indicating the car has started. */',
      test: '/*<br>' +
            ' * class Car {<br>' +
            ' *   constructor(make, model, year) {<br>' +
            ' *     this.make = make;<br>' +
            ' *     this.model = model;<br>' +
            ' *     this.year = year;<br>' +
            ' *   }<br>' +
            ' *<br>' +
            ' *   start() {<br>' +
            ' *     return `The ${this.year} ${this.make} ${this.model} is now running.`;<br>' +
            ' *   }<br>' +
            ' * }<br>' +
            ' * const car = new Car("Toyota", "Camry", 2022);<br>' +
            ' * console.log(car.start()); // Should output "The 2022 Toyota Camry is now running."<br>' +
            ' */',
      category: 'OOP',
      difficulty: 2
    },
    // Hard
    {
      question: '/* Create a class called "VendingMachine" with properties items (an array of item objects) and balance (initially set to 0). Add methods "addItem" to add an item to the vending machine, "insertCoin" to insert a coin and increase the balance, and "buyItem" to purchase an item if there is enough balance. */',
      test: '/*<br>' +
            ' * class VendingMachine {<br>' +
            ' *   constructor() {<br>' +
            ' *     this.items = [];<br>' +
            ' *     this.balance = 0;<br>' +
            ' *   }<br>' +
            ' *<br>' +
            ' *   addItem(item) {<br>' +
            ' *     this.items.push(item);<br>' +
            ' *   }<br>' +
            ' *<br>' +
            ' *   insertCoin(coin) {<br>' +
            ' *     this.balance += coin;<br>' +
            ' *   }<br>' +
            ' *<br>' +
            ' *   buyItem(itemIndex) {<br>' +
            ' *     const item = this.items[itemIndex];<br>' +
            ' *     if (item && this.balance >= item.price) {<br>' +
            ' *       this.balance -= item.price;<br>' +
            ' *       return `You bought ${item.name}. Your balance is $${this.balance}.`;<br>' +
            ' *     } else {<br>' +
            ' *       return "Not enough balance or item not available.";<br>' +
            ' *     }<br>' +
            ' *   }<br>' +
            ' * }<br>' +
            ' * const vendingMachine = new VendingMachine();<br>' +
            ' * vendingMachine.addItem({ name: "Soda", price: 1.5 });<br>' +
            ' * vendingMachine.insertCoin(2);<br>' +
            ' * console.log(vendingMachine.buyItem(0)); // Should output "You bought Soda. Your balance is $0.5."<br>' +
            ' */',
      category: 'OOP',
      difficulty: 3
    },
    {
      question: '/* Create a class called "Library" with properties books (an array of book objects). Each book object should have properties title, author, and isAvailable (a boolean indicating if the book is available for borrowing). Add methods "borrowBook" and "returnBook" to handle the borrowing and returning of books. */',
      test: '/*<br>' +
            ' * class Library {<br>' +
            ' *   constructor() {<br>' +
            ' *     this.books = [];<br>' +
            ' *   }<br>' +
            ' *<br>' +
            ' *   borrowBook(title) {<br>' +
            ' *     // Your code here<br>' +
            ' *   }<br>' +
            ' *<br>' +
            ' *   returnBook(title) {<br>' +
            ' *     // Your code here<br>' +
            ' *   }<br>' +
            ' * }<br>' +
            ' * const library = new Library();<br>' +
            ' * library.books = [<br>' +
            ' *   { title: "The Catcher in the Rye", author: "J.D. Salinger", isAvailable: true },<br>' +
            ' *   { title: "To Kill a Mockingbird", author: "Harper Lee", isAvailable: false },<br>' +
            ' *   { title: "1984", author: "George Orwell", isAvailable: true }<br>' +
            ' * ];<br>' +
            ' * console.log(library.borrowBook("To Kill a Mockingbird")); // Should return "Book not available."<br>' +
            ' * console.log(library.borrowBook("1984")); // Should return "Book borrowed successfully."<br>' +
            ' * console.log(library.returnBook("To Kill a Mockingbird")); // Should return "Book returned successfully."<br>' +
            ' * console.log(library.books); // Should show the updated array of books.<br>' +
            ' */',
      category: 'OOP',
      difficulty: 3
    },
    {
      question: '/* Create a class called "Bank" with properties accounts (an array of account objects). Each account object should have properties accountNumber, accountHolder, and balance. Add methods "deposit" and "withdraw" to handle depositing and withdrawing money from accounts. */',
      test: '/*<br>' +
            ' * class Bank {<br>' +
            ' *   constructor() {<br>' +
            ' *     this.accounts = [];<br>' +
            ' *   }<br>' +
            ' *<br>' +
            ' *   deposit(accountNumber, amount) {<br>' +
            ' *     // Your code here<br>' +
            ' *   }<br>' +
            ' *<br>' +
            ' *   withdraw(accountNumber, amount) {<br>' +
            ' *     // Your code here<br>' +
            ' *   }<br>' +
            ' * }<br>' +
            ' * const bank = new Bank();<br>' +
            ' * bank.accounts = [<br>' +
            ' *   { accountNumber: "12345", accountHolder: "Alice", balance: 1000 },<br>' +
            ' *   { accountNumber: "67890", accountHolder: "Bob", balance: 500 }<br>' +
            ' * ];<br>' +
            ' * console.log(bank.deposit("12345", 200)); // Should return "Deposit successful. New balance: 1200."<br>' +
            ' * console.log(bank.withdraw("67890", 300)); // Should return "Withdrawal successful. New balance: 200."<br>' +
            ' * console.log(bank.accounts); // Should show the updated array of accounts.<br>' +
            ' */',
      category: 'OOP',
      difficulty: 3
    },
    {
      question: '/* Create a class called "MovieCollection" with properties movies (an array of movie objects). Each movie object should have properties title, director, and releaseYear. Add methods "addMovie" to add a new movie to the collection and "findMoviesByDirector" to find all movies by a specific director. */',
      test: '/*<br>' +
            ' * class MovieCollection {<br>' +
            ' *   constructor() {<br>' +
            ' *     this.movies = [];<br>' +
            ' *   }<br>' +
            ' *<br>' +
            ' *   addMovie(title, director, releaseYear) {<br>' +
            ' *     // Your code here<br>' +
            ' *   }<br>' +
            ' *<br>' +
            ' *   findMoviesByDirector(director) {<br>' +
            ' *     // Your code here<br>' +
            ' *   }<br>' +
            ' * }<br>' +
            ' * const movieCollection = new MovieCollection();<br>' +
            ' * movieCollection.addMovie("Inception", "Christopher Nolan", 2010);<br>' +
            ' * movieCollection.addMovie("The Dark Knight", "Christopher Nolan", 2008);<br>' +
            ' * movieCollection.addMovie("The Shawshank Redemption", "Frank Darabont", 1994);<br>' +
            ' * console.log(movieCollection.findMoviesByDirector("Christopher Nolan")); // Should return an array of movies by Christopher Nolan.<br>' +
            ' */',
      category: 'OOP',
      difficulty: 3
    }
    ];
    
    
  