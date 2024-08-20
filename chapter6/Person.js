function Person(firstName, lastName) {
    let _firstName = firstName;
    let _lastName = lastName;
    
    this.getFullName = function() {
      return `${_firstName} ${_lastName}`;
    };
    
    this.setFullName = function(newFirstName, newLastName) {
      _firstName = newFirstName;
      _lastName = newLastName;
    };
  }
  
  const person = new Person("John", "Doe");
  console.log(person.getFullName()); // John Doe
  person.setFullName("Jane", "Smith");
  console.log(person.getFullName()); // Jane Smith
  