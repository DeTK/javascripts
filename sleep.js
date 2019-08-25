function sleep(sec){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${sec} 성공`);
    },sec);
  });
}
