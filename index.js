//const test = `Hello`;
//console.log (test);
const userInput= prompt( 'give me some numbers separated by commas');

const userData = userInput.split(`,`);
//console.log(`Numbers:`, userData);

const userDataRecieved = [];

for(  let index = 0; index < userData.length; index = index + 1){
  userDataRecieved.push(Number(userData[index] ));
}


  

const getLength = (userDataRecieved.length);
console.log ("The length is:", getLength);

let getSum = 0;

userDataRecieved.forEach( num =>{
  getSum += num;
});

console.log("The sum is:", getSum);
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

  const getOdd = userDataRecieved.filter((num) => num % 2 === 1);
  console.log("The odd numbers are:", getOdd);

  const getEven = userDataRecieved.filter((num) => num % 2 === 0);
  console.log("The even numbers are:", getEven);