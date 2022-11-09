function countTo(max, current) {
  if (current > max) return;
  console.log(current);
  countTo(max, current + 1);
}

//countTo(100000, 1);

function factorial(x) {
  return x === 2 ? 2 : x * factorial(x - 1);
  if (x < 2) return 1;
  return x * factorial(x - 1);
}

//console.log(factorial(5));

function fibonacci(n) {
  // base case
  //   if (n === 2) {
  //     return 1;
  //   }
  //   if (n === 1) {
  //     return 0;
  //   }

  //   // recursive calls
  //   return fibonacci(n - 1) + fibonacci(n - 2);
  const sequence = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1]);
  }
  console.log(sequence);
  return sequence[n];
}
console.log(fibonacci(2));

//Recursion 2

function nestedAdd(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      sum += nestedAdd(arr[i]);
    } else {
      sum += arr[i];
    }
  }
  return sum;
}

s = [[[2]], 1, [1, 3]];
console.log(nestedAdd(s));
console.log(factorial(12));
