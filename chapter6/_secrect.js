const secretKey = Symbol('secret');

const locker = {
  [secretKey]: "Top Secret"
};

console.log(locker[secretKey]); // Top Secret
console.log(locker.secretKey); // undefined
