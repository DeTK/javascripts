const sleep = function() {
    this.sec = 0;
};
sleep.prototype.time = function(s = 0) {
    this.sec = s;
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(` ${this.sec / 1000} 초`);
        }, this.sec);
    });
    return this;
};
sleep.prototype.c = function() {
    console.log(this.sec);
    return this;
};
