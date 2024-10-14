//const test = `Hello`;
//console.log (test);
const userInput = prompt('give me some numbers separated by commas', `1,2,3,4,5`);

const userData = userInput.split(`,`);
//console.log(`Numbers:`, userData);

const numbers = [];

for (let i = 0; i < userData.length; i++) {
  const numAsStr = userData[i];
  const convertNum = Number(numAsStr);




  numbers.push(convertNum);
}

//console.log (numbers)



const getLength = (nums) => {

  const numslength = nums.length;
  return numslength;

}

console.log(getLength(numbers));




const getSum = (nums) => {

  let total = 0;

  for (let i = 0; i < nums.length; i++) {

    const number = nums[i];

    total += number;
  }
  return total;
}

console.log(getSum(numbers));

const getMean = (nums) => {
  const divided = getSum(nums) / getLength(nums);
  return divided
}
console.log(getMean(numbers));

const getMin = (nums) => {
  const minValue = nums.reduce((min, current) => {
    return current < min ? current : min;
  }, numbers[0]);
  return minValue
}

console.log(getMin(numbers));

const getMax = (nums) => {
  const maxValue = nums.reduce((max, current) => {
    return current > max ? current : max;
  }, numbers[0]);
  return maxValue
}
console.log(getMax(numbers));
//let getSum = 0;

//userDataRecieved.forEach( num =>{
//getSum += num;
//});

//console.log("The sum is:", getSum);
//My progress of trying to getMean
//let getMean,array 
//if (array.length === 0);
//const sum = array.reduce((accumulator, userDataRecieved) =>
//accumulator + userDataRecieved, 0);
//return sum / array.length;

//console.log (getMean);
//MININUM AND MAXINUM ATTEMPT
//var nums = userDataRecieved
//Math.min.apply(Math, nums)
//Math.max.apply(Math, nums)
//Math.min.apply(null,nums)
//Math.max.apply(null,nums)
//let getMin = Math.min(Number(userDataRecieved));
//console.log(Math.min((Number)(userDataRecieved)));

//getRange attempt

//const getRange = (start, stop, step) =>
//Array.from(
//{ length: (stop - start) / step + 1},
// (value, index) => start + index * step
//);

//console.log(getRange(userDataRecieved));

const getOdd = (nums) => {
  const oddNum = nums.filter((num) => num % 2 === 1);
  return oddNum
}
 console.log (getOdd(numbers));

 const getEven = (nums) => {
  const evenNum = nums.filter((num) => num % 2 === 0);
  return evenNum
 }
 console.log  (getEven(numbers));
  