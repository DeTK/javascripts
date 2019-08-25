function sleep(sec){
  let s = sec;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`{s} 성공`);
    },sec);
  });
}
