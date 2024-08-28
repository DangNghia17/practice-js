// Regular Expressions

// Define Date Format
function isValidDate(date) {
    const datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return datePattern.test(date);
  }
  
  // Ví dụ:
  console.log(isValidDate("29/08/2024")); // true
  console.log(isValidDate("31/04/2024")); // false

//   Check for Valid Emails
  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }
  
  // Ví dụ:
  console.log(isValidEmail("example@example.com")); // true
  console.log(isValidEmail("example@.com")); // false

  
//   Find All Numbers in a String
  function findAllNumbers(str) {
    const numberPattern = /\d+/g;
    return str.match(numberPattern) || [];
  }
  
  // Ví dụ:
  console.log(findAllNumbers("Hôm nay là ngày 27 tháng 8 năm 2024")); // ["27", "8", "2024"]
  
//   Replace Words in a String
  function replaceWord(str) {
    const wordPattern = /\b(cat|dog)\b/g;
    return str.replace(wordPattern, 'animal');
  }
  
  // Ví dụ:
  console.log(replaceWord("The cat and the dog are friends.")); // "The animal and the animal are friends."
 
//   Check for Strong Passwords
  function isStrongPassword(password) {
    const strongPasswordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordPattern.test(password);
  }
  
  // Ví dụ:
  console.log(isStrongPassword("StrongP@ss1")); // true
  console.log(isStrongPassword("weakpass")); // false
  