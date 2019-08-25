async function sleep (sec) {
    return function(){
        return new Promise((resolve, reject) => {
            setTimeout(function(){
                resolve("성공");
            }, sec);
        });
    }
}
