function sleep(sec){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(sec);
      resolve(`{sec} 성공`);
    },sec);
  });
}
