self.onmessage = function(event) {
  // Perform heavy computation
  console.log('Worker received data:', event.data);
  let result = 0;
  for (let i = 0; i < 1e9; i++) {
    result += i;
  }
  self.postMessage(`Heavy computation done! Result: ${result}`);
};
