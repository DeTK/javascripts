function sleep(){
    this.eFlag = false;
    if(false === (this instanceof sleep)){
        return new sleep();
    }
    return {
        time : function(sec = 0) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(` ${sec / 1000} 초`);
                }, sec);
            }).then(r => console.log(r));
        },
        seletor : function(e){
            if (document.querySelector(e)) {
                this.eFlag = true;
            }
            return this;
        }
    }
}
