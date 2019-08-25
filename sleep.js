function sleep (sec) {
    return {
        time : new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(` ${sec / 1000} 초`);
            }, sec);
        });
        consoles : function(){console.log(sec)
    }
}
