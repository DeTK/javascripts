const sleep = this.prototype.time = function(sec = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(` ${this.sec / 1000} 초`);
        }, this.sec);
    });
};
