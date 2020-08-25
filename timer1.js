const timerArgs = process.argv.slice(2);

// console.log(timerArgs);

for (let timer of timerArgs) {
  
  if (timer > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log('.');
    }, timer * 1000);
  }

};

