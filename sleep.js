function sleep (sec) {
    return {
        time : function() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(` ${sec / 1000} 초`);
                }, sec);
            })
        },
        console : function() {
            return console.log(sec);
        }
    }
}
