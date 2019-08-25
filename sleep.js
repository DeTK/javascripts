function sleep(sec = 0){
    this.sec = sec;
    if(false === (this instanceof sleep)){
        return new sleep();
    }
    return {
        time : function() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(` ${this.sec / 1000} 초`);
                }, sec);
            }).then(r => console.log(r));
        },
        c : function(){
            console.log("테스트");
            return this;
        }
    }
}
