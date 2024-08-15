// Bài tập 1: Minimum
function min(a, b) {
    return a < b ? a : b;
  }
  
  console.log(min(3, 5)); // Output: 3
  console.log(min(10, 7)); // Output: 7
  console.log(min(-1, -10)); // Output: -10
  
  // Bài tập 2: Recursion
  function isEven(n) {
    if (n < 0) return isEven(-n); // Xử lý trường hợp số âm
    if (n === 0) return true;
    if (n === 1) return false;
    return isEven(n - 2);
  }
  
  console.log(isEven(50)); // Output: true
  console.log(isEven(75)); // Output: false
  console.log(isEven(-1)); // Output: false
  
  // Bài tập 3: Bean Counting
  function countBs(str) {
    return countChar(str, 'B');
  }
  
  function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    return count;
  }
  
  console.log(countBs("BBC")); // Output: 2
  console.log(countChar("kakkerlak", "k")); // Output: 4
  