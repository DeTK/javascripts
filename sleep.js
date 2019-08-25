function sleep (sec) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve("성공");
        }, sec);
    });
}
