const range = {
    from: 1,
    to: 5,
    
    [Symbol.iterator]() {
      let current = this.from;
      const last = this.to;
      
      return {
        next() {
          if (current <= last) {
            return { done: false, value: current++ };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
  for (const num of range) {
    console.log(num); // 1, 2, 3, 4, 5
  }
  