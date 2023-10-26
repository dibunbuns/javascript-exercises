let userInput;
do {
  userInput = prompt("enter number greater than 100:", 0);
} while (userInput <= 100 && userInput);
// it will check first number is less or equal to 100, then it will check if null or empty.
//if it is null then it is false. Both have to be true to pass.
//basically if something is input, userInput is true. if the input is <= 100, then that is true. so it loops (&& require all true.)
//if  something is not input, userInput is false and the first false value is returned so it would not loop.
//if userInput is true, and value is > 100, then that is false and the do wont execute.
let n;
nextPrime: for (i = 2; i <= n; i++) {
  n = prompt("please enter a number greater than 2."); //start at 2, increase until your number is the user input, by one.
  for (let j = 2; j < i; j++) {
    //let diviser =2, as long as less than i, increment by one.
    if (i % j == 0) continue nextPrime; //if remainder is zero, then it cannot be a prime, so go to next number
  }
  alert(i); //the prime numbers
}
