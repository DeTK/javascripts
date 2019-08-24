async function sleep (sec) {
        await timer(sec);
}
function timer(sec)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("성공");
        }, sec);
    });
}