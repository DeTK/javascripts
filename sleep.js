function sleep (sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(` ${sec} 초`);
        }, sec);
    });
}
