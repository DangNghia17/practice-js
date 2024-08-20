const people = new Map();
people.set("John", 25);
people.set("Jane", 30);

function getAge(name) {
  return people.get(name);
}

console.log(getAge("John")); // 25
