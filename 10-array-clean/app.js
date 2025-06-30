function filter(numbers, shouldRemove) {
  const result = [];
  
  for (let i = 0; i < numbers.length; i++) {
    if (!shouldRemove(numbers[i])) {
      result.push(numbers[i]);
    }
  }
  
  return result;
}

const numbers = [3, 6, 9, 2];
const numberThan5 = num => num > 5;

console.log(filter(numbers, numberThan5)); // [3,2]