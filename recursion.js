// 1. Counting Sheep

// Should take in a number as input
//Should output the number along with "Another Sheep Jumps over the fence."

//Input: The total number of sheep. Output: total sheep -1 + 'Another Sheep Jumps over the fence'
// Base: When sheep = 0, return 'all sheep have jumped over the fence. 

function countSheep(sheep) {
if (sheep === 0) {
console.log('All Sheep Have Jumped Over the Fence')
  return;
}
console.log('another sheep has jumped over the fence ' + sheep)
  countSheep(sheep -1)
}

countSheep(3)


//2. Power Calculator
// input: a number and a number to represent an exponent. Exponents should be greater than 0
//output: should multiply the original number times itself the amount of times indicated by the exponent. 
// recursive input: should call the function with the current base number value times the initial base number and the exponent -1
// output of each recursive call should be the total of the base number times itself and the exponent decreased by 1

function powerCalc(num, exp, initNum=num) {
  if (exp === 0) {
    return console.log(newNum)
  }
  newNum = num * initNum
  powerCalc(newNum, exp -1, initNum )
}

powerCalc(10, 5)


//3. Reverse String
// input: a string. output: string in reverse
// recursive input: string with last letter spliced 

function reverse(string, newString=[]) {
  let splitString = string.split('')
 let pop = splitString.pop()
 let newestString = [...newString, pop]
  if (string.length === 0) {
    return console.log(newString.join(''))
  }

  reverse(splitString.join(''), newestString)
  
}
reverse("ffdss")

//4. Fibonacci

function fibonacci(place, i, sequence=[]) {
  if (i === undefined) {
    i = 0
  }
  if (sequence.length === 0) {
    sequence.push(0,1)
  }
 newTotal = (sequence[i]) + (sequence[i+1])
  sequence.push(newTotal)
  if (place <= 2) {
    console.log(sequence, sequence[i+2])
    return sequence
  }
  fibonacci(place -1, i +1, sequence)
}
fibonacci(7)

