function sleep(sec = 0){
  console.log(this.sec);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`성공`);
    },sec);
  });
}.bind(this);
