{sleep :(sec = 0){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`성공1`);
    },sec);
  });
}
}
