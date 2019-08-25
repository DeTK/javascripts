async function sleep (sec) {
    await function(){
        return new Promise((resolve, reject) => {
            setTimeout(function(){
                resolve("성공");
            }, sec);
        });
    }
}
