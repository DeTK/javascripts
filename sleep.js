var sleep = {
    if(false === (this instanceof Object)){
        return new sleep();
    }
    time : function(sec = 0) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, sec);
        }).then();
    },
}
