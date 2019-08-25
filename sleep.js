function sleep (s) {
    let sec = s
}
sleep.prototype.time = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(` ${sec / 1000} 초`);
        }, sec);
    })
}
sleep.prototype.console = function() {
    console.log(sec);
}
