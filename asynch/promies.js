function asyncAddition(a, b) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof a !== 'number' || typeof b !== 'number') {
          reject(new Error('Both inputs must be numbers'));
        } else {
          resolve(a + b);
        }
      }, 2000); // Simulating an asynchronous delay of 2 seconds
    });
  }
  
  // call
  asyncAddition(2, 3)
    .then(result => {
      console.log('Sum:', result);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
  

    // addition of two number 