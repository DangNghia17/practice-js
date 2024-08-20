// Practice Methodss
const Calculator = {
    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
    multiply(a, b) {
      return a * b;
    },
    divide(a, b) {
      if (b !== 0) {
        return a / b;
      } else {
        return 'Error: Division by zero';
      }
    }
  };
  
  console.log(Calculator.add(2, 3)); // 5
  console.log(Calculator.divide(6, 0)); // Error: Division by zero
  