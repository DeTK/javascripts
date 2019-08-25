function sleep(sec){
  return new Promise((resolve, reject) => {
    setTimeout((sec) => {
      resolve(`{sec} 성공`);
    },sec);
  });
}
