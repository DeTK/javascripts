const sleep = function() {
    let sec = s
};
sleep.prototype.time = function(s) {
    this.sec = s
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(` ${this.sec / 1000} 초`);
        }, this.sec);
    })
};
sleep.prototype.consoles = function() {
    console.log(this.sec);
};
