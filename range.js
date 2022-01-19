function range(start, end, step) {
  let array = [];
  if (start > end || step <= 0) {
    return array;
  } else if (start === undefined || end === undefined || step === undefined) {
    return array;
  }
  for (let i = start; i <= end; i += step) {
    array.push(i);
  } return array;
}

/* Test code with these:
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(5, 0, 1));
console.log(range(1, 10, 0));
console.log(range(1, 5));
*/