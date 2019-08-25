async function sleep (sec) {
    return function(){
        new Promise((resolve, reject) => {
            setTimeout(function(){
                resolve("성공");
            }, sec);
        });
    }
}
