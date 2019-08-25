function sleep(sec = 0){
    this.s = sec;
    if(false === (this instanceof sleep)){
        return new sleep();
    }
    return {
        time : function() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(` ${this.s / 1000} 초`);
                }, this.s);
            }).then(r => console.log(r));
        },
        c : function(){
            console.log("테스트");
            return this;
        }
    }
}
