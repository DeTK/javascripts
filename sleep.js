function sleep (sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("성공");
        }, sec);
    });
}