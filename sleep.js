function sleep(){
    return {
        time : function(sec = 0) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(` ${sec / 1000} 초`);
                }, sec);
            }).then(r => console.log(r));
        }
    }
}
