const sleep = function() {
    this.sec = 0;
    this.prototype.time = function(s = 0) {
    this.sec = s;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(` ${this.sec / 1000} 초`);
        }, this.sec);
    });
        
    };
    this.prototype.c = function() {
        console.log(this.sec);
        return this;
    };
};


